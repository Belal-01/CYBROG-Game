import React from 'react'
import LiveStreams from '../../sections/Streams-sections/LiveStreams/LiveStreams'
import PopularLiveStreamers from '../../sections/Streams-sections/MostPopularLiveStreamers/PopularLiveStreamers'

const Streams = () => {
  return (
    <div>
      <LiveStreams />
      <PopularLiveStreamers />
    </div>
  )
}

export default Streams
