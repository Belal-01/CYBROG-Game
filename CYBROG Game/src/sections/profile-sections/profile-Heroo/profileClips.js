import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocs, collection } from 'firebase/firestore';
import { dp } from "../../../../firebase";



export const fetchProfileClips =  createAsyncThunk(
  'profileClips/fetchProfileClips',
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(dp, 'profileClips'));
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
const profileClipsSlice = createSlice({
  name:'profileClips',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchProfileClips.pending,(state)=>{
      state.loading = true
      state.posts=[],
      state.error=''
    })
    builder.addCase(fetchProfileClips.fulfilled,(state,action)=>{
      state.loading = false
      state.posts=action.payload,
      state.error=''
    })
    builder.addCase(fetchProfileClips.rejected,(state,action)=>{
      state.loading = false
      state.posts=[],
      state.error=action.error
    })
  }
})

export default profileClipsSlice.reducer