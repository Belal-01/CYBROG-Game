import React from 'react'
import Card from '../../components/Card/Card'
import SectionWrapper from '../../components/sectionWrapper/SectionWrapper'
import SectionHeader from '../../components/sectionHeader/SectionHeader'



const MostPopular = () => {
  return (
    <SectionWrapper>    
      <SectionHeader>      
       
          <a href="#">Most Popular</a>
          <span>  Right Now</span>
        
      </SectionHeader>
      <div className="most-popular__cards">
       <Card img={"popular-01"} title={"Fortnite"} state = {"Sandbox"} rating ={4.8} views ={2.3} />
       <Card img={"popular-02"} title={"Fortnite"} state = {"Sandbox"} rating ={4.8} views ={2.3} />
       <Card img={"popular-03"} title={"Fortnite"} state = {"Sandbox"} rating ={4.8} views ={2.3} />
       <Card img={"popular-04"} title={"Fortnite"} state = {"Sandbox"} rating ={4.8} views ={2.3} />
       <Card img={"popular-05"} title={"Fortnite"} state = {"Sandbox"} rating ={4.8} views ={2.3} />
       <Card img={"popular-06"} title={"Fortnite"} state = {"Sandbox"} rating ={4.8} views ={2.3} />


  
      </div>
      
  </SectionWrapper>
  )
}

export default MostPopular
