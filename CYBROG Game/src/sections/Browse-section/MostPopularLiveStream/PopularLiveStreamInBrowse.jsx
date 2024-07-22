import React from 'react'
import SectionHeader from '../../../components/sectionHeader/SectionHeader'
import SectionWrapper from '../../../components/sectionWrapper/SectionWrapper'
import LiveStream from '../../../components/LiveStream/LiveStream'
import PrimaryButton from '../../../components/buttons/Buttons'
import { useSelector,useDispatch } from 'react-redux'
import { fetchMostPopularLiveStreams } from './mostPopularLiveStreamInBrowse'


const PopularLiveStreamInBrowse = () => {

  const mostpopularLiveStreams = useSelector((state)=>{return state.mostPopularLiveStreams})

  const dispatch = useDispatch()
  
   React.useEffect(() => {
    dispatch(fetchMostPopularLiveStreams())
   }, [])
 
   const postsElement = mostpopularLiveStreams.posts.map(post =><LiveStream {...post} key={post.id} />

   )


  return (
    <SectionWrapper>
      <SectionHeader>
        <a href="#">Most Popular</a>
        <span>&nbsp; Live Streams</span>
      </SectionHeader>

      <div className="mostPopular__liveStreams">
       {postsElement}   
      </div>
      <div className="mostPopular__liveStreams--button">

          <PrimaryButton>
            Load More Streams
          </PrimaryButton>

      </div>

    </SectionWrapper>
   
  )
}

export default PopularLiveStreamInBrowse

