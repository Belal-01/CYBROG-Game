import React from 'react'
import Card from '../../../components/Card/Card'
import SectionWrapper from '../../../components/sectionWrapper/SectionWrapper'
import SectionHeader from '../../../components/sectionHeader/SectionHeader'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMostPopularPosts } from './mostPopulat'



const MostPopular = () => {
 const popularPosts = useSelector((state)=>{return state.mostPopularPosts})

 const dispatch = useDispatch()
 
  React.useEffect(() => {
   dispatch(fetchMostPopularPosts())
  }, [])


  
  const postsElement = popularPosts.posts.map(post =>
    <Card {...post} key={post.id} />
  )
  return (
    <SectionWrapper>
      <SectionHeader>
        <a href="#">Most Popular</a>
        <span> &nbsp; Right Now</span>
      </SectionHeader>
      <div className="most-popular__cards">
        {popularPosts.loading && <div>loading...</div>}
        {postsElement}
      </div>

    </SectionWrapper>
  )
}

export default MostPopular
