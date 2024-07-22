import React, { memo } from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import SectionWrapper from '../../../components/sectionWrapper/SectionWrapper';
import SectionHeader from '../../../components/sectionHeader/SectionHeader';
import { useSelector,useDispatch } from 'react-redux';
import StreamsCard from '../../../components/StreamsCard/StreamsCard';
import { fetchLiveStreams } from './liveStream';

const LiveStreams = (props) => {
  const liveStreams = useSelector((state)=>{return state.liveStreams})

  const dispatch = useDispatch()
  
   React.useEffect(() => {
    dispatch(fetchLiveStreams())
   }, [])
 
   const postsElement = liveStreams.posts.map(post =>
     <StreamsCard {...post} key={post.id} />
   )
   

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1150},
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },

    tablet: {
      breakpoint: { max: 1150, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (  

      <div className='liveStream-Wrapper'>
        <SectionHeader>
          <a href="#"> {props.FirstTitle} </a>
          <span> &nbsp; {props.SecondTitle}</span>
        </SectionHeader>

        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={'Nest Hub'}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
         {postsElement}
         {postsElement[1]}
         {postsElement[2]}
         {postsElement[0]}
        </Carousel>

    </div>

      

  )
}

export default memo(LiveStreams) 
