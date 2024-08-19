import React from 'react'

const PrimaryButton = (props) => {
  return (
    <div className=' button primary-button'>
      <a href="/#">{props.children}</a>    
    </div>
  )
}





const SecondaryButton = (props) => {
  return (
    <div>
        <div className='button secondary-button'>
          <a href="/#">{props.children}</a>    
        </div>
    </div>
  )
}
export default PrimaryButton
export { SecondaryButton}

