import Header from "./sections/Header/Header"
import Container from "./components/Container/Container"
import Footer from "./sections/Footer/Footer"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/App.css'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Streams from "./pages/Streams/Streams"
import Browes from "./pages/Browes/Browes"

import { useSelector } from 'react-redux'



const App = () => {
  const popularPosts = useSelector((state)=>{return state.mostPopularPosts})
  const libraryPosts = useSelector((state)=>{return state.gamesLibrary})
  const profileClips = useSelector((state)=>{return state.profileClips}) 
  const liveStreams  = useSelector((state)=>{return state.liveStreams})
  const topStreamers = useSelector((state)=>state.topStreamers)
  const popularliveStreams = useSelector((state)=>state.popularLiveStreams)
  const mostPopular = useSelector((state)=>state.mostPopularLiveStreams)
  const topDownloaded = useSelector((state)=>state.topDownloaded)



//  console.log('inside app')


  console.log(popularPosts)
  const styles = {
 
    display: popularPosts.loading||libraryPosts.loading||profileClips.loading||liveStreams.loading||topStreamers.loading||popularliveStreams.loading||mostPopular.loading||topDownloaded.loading?'none':'' 

  }
  
  return (
    <>  
  
   {popularPosts.loading||libraryPosts.loading||profileClips.loading||liveStreams.loading||topStreamers.loading||popularliveStreams.loading||mostPopular.loading||topDownloaded.loading?
<div className="spinner" style={{color:'#FFFFFF'}}>
  <div>
     <img src="../public/images/Infinity@1x-1.2s-200px-200px (1).svg"/>
  </div>
</div>:null}
    <div style = {styles}>
      <Router>
          <Header />
          <div className="first-Container">
            <Container>
              <Routes>
              <Route path="/" element={<Home/>} />
              {/* <Route path="/profile" element={<Profile/>} />
              <Route path="/Streams" element={<Streams/>} />
              <Route path="/Browse" element = {<Browes />} /> */}
              </Routes>
            </Container>
          </div>
          <Footer />
        </Router>
      </div>  
      
    </>

  )
}

export default App  
