import logo from '../../../public/images/logo.png'
import NavItem from '../../components/NavItem/NavItem'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import profile from "../../../public/images/profile-header.jpg"
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg Cybrog-navbar">
      <div className="container-fluid inter-nav">

         <a href="/">
            <img src={logo} alt="CYBROG" />
          </a>

        
          <div className='inter-nav__search'>
          <form className='d-flex align-items-center ' role="search">
              <span><CiSearch/></span>
              <input className="form-control" type="search" placeholder="Type Something" aria-label="Search"/>           
          </form>
          </div>     
  
          <div>
            <span className="navbar-toggler toggler-button" type="button"
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
              <span className="toggler-button__text"></span>
              <span className="toggler-button__text2"></span>
              </span>
          </div>
         
        <div className="collapse navbar-collapse collaps-section" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <NavItem>
              <Link to="/" className="nav-link">Home</Link>
            </NavItem>
             
            <NavItem>
            <a className="nav-link" href="#">Browse</a>
            </NavItem>
                          
            <NavItem>
              <a className="nav-link" href="#">
                Details
              </a>
            </NavItem>
                        
            <NavItem>
            <a className="nav-link  custom-active" href='#'>Streams</a>
            </NavItem>

            <div className='profile-Wrapper'>
            <NavItem>
             <Link to="/profile" className="nav-link">Profile</Link>
            </NavItem>
            <img src={profile} alt="" />
            </div>             
           
                        
          </ul>
        
        </div>


        
      
      </div>
    </nav>
  )
}

export default Header
