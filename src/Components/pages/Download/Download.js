import React from 'react'
import DownloadImage from "../../images/download.svg"
import "./download.css"
const Download = () => {
  return (
    <div className='downloader container '>
      <div className="imagefile">
        <img src={DownloadImage} alt="" width="350px"/>
      </div>
      <div className="contact">
        <h2>Take Wynk wherever you go</h2>
        <p>Get a message to download the mobile app</p>

        <input type="text" placeholder='+91' className='static' />
        <input type="text" placeholder='Mobile number' />
        <br />
        <button type="submit">Get the Link</button>
      </div>
    </div>
  )
}

export default Download