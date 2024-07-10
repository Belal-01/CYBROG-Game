import React from 'react'
import SectionWrapper from '../../../components/sectionWrapper/SectionWrapper'
import Container from '../../../components/Container/Container'
import { SecondaryButton } from '../../../components/buttons/Buttons'

const ProfileHero = () => {
  return (
    <>
    <SectionWrapper>
      <div className="profile-hero__img">
        <img src="../../../../public/images/profile.jpg" alt="profile Img" />
      </div>
      <div className="profile-hero__info">
        <SecondaryButton>
          Offline
        </SecondaryButton>
        <div className="profile-hero__info--name"></div>
        <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
        <SecondaryButton>
          Start Live Stream
        </SecondaryButton>

      </div>
      <Container>
        <ul>
          <li>
            <span>Games Downloaded</span>
            <span>3</span>
          </li>
          <li>
            <span>Friends Online</span>
            <span>16</span>
          </li>
          <li>
            <span>Live Streams</span>
            <span>None</span>
          </li>
          <li>
            <span>Clips</span>
            <span>29</span>
          </li>

        </ul>
      </Container>
    </SectionWrapper>
      
    </>
  )
}

export default ProfileHero

