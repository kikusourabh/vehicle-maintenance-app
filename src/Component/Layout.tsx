import React from 'react'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import '../css/Layout.css'
const Layout = ({children}) => {
  return (
    <div>
    <NavBar/>
        <div>{children}</div>
    <Footer/>
    </div>
  )
}

export default Layout
