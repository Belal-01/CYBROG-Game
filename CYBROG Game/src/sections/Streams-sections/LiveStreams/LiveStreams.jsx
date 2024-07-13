import React from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import SectionWrapper from '../../../components/sectionWrapper/SectionWrapper';
import SectionHeader from '../../../components/sectionHeader/SectionHeader';
import { gamesInfo } from '../../../../firebase'
import { onSnapshot } from 'firebase/firestore'
import Card from '../../../components/Card/Card'
import StreamsCard from '../../../components/StreamsCard/StreamsCard';

const LiveStreams = (props) => {
  const [allGamesData, setAllGamesData] = React.useState([]);

  React.useEffect(() => {
    const subscrib = onSnapshot(gamesInfo, (snapShot) => {
      const newArray = snapShot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setAllGamesData(newArray)
    })
    return subscrib
  }, [])
  const cardsElement = allGamesData.map(game =>
    <Card {...game} key={game.id} />
  )
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1150},
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    // tap: {
    //   breakpoint: { max: 1290, min: 1024 },
    //   items: 3,
    //   slidesToSlide: 3 // optional, default to 1.
    // },
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
         <StreamsCard />
         <StreamsCard />
         <StreamsCard />
         <StreamsCard />
         <StreamsCard />
        </Carousel>

    </div>

      

  )
}

export default LiveStreams
