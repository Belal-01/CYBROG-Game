import React from 'react'
import SectionHeader from '../sectionHeader/SectionHeader'
import TopDownloadedGame from '../TopDownloadedGame/TopDownloadedGame'
import { useSelector,useDispatch } from 'react-redux'
import { fetchTopDownloaded } from './topDownloaded'


const TopDownloading = () => {
  const topDownloaded = useSelector((state)=>{return state.topDownloaded})

  const dispatch = useDispatch()
  
   React.useEffect(() => {
    dispatch(fetchTopDownloaded())
   }, [])
   let count = 0;
 
   const postsElement = topDownloaded.posts.map(post =><TopDownloadedGame {...post}  key={post.id} />
   
   )
  return (
    <div className="topStreamers-Wrapper">
    <SectionHeader>
      <a href="#">Top</a>
      <span>&nbsp;Downloaded</span>
    </SectionHeader>

    {postsElement}





  </div>
  )
}

export default TopDownloading
