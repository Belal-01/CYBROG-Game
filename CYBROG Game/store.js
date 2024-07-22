import { configureStore } from "@reduxjs/toolkit";
import mostPopularReducer from './src/sections/Home-sections/MostPopular/mostPopulat'
import gamesLibraryReducer from './src/sections/Home-sections/GameLibrary/gameLibrary'
import profileReducer from './src/sections/profile-sections/profile-Heroo/profileClips'
import liveStreamReducer from './src/sections/Streams-sections/LiveStreams/liveStream'
import topStreamersReducer from './src/components/topStreamers/topStreamers'
import popularLiveStreamsReducer from './src/sections/Streams-sections/MostPopularLiveStreamers/popularLiveStream'
import mostPopularLiveStramReducer from './src/sections/Browse-section/MostPopularLiveStream/mostPopularLiveStreamInBrowse'
import topDownloaded from "./src/components/TopDownloading/topDownloaded";
import topDownloadedReducer from "./src/components/TopDownloading/topDownloaded";


export const store = configureStore({
  reducer:{
    mostPopularPosts:mostPopularReducer,
    gamesLibrary:gamesLibraryReducer,
    profileClips:profileReducer,
    liveStreams:liveStreamReducer,
    topStreamers:topStreamersReducer,
    popularLiveStreams:popularLiveStreamsReducer,
    mostPopularLiveStreams:mostPopularLiveStramReducer,
    topDownloaded:topDownloadedReducer,

  }
})