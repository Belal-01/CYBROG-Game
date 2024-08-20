import React from 'react'

const BrowseService = (props) => {
  return (
    <div className='BrowseService'>
      <div className="BrowseService__img">
        <img src={`images/${props.img}.jpg`} alt="service" />

      </div>
      <div className="BrowseService__title">
        {props.title}
      </div>
      <p className="BrowseService__info">
        {props.description}
      </p>
      
    </div>
  )
}

export default BrowseService
