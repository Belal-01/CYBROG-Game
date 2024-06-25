import Header from "./sections/Header/Header"
import Container from "./components/Container/Container"
import Footer from "./sections/Footer/Footer"
import Hero from "./sections/Hero/Hero"
import MostPopular from "./sections/Most Popular/MostPopular"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/App.css'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'
const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Hero />
        <MostPopular />
      </Container>
    </div>
  )
}

export default App
