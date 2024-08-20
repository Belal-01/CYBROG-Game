import React from 'react'
import { SecondaryButton } from '../buttons/Buttons'
const Librarycard = (props) => {
  return (
    <>
   
    <div className="Library-card">
       <div className="Library-card__img">
       <img src={`../../assets/images/${props.img}.jpg`} alt="cardImg" />
      </div>
      <div className="Library-card__name">
        <h6>{props.name}</h6>
        <span>sandbox</span>
      </div>
      <div className="Library-card__spended-time">
      <h6>Hours Played</h6>
      <span>{props.hoursPlayed}</span>
      </div>
      <div className="Library-card__date-join">
        <h6>Date Added</h6>
        <span>{props.dateAdded}</span>
      </div>
      <div className="Library-card__game-state">
        <h6>Currently</h6>
        <span>{props.state}</span>
      </div>
      <div className='Library-card__button'>
       <SecondaryButton>Download</SecondaryButton>
      </div>
    </div>

   </>
  )
}

export default Librarycard
