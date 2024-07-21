import { configureStore } from "@reduxjs/toolkit";
import mostPopularReducer from './src/sections/Home-sections/MostPopular/mostPopulat'


export const store = configureStore({
  reducer:{
    mostPopularPosts:mostPopularReducer
  }
})