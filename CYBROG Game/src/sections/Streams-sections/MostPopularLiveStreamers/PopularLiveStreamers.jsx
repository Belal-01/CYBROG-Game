import React from 'react'
import SectionHeader from '../../../components/sectionHeader/SectionHeader'
import SectionWrapper from '../../../components/sectionWrapper/SectionWrapper'
import LiveStream from '../../../components/LiveStream/LiveStream'
import PrimaryButton from '../../../components/buttons/Buttons'

const PopularLiveStreamers = () => {
  return (
    <SectionWrapper>
      <SectionHeader>
        <a href="#">Most Popular</a>
        <span>&nbsp; Live Streams</span>
      </SectionHeader>

      <div className="mostPopular__liveStreams">
        <LiveStream />
        <LiveStream />
        <LiveStream />
        <LiveStream />
        <LiveStream />
        <LiveStream />
        <LiveStream />
        <LiveStream />    
      </div>
      <div className="mostPopular__liveStreams--button">

          <PrimaryButton>
            Load More Streams
          </PrimaryButton>

      </div>

    </SectionWrapper>
   
  )
}

export default PopularLiveStreamers
