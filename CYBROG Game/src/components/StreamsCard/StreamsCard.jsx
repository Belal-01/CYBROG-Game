import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
const StreamsCard = (props) => {

  return (
    <div className="card__stream">
      <div className="card__stream--img">
        <img src={`../../../public/images/${props.img}.jpg`} alt="Stream-img" />
        <div className="show-streamers">2.4k Streaming</div>

      </div>
    <div className="card__stream--body">
      <div className="card__stream--body__info">
        <span className='card__stream--body__info__name'>{props.name} </span>
        <span className='card__stream--body__info__state'>{props.state}K download</span>
      </div>
      <div className="card__stream--body__rating">
        <span><span style={{color:"yellow"}}><FaStar /></span> {props.rate}</span>
        <span><span style={{color:"#ec6090"}}><FaDownload /></span> {props.downloads}M</span>
      </div>
    </div>
  </div>
  )
}

export default StreamsCard
