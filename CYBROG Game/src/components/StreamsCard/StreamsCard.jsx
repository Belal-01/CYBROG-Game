import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
const StreamsCard = () => {
  return (
    <div className="card__stream">
      <div className="card__stream--img">
        <img src={`../../../public/images/featured-03.jpg`} alt="Stream-img" />
        <div className="show-streamers">2.4k Streaming</div>

      </div>
    <div className="card__stream--body">
      <div className="card__stream--body__info">
        <span className='card__stream--body__info__name'>Belal </span>
        <span className='card__stream--body__info__state'>Standard</span>
      </div>
      <div className="card__stream--body__rating">
        <span><span style={{color:"yellow"}}><FaStar /></span> 4.8</span>
        <span><span style={{color:"#ec6090"}}><FaDownload /></span> 2.4 M</span>
      </div>
    </div>
  </div>
  )
}

export default StreamsCard
