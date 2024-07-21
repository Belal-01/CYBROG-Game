import React from 'react'
import SectionHeader from '../../../components/sectionHeader/SectionHeader'
import Browes from '../../../pages/Browes/Browes'
import BrowseService from '../../../components/BrowseService/BrowseService'
import PrimaryButton from '../../../components/buttons/Buttons'

const HowToStartYourStream = () => {
  return (
    <>
    <div className='HowToStart'>
      <div className="HowToStart__Header">
        <SectionHeader>
          <a href="#">How To start Your </a>
          <span>&nbsp; Live Stream</span>
        </SectionHeader>
      </div>
    </div>
     <div className="HowToStart__Services">
       <BrowseService  img={'service-01'} title ={'Go To Your Profile'} description ={'Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.'}/>
       <BrowseService img={'service-02'} title ={'Live Stream Button'} description ={'If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com'}/>
       <BrowseService img={'service-03'} title ={'You Are Live'} description ={'You are not allowed to redistribute this templates downloadable ZIP file on any other template collection website.'} />
     </div>
     <div className="HowToStart__Services--button">
      <PrimaryButton>
        Go To Profile
      </PrimaryButton>
     </div>
   </>
  )
}

export default HowToStartYourStream
