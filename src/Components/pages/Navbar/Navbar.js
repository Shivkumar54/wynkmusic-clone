import React,{useState} from 'react'
import Logo from "../../images/wynk.svg"
import { FaBars, FaTimes } from "react-icons/fa"
import { Outlet, Link } from "react-router-dom";

import "./Navbar.css"
import {ImSearch} from "react-icons/im"
const Navbar = () => {

    const NavList = [
        {
            id: 1,
            title: "Home",
            navigate: '/'
        },
        {
            id: 2,
            title: "Podcast",
            navigate: '/podcast'
        },
        {
            id: 3,
            title: "Download App",
            navigate: '/download'
        },
        {
            id: 4,
            title: "Sign Up",
            navigate: '/sign'
        },
       
       

    ]

    const [nav, setNav] = useState(false)


  return (
    <div className="navv">
          <div className="navvv">
          <div className="navbarroot container-xl">
                  <div className="navImg">
                      <Link to="/" >
                          <img src={Logo} alt="Page Logo" width="160px" />
                      </Link>
              </div>
              <div className="search">
                  <ImSearch size={20} className="iconer"/>
                  <input type="text" placeholder='Search' className="searcher" />
              </div>
              <div className="navList">
                  <ul>
                      {NavList.map(({ id, navigate, title }) => (

            <li key={id}>
                <Link className='linker' to={navigate} >{title}</Link>
            </li>
            ))}
                  </ul>
              </div>
              <div className="hamburger" onClick={() => setNav(!nav)}>
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

              </div>
              {nav && (
                    <ul className='mobileLinks' >
                        {NavList.map(({ id, navigate, title }) => (

                            <li key={id}>
                                <Link onClick={() => setNav(!nav)} className='linker' to={navigate} >{title}</Link>
                            </li>
                        ))}
                    </ul>
                )}
          </div>  
          
          </div>
          <Outlet />
    </div>
  )
}

export default Navbar