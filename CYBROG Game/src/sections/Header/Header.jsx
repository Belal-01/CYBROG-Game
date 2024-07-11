import React from 'react'
import logo from '../../../public/images/logo.png'
import NavItem from '../../components/NavItem/NavItem'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import profile from "../../../public/images/profile-header.jpg"
const Header = () => {
  const [navItemState,setNavItemState] = React.useState(()=>JSON.parse(localStorage.getItem('navArray'))||[
    {   
      name:'Home',
      isActiv:true
    },
    {
      name:'Browse',
      isActiv:false
    },{
      name:'Details',
      isActiv:false
    },{
      name:'Streams',
      isActiv:false
    },{
      name:'Profile',
      isActiv:false
    }])
    function handelClick(name){
        const newArray=[]
        navItemState.forEach((nav)=>{
        if(nav.name===name){
          nav.isActiv=true;
        }
        else{
          nav.isActiv=false
        }
        newArray.push(nav)
      })
      localStorage.setItem('navArray',JSON.stringify(newArray))
      setNavItemState(newArray)
    
    }
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
            <NavItem handelClick={handelClick} name={'Home'} isActiv={navItemState[0].isActiv}>
              <Link to="/" >Home</Link>
            </NavItem>
             
            <NavItem handelClick={handelClick} name={'Browse'} isActiv={navItemState[1].isActiv}>
              <a href="#">Browse</a>
            </NavItem>
                          
            <NavItem handelClick={handelClick} name={'Details'} isActiv={navItemState[2].isActiv}>
              <a  href="#">
                Details
              </a>
            </NavItem >
                        
            <NavItem handelClick={handelClick} name={'Streams'} isActiv={navItemState[3].isActiv}>
              <a  href='#'>Streams</a>
            </NavItem>

            <div className='profile-Wrapper'>
            <NavItem handelClick={handelClick} name={'Profile'} isActiv={navItemState[4].isActiv}>
              <Link to="/profile" >Profile</Link>
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
