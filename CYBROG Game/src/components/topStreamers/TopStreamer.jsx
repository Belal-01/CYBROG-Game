import React from 'react'
import SectionHeader from '../sectionHeader/SectionHeader'
import Streamer from '../Streamer/Streamer'
import { fetchTopStreamers } from './topStreamers'
import { useSelector,useDispatch } from 'react-redux'

const TopStreamer = () => {
  const topStreamers = useSelector((state)=>{return state.topStreamers})

  const dispatch = useDispatch()
  
   React.useEffect(() => {
    dispatch(fetchTopStreamers())
   }, [])
   let count = 0;
 
   const postsElement = topStreamers.posts.map(post =><Streamer {...post} count={count+=1} key={post.id} />
   
   )

  return (
    <div className="topStreamers-Wrapper">
      <SectionHeader>
        <a href="#">Top </a>
        <span>&nbsp; Streamers</span>
      </SectionHeader>

      {postsElement}


    </div>
  )
}

export default TopStreamer
