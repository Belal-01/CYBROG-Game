import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import PrimaryButton from '../buttons/Buttons';

const Streamer = (props) => {
  return (
    <>

    <div className='streamer'>

      <div className="streamer__img">
        <span className='streamer__count'>0{props.count}</span>
      <img src={`images/${props.img}.jpg`} alt="person img" />
      </div>
      <div className="streamer__name">
        <span style={{color:"#ec6090"}}><FaCircleCheck /> </span>
        <span>{props.name} </span>
     </div>
      <div className="streamer__follow">
        <PrimaryButton>
          Follow
        </PrimaryButton>
      </div>     
    </div>
    <hr className='streamerAfter'/>
    </>
  )
}

export default Streamer
