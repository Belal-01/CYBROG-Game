import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa6";


const LiveStream = (props) => {
  return (
    <div className='liveStream'>
      <div className="liveStream__img">
        <img src={`../../../public/images/${props.img}.jpg`} alt="Streamer img" />
        <div className="streamer-live">Live</div>
        <div className='streamser-views'>
          <span><FaCircleCheck />&nbsp; 1.4K</span><span><FaGamepad />&nbsp; CC_GO</span>
        </div>
      </div>
      <div className="liveStream__body">
        <div className="liveStream__body--img">
          <img src={`../../../public/images/${props.profileImg}.jpg `}alt="" />
        </div>
        <div className="liveStream__body--info">
          <div className="liveStream__body--info-name">
          <span style={{color:"#ec6090"}}><FaCircleCheck /> </span>
          <span> {props.name} </span>
          </div>
          <div className="liveStream__body--info-state">
            <p>{props.info}</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LiveStream
