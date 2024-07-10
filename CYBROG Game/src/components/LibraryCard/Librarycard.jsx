import React from 'react'
import { SecondaryButton } from '../buttons/Buttons'
const Librarycard = () => {
  return (
    <>
   
    <div className="Library-card">
       <div className="Library-card__img">
       <img src="../../../public/images/popular-01.jpg" alt="cardImg" />
      </div>
      <div className="Library-card__name">
        <h6>Data2</h6>
        <span>sandbox</span>
      </div>
      <div className="Library-card__spended-time">
      <h6>Hours Played</h6>
      <span>634 H 22 Mins</span>
      </div>
      <div className="Library-card__date-join">
        <h6>Date Added</h6>
        <span>24/8/2024</span>
      </div>
      <div className="Library-card__game-state">
        <h6>Currently</h6>
        <span>Downloaded</span>
      </div>
      <div className='Library-card__button'>
       <SecondaryButton>Download</SecondaryButton>
      </div>
    </div>

   </>
  )
}

export default Librarycard
