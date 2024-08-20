import React from 'react'
import { FaEye } from "react-icons/fa";
import { RxResume } from "react-icons/rx";

const Clip = (props) => {
  return (
    <div className="clip-card">
      <div className="img">
        <img src={`images/${props.img}.jpg`} alt="card-img" />
        <div className='video-resume'>
          <span  style={{color:"#ec6090",fontSize:"18px"}}><RxResume/>
          </span>
        </div> 
      </div>
    
    <div className="clip-card__body">
        <span className='clip-card__body--name'>{props.name}</span>
        <span><span style={{color:"#ec6090",fontSize:"18px"}}><FaEye /></span> {props.views}</span>
      </div>
     
    </div>
  )
}

export default Clip
