import React from 'react'
import LiveStreams from '../../sections/Streams-sections/LiveStreams/LiveStreams'
import TopDownloading from '../../components/TopDownloading/TopDownloading'

import HowToStartYourStream from '../../sections/Browse-section/howToStartYourStream/HowToStartYourStream'
import PopularLiveStreamInBrowse from '../../sections/Browse-section/MostPopularLiveStream/PopularLiveStreamInBrowse'


const Browes = () => {
  return (
    <div>
    <div className='liveStream-container'>
      <LiveStreams FirstTitle ="Featured" SecondTitle="Game"/>
      <TopDownloading />


      <HowToStartYourStream />

     <PopularLiveStreamInBrowse />
    </div>
    </div>
  )
}

export default Browes
