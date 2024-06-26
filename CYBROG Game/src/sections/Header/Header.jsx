import logo from '../../../public/images/logo.png'
import NavItem from '../../components/NavItem/NavItem'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg Cybrog-navbar">
      <div className="container">
        <a href="/">
          <img src={logo} alt="CYBROG" />
        </a>
        <button className="navbar-toggler bg-light" type="button"
         data-bs-toggle="collapse" 
         data-bs-target="#navbarSupportedContent" 
         aria-controls="navbarSupportedContent" 
         aria-expanded="false" 
         aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto" role="search">
            <input className="form-control ms-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <NavItem>
              <Link to="/" className="nav-link active text-light">Home</Link>
            </NavItem>
             
            <NavItem>
            <a className="nav-link text-light" href="/#">Browse</a>
            </NavItem>
                          
            <NavItem>
              <a className="nav-link text-light" href="/#">
                Details
              </a>
            </NavItem>
                        
            <NavItem>
            <a className="nav-link  text-light" href='/#'>Streams</a>
            </NavItem>
                         
            <NavItem>
             <Link to="/profile" className="nav-link active text-light">Profile</Link>

            </NavItem>
                        
          </ul>
        
        </div>
      </div>
    </nav>
  )
}

export default Header
