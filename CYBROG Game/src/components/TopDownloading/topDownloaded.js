import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocs, collection } from 'firebase/firestore';
import { dp } from "../../../firebase";



export const fetchTopDownloaded =  createAsyncThunk(
  'topDownloaded/fetchTopDownloaded',
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(dp, 'topDownloaded'));
      const profileCLips = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return profileCLips;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading:false,
  posts:[],
  error:''
}
const topDownloadedSlice = createSlice({
  name:'profileClips',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchTopDownloaded.pending,(state)=>{
      state.loading = true
      state.posts=[],
      state.error=''
    })
    builder.addCase(fetchTopDownloaded.fulfilled,(state,action)=>{
      state.loading = false
      state.posts=action.payload,
      state.error=''
    })
    builder.addCase(fetchTopDownloaded.rejected,(state,action)=>{
      state.loading = false
      state.posts=[],
      state.error=action.error
    })
  }
})

export default topDownloadedSlice.reducer