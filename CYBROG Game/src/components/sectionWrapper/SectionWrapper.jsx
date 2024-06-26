import React from 'react'

const SectionWrapper = (props) => {
  const styles=props.style;
  return (
    <div className="section__wrapper" style={styles}>
      {props.children}
    </div>
  )
}

export default SectionWrapper
