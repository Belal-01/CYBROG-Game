import React from 'react'
import SectionWrapper from '../../../components/sectionWrapper/SectionWrapper'
import Container from '../../../components/Container/Container'
import PrimaryButton, { SecondaryButton } from '../../../components/buttons/Buttons'
import SectionHeader from '../../../components/sectionHeader/SectionHeader'
import Clip from '../../../components/ProfileClip/Clip'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProfileClips } from './profileClips'

const ProfileHero = () => {

  const profileClips = useSelector((state)=>{return state.profileClips})

  const dispatch = useDispatch()
  
   React.useEffect(() => {
    dispatch(fetchProfileClips())
   }, [])
 
 
   
   const postsElement = profileClips.posts.map(post =>
     <Clip {...post} key={post.id} />
   )

  return (
    <SectionWrapper>
      <div className="profile-hero">      
        <div className="profile-hero__img">
          <img src="images/profile.jpg" alt="profile Img" />
        </div>
        <div className="profile-hero__info">
          <PrimaryButton>
            Offline
          </PrimaryButton>
          <div className="profile-hero__info--name">Belal khubieh</div>
          <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
          <SecondaryButton>
            Start Live Stream
          </SecondaryButton>

        </div>
        <div className='profile-hero__details'>
          <ul>
            <li>
              <span>Games Downloaded</span>
              <span className='profile-hero__details--value'>3</span>
            </li>
            <hr/>
            <li>
              <span>Friends Online</span>
              <span className='profile-hero__details--value'>16</span>
            </li>
            <hr/>

            <li>
              <span>Live Streams</span>
              <span className='profile-hero__details--value'>None</span>
            </li>
            <hr/>

            <li>
              <span>Clips</span>
              <span className='profile-hero__details--value'>29</span>
            </li>


          </ul>
        </div>
      </div>

      <hr/>

      <SectionHeader>
        <a href="/profile">Your Most Popular </a>
        <span>&nbsp;Clips</span>
      </SectionHeader>
      <div className="profile-clips">
        {postsElement}
      </div>
      <div className="load-clips-button">
        <PrimaryButton>
          Load more clips
        </PrimaryButton>
      </div>

    </SectionWrapper>
      
  
  )
}

export default ProfileHero

