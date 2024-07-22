import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocs, collection } from 'firebase/firestore';
import { dp } from "../../../../firebase";



export const fetchMostPopularLiveStreams =  createAsyncThunk(
  'mostPopularLiveStreams/fetchMostPopularLiveStreams',
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(dp, 'mostPopularLiveStreams'));
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
const mostPopularLiveStreamsSlice = createSlice({
  name:'liveStreams',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchMostPopularLiveStreams.pending,(state)=>{
      state.loading = true
      state.posts=[],
      state.error=''
    })
    builder.addCase(fetchMostPopularLiveStreams.fulfilled,(state,action)=>{
      state.loading = false
      state.posts=action.payload,
      state.error=''
    })
    builder.addCase(fetchMostPopularLiveStreams.rejected,(state,action)=>{
      state.loading = false
      state.posts=[],
      state.error=action.error
    })
  }
})

export default mostPopularLiveStreamsSlice.reducer