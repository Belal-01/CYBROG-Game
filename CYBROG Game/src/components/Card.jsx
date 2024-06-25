import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
const Card = (props) => {
  return (
    <div className="card">
    <img src={`../../public/images/${props.img}.jpg`} alt="card-img" />
    <div className="card-body">
      <div className="card-body__info">
        <span className='card-body__info__name'>{props.title}</span>
        <span className='card-body__info__state'>{props.state}</span>
      </div>
      <div className="card-body__rating">
        <span><span style={{color:"yellow"}}><FaStar /></span> {props.rating}</span>
        <span><span style={{color:"#ec6090"}}><FaDownload /></span> {props.views}M</span>
      </div>
    </div>
  </div>
  )
}

export default Card
