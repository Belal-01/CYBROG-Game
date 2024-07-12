import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import PrimaryButton from '../buttons/Buttons';

const Streamer = () => {
  return (
    <>

    <div className='streamer'>

      <div className="streamer__img">
        <span className='streamer__count'>01</span>
        <img src="../../../public/images/avatar-01.jpg" alt="person img" />
      </div>
      <div className="streamer__name">
        <span style={{color:"#ec6090"}}><FaCircleCheck /> </span>
        <span>LahtuaM </span>
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
