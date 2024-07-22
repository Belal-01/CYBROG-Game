import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocs, collection } from 'firebase/firestore';
import { dp } from "../../../../firebase";



export const fetchPopularLiveStreams =  createAsyncThunk(
  'popularLiveStreams/fetchPopularLiveStreams',
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(dp, 'popularLiveStreams'));
      const gamesInfo = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return gamesInfo;
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
const popularLiveStreamsSlice = createSlice({
  name:'liveStreams',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchPopularLiveStreams.pending,(state)=>{
      state.loading = true
      state.posts=[],
      state.error=''
    })
    builder.addCase(fetchPopularLiveStreams.fulfilled,(state,action)=>{
      state.loading = false
      state.posts=action.payload,
      state.error=''
    })
    builder.addCase(fetchPopularLiveStreams.rejected,(state,action)=>{
      state.loading = false
      state.posts=[],
      state.error=action.error
    })
  }
})

export default popularLiveStreamsSlice.reducer