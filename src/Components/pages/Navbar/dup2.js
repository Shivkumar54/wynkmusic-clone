import React,{useState} from 'react'
import Logo from "../../images/wynk.svg"
import { FaBars, FaTimes } from "react-icons/fa"
import "./Navbar.css"
import {ImSearch} from "react-icons/im"
const Navbar = () => {

    const [nav, setNav] = useState(false)


  return (
    <div className="navv">
          <div className="navbarroot container-xl">
              <div className="navImg">
                  <img src={Logo} alt="Page Logo" width="160px"/>
              </div>
              <div className="search">
                  <ImSearch size={20} className="iconer"/>
                  <input type="text" placeholder='Search' className="searcher" />
              </div>
              <div className="navList">
                  <ul>
                      <li>Home</li>
                      <li>Podcast</li>
                      <li>Download App</li>
                      <li>Sign Up</li>
                  </ul>
              </div>
              <div className="hamburger" onClick={() => setNav(!nav)}>
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

                </div>
          </div>      
    </div>
  )
}

export default Navbar