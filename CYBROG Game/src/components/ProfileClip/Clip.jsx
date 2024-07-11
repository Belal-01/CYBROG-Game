import React from 'react'
import { FaEye } from "react-icons/fa";
import { RxResume } from "react-icons/rx";

const Clip = () => {
  return (
    <div className="clip-card">
      <div className="img">
        <img src="../../../public/images/clip-01.jpg" alt="card-img" />
        <div className='video-resume'>
          <span  style={{color:"#ec6090",fontSize:"18px"}}><RxResume/>
          </span>
        </div> 
      </div>
    
    <div className="clip-card__body">
        <span className='clip-card__body--name'>First Clip</span>
        <span><span style={{color:"#ec6090",fontSize:"18px"}}><FaEye /></span> 250</span>
      </div>
     
    </div>
  )
}

export default Clip
