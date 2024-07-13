import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

const TopDownloadedGame = () => {
  return (
    <>
      <div className='topDownloadedGame'>
        <div className="topDownloadedGame__info2">
        <div className="topDownloadedGame__img">
            <img src="../../../public/images/game-02.jpg" alt="person img" />
          </div>
          <div className="topDownloadedGame__info">
              <div className="topDownloadedGame__info--name">Fortnite</div>
              <div className="topDownloadedGame__info--state">Sandbox</div>
              <div className="topDownloadedGame__info--rating">
              <span><span style={{color:"yellow"}}><FaStar /></span> 4.9 &nbsp;&nbsp;</span>
              <span><span style={{color:"#ec6090"}}><FaDownload /></span> 2.2M</span>
              </div>
          </div>
        </div>
          
          <div className="topDownloadedGame__download">
            <span style={{color:"#ec6090"}}><FaDownload /></span>
          </div>     
      </div>
      <hr className='streamerAfter'/>
    </>
  )
}

export default TopDownloadedGame
