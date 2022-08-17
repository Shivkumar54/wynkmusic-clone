import React, { useState } from 'react'
import "./navbar.css"
import { FaBars, FaTimes } from "react-icons/fa"
import { Outlet, Link } from "react-router-dom";

import Signature from "../../images/signature.png"

const Navbar = () => {

    const NavList = [
        {
            id: 1,
            title: "Home",
            navigate: '/'
        },
        {
            id: 2,
            title: "About",
            navigate: '/about'
        },
        {
            id: 3,
            title: "Jobs & Internships",
            navigate: '/jobs'
        },
        {
            id: 4,
            title: "Projects",
            navigate: '/projects'
        },
        {
            id: 5,
            title: "Experience",
            navigate: '/experience'
        },
        {
            id: 6,
            title: "Contact",
            navigate: '/contact'
        },

    ]

    const [nav, setNav] = useState(false)

    return (
        <div className='navBase'>
            <div className='navroot container'>
                <div className="navLogo">
                    <a href="/">
                        <img src={Signature} alt="" />
                    </a>
                </div>
                <div className="navLinks">
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

            <Outlet />
        </div>
    )
}

export default Navbar


