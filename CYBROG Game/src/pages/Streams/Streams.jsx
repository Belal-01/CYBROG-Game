import React from 'react'
import LiveStreams from '../../sections/Streams-sections/LiveStreams/LiveStreams'
import PopularLiveStreamers from '../../sections/Streams-sections/MostPopularLiveStreamers/PopularLiveStreamers'
import TopStreamer from '../../components/topStreamers/TopStreamer'

const Streams = () => {
  return (
    <div>
    <div className='liveStream-container'>
      <LiveStreams 
       FirstTitle="Live" SecondTitle= "Streams"
     />
      <TopStreamer />
    </div>
      <PopularLiveStreamers />
    </div>
  )
}

export default Streams
