import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocs, collection } from 'firebase/firestore';
import { dp } from "../../../../firebase";



export const fetchMostPopularPosts =  createAsyncThunk(
  'mostPopularPosts/fetchMostPopularPosts',
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(dp, 'gamesInfo'));
      console.log(dp)
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
const mostPopularSlice = createSlice({
  name:'mostPopularPosts',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchMostPopularPosts.pending,(state)=>{
      state.loading = true
      state.posts=[],
      state.error=''
    })
    builder.addCase(fetchMostPopularPosts.fulfilled,(state,action)=>{
      state.loading = false
      state.posts=action.payload,
      state.error=''
    })
    builder.addCase(fetchMostPopularPosts.rejected,(state,action)=>{
      state.loading = false
      state.posts=[],
      state.error=action.error.message
    })
  }
})

export default mostPopularSlice.reducer