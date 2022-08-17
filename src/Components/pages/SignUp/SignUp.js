import React from 'react'
import SignUpImage from "../../images/signup.svg"

const SignUp = () => {
  return (
    <div className='downloader container '>
      <div className="imagefile">
        <img src={SignUpImage} alt="" width="350px"/>
      </div>
      <div className="contact">
        <h2>Login/Sign Up</h2>
        <p>Get a personalised experience, and access all your music</p>

        <input type="text" placeholder='+91' className='static' />
        <input type="text" placeholder='Mobile number' />
        <br />
        <button type="submit">Send OTP</button>
        <div className="apper">
          <img src="https://wynk.in/_next/static/media/play-store.28ce99c9.png?imwidth=256" alt="" />
          <img src="https://wynk.in/_next/static/media/apple-store.fd317c9d.png?imwidth=256" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SignUp