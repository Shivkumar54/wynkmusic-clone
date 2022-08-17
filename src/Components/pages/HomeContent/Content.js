import React from 'react'
import "./Content.css"
import logoo from "../../images/logoo.png"
const Content = () => {
  return (
      <div className='container boxeer'>
      <div className="about">
      <h4>About Wynk Music</h4> 
       <p className='para'>Wynk Music is a complete package that allows you to stream music online, set caller tunes, listen to podcasts, download MP3 music offline, and much more! Since music is essentially the only thing that can truly understand a person, we work hard to offer our audience the ideal blend of MP3 from your favorite albums & artists in HD Quality. We have made online music streaming simple, fun, and all about you! So, what’s the wait for, Discover and listen to millions of online songs from different genres, explore mind-blowing playlists, podcasts & Download MP3 Songs exclusively on Wynk Music. Keep Wynking!</p> 
      </div> 
      <div className="down">
        <div className="imager">
          <img src={logoo} alt="" width="80px" />
          <div className="contenter">
          <h4>Best way to Listen to Music!</h4>
          <p>Don’t forget to install Wynk Music on your mobile phones</p>
          </div>
        </div>
        <div className="apper">
          <img src="https://wynk.in/_next/static/media/play-store.28ce99c9.png?imwidth=256" alt="" />
          <img src="https://wynk.in/_next/static/media/apple-store.fd317c9d.png?imwidth=256" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Content