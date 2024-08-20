import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocs, collection } from 'firebase/firestore';
import { dp } from "../../../firebase";



export const fetchTopStreamers =  createAsyncThunk(
  'topStreamers/fetchTopStreamers',
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(dp, 'topStreamers'));
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
const topStreamersSlice = createSlice({
  name:'profileClips',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchTopStreamers.pending,(state)=>{
      state.loading = true
      state.posts=[],
      state.error=''
    })
    builder.addCase(fetchTopStreamers.fulfilled,(state,action)=>{
      state.loading = false
      state.posts=action.payload,
      state.error=''
    })
    builder.addCase(fetchTopStreamers.rejected,(state,action)=>{
      state.loading = false
      state.posts=[],
      state.error=action.error
    })
  }
})

export default topStreamersSlice.reducer