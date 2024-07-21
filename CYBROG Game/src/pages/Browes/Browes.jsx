import React from 'react'
import LiveStreams from '../../sections/Streams-sections/LiveStreams/LiveStreams'
import TopDownloading from '../../components/TopDownloading/TopDownloading'
import PopularLiveStreamers from '../../sections/Streams-sections/MostPopularLiveStreamers/PopularLiveStreamers'
import HowToStartYourStream from '../../sections/Browse-section/howToStartYourStream/HowToStartYourStream'

const Browes = () => {
  return (
    <div>
    <div className='liveStream-container'>
      <LiveStreams FirstTitle ="Featured" SecondTitle="Game"/>
      <TopDownloading />


      <HowToStartYourStream />

      <PopularLiveStreamers />
    </div>
    </div>
  )
}

export default Browes
