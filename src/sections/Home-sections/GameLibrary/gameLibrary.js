import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocs, collection } from 'firebase/firestore';
import { dp } from "../../../../firebase";


export const fetcGamesLibraryPosts =  createAsyncThunk(
  'gamesLibrary/fetcGamesLibraryPosts',
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(dp, 'libraryGames'));
      const libraryGames = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return libraryGames;
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
const gamesLibrarySlice = createSlice({
  name:'gamesLibrary',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetcGamesLibraryPosts.pending,(state)=>{
      state.loading = true
      state.posts=[],
      state.error=''
    })
    builder.addCase(fetcGamesLibraryPosts.fulfilled,(state,action)=>{
      state.loading = false
      state.posts=action.payload,
      state.error=''
    })
    builder.addCase(fetcGamesLibraryPosts.rejected,(state,action)=>{
      state.loading = false
      state.posts=[],
      state.error=action.error
    })
  }
})

export default gamesLibrarySlice.reducer