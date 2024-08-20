import React, { useCallback, useEffect, useMemo, useState } from 'react'
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
    
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
      useEffect(() => {
          const handleResize = () => {
              setWindowWidth(window.innerWidth);
          };
  
          window.addEventListener('resize', handleResize);
  
          // Cleanup function to remove the event listener when the component unmounts
          return () => {
              window.removeEventListener('resize', handleResize);
          };
      }, []); // Empty dependency array ensures this effect runs once on mount and cleanup on unmount
  
    // console.log(windowWidth);
    const handelClick = useCallback((name)=>{
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
    
    },[])
    
    const homeElement = useMemo(()=><Link to="/" >Home</Link>,[])
    const profileElement = useMemo(()=><Link to="/profile" >Profile</Link>,[])
    const streamElement = useMemo(()=><Link  to='/Streams'>Streams</Link>,[])
    const detailsElement = useMemo(()=><a  href="#">Details </a>,[])
    const browseElement = useMemo(()=><Link to="/Browse">Browse</Link>,[])
  return (
    <nav className="navbar navbar-expand-lg Cybrog-navbar">
      <div className="container-fluid inter-nav">
         <a href="/">
            <img src={logo} alt="CYBROG" />
          </a>

        
          {windowWidth>991&&<div className='inter-nav__search'>
          <form className='d-flex align-items-center ' role="search">
              <span><CiSearch/></span>
              <input className="form-control" type="search" placeholder="Type Something" aria-label="Search"/>           
          </form>
          </div>  }   
  
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
             {homeElement}
            </NavItem>
           
             
            <NavItem handelClick={handelClick} name={'Browse'} isActiv={navItemState[1].isActiv}>
              {browseElement}
            </NavItem>
                          
            <NavItem handelClick={handelClick} name={'Details'} isActiv={navItemState[2].isActiv}>
              {detailsElement}
            </NavItem >
                        
            <NavItem handelClick={handelClick} name={'Streams'} isActiv={navItemState[3].isActiv}>
              {streamElement}
            </NavItem>

            <div className='profile-Wrapper'>
            <NavItem handelClick={handelClick} name={'Profile'} isActiv={navItemState[4].isActiv}>
              {profileElement}
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
