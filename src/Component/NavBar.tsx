import { Link } from 'gatsby'
import React from 'react'

const text = {
    color:'#ffffff'
  }
  const LogoStyle = {
    color:'#ffffff'
  }
  const navBG={
    background:'#000000'
  }
 
 const NavBar = () => {
   return (
       <div style={navBG}>
           <Link style={text}>
           <h2 style={LogoStyle}>OPENAUTO</h2>
           </Link>
           <Link style={text}>+769 586 4558 </Link>
           <Link style={text} >Service@openauto.ca </Link>
           <Link style={text} >Download the mobile app </Link>
       </div>
   )
 }
 
 export default NavBar