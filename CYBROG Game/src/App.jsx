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
const App = () => {
  return (
    <>
    <Router>
      <Header />
        <Container>
          <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/profile" element={<Profile/>} />
           <Route path="/Streams" element={<Streams/>} />
          </Routes>
        </Container>
      <Footer />
    </Router>
    </>

  )
}

export default App
