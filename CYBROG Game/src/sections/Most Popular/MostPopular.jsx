import React from 'react'
import Card from '../../components/Card/Card'
import SectionWrapper from '../../components/sectionWrapper/SectionWrapper'
import SectionHeader from '../../components/sectionHeader/SectionHeader'
import { gamesInfo } from '../../../firebase'
import { onSnapshot } from 'firebase/firestore'



const MostPopular = () => {
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
  return (
    <SectionWrapper>
      <SectionHeader>
        <a href="#">Most Popular</a>
        <span>  Right Now</span>
      </SectionHeader>
      <div className="most-popular__cards">
        {cardsElement}
      </div>

    </SectionWrapper>
  )
}

export default MostPopular
