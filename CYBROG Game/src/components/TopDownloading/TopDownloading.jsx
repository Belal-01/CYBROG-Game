import React from 'react'
import SectionHeader from '../sectionHeader/SectionHeader'
import TopDownloadedGame from '../TopDownloadedGame/TopDownloadedGame'


const TopDownloading = () => {
  return (
    <div className="topStreamers-Wrapper">
    <SectionHeader>
      <a href="#">Top </a>
      <span>&nbsp; Downloading</span>
    </SectionHeader>

    <TopDownloadedGame />
    <TopDownloadedGame />
    <TopDownloadedGame />
    <TopDownloadedGame />





  </div>
  )
}

export default TopDownloading
