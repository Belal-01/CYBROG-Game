import Header from "./sections/Header"
import Container from "./components/Container"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
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
      </Container>
    </div>
  )
}

export default App
