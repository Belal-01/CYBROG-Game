import React from 'react'
import Card from '../components/Card'


const MostPopular = () => {
  return (
    <div className='most-popular__wrapper'>
      <div className="most-popular__title">
        <span>
          <a href="#">Most Popular</a>
          <span>  Right Now</span>
        </span>
      </div>
      <div className="most-popular__cards">
       <Card img={"popular-01"} title={"Fortnite"} state = {"Sandbox"} rating ={4.8} views ={2.3} />
       <Card img={"popular-02"} title={"Fortnite"} state = {"Sandbox"} rating ={4.8} views ={2.3} />
       <Card img={"popular-03"} title={"Fortnite"} state = {"Sandbox"} rating ={4.8} views ={2.3} />
       <Card img={"popular-04"} title={"Fortnite"} state = {"Sandbox"} rating ={4.8} views ={2.3} />
       <Card img={"popular-05"} title={"Fortnite"} state = {"Sandbox"} rating ={4.8} views ={2.3} />
       <Card img={"popular-06"} title={"Fortnite"} state = {"Sandbox"} rating ={4.8} views ={2.3} />


  
      </div>
      
    </div>
  )
}

export default MostPopular
