import React from 'react'
import SectionWrapper from '../../../components/sectionWrapper/SectionWrapper'
import SectionHeader from '../../../components/sectionHeader/SectionHeader'
import Librarycard from '../../../components/LibraryCard/Librarycard'
import PrimaryButton from '../../../components/buttons/Buttons'
import { useSelector,useDispatch } from 'react-redux'
import { fetcGamesLibraryPosts } from './gameLibrary'
const GameLibrary = () => {
  const libraryPosts = useSelector((state)=>{return state.gamesLibrary})

  const dispatch = useDispatch()
  
   React.useEffect(() => {
    dispatch(fetcGamesLibraryPosts())
   },[])
 
 
   const postsElement = libraryPosts.posts.map(post =>
     <Librarycard {...post} key={post.id} />
   )
  return (
    <SectionWrapper>
      <SectionHeader>
        <a href="#">Your Gaming </a>
        <span> &nbsp;Library</span>
      </SectionHeader>
      {postsElement}


      <div className="mostPopular__liveStreams--button">
        <PrimaryButton>
          View Your Library
        </PrimaryButton>
      </div>

    </SectionWrapper>
  )
}

export default GameLibrary
