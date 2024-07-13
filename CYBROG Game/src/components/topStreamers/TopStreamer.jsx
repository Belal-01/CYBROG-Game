import React from 'react'
import SectionHeader from '../sectionHeader/SectionHeader'
import Streamer from '../Streamer/Streamer'

const TopStreamer = () => {
  return (
    <div className="topStreamers-Wrapper">
      <SectionHeader>
        <a href="#">Top </a>
        <span>&nbsp; Streamers</span>
      </SectionHeader>

      <Streamer />
      <Streamer />
      <Streamer />
      <Streamer />
      <Streamer />


    </div>
  )
}

export default TopStreamer
