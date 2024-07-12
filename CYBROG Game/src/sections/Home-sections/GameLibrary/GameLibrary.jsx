import React from 'react'
import SectionWrapper from '../../../components/sectionWrapper/SectionWrapper'
import SectionHeader from '../../../components/sectionHeader/SectionHeader'
import Librarycard from '../../../components/LibraryCard/Librarycard'
const GameLibrary = () => {
  return (
    <SectionWrapper>
      <SectionHeader>
        <a href="#">Your Gaming </a>
        <span> &nbsp;Library</span>
      </SectionHeader>
      <Librarycard />
      <Librarycard />
      <Librarycard />

    </SectionWrapper>
  )
}

export default GameLibrary
