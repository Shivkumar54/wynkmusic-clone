import React, { useState, useEffect } from 'react'
import "./caurosal.css"
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import {FaPlayCircle} from "react-icons/fa"
const Caurosal = (props) => {

  const [recentimages, setRecentImages] = useState([])
  const [topimages, setTopImages] = useState([])
  const [newimages, setNewImages] = useState([])
  const [newPicture, setNewPicture] = useState([])

  useEffect(() => {
    const requestRecentlyplayedImages = async () => {
      const getRecentImages = await axios.get('/tv/popular');
      setRecentImages(getRecentImages.data.results)
    };
    requestRecentlyplayedImages()
  },[])



  useEffect(() => {
    const requestNewplayedImages = async () => {
      const getTopImages = await axios.get('/movie/upcoming');
      setNewImages(getTopImages.data.results)
    };
    requestNewplayedImages()
  },[])


  useEffect(() => {
    const requestTopPlayedImages = async () => {
      const getRecentImages = await axios.get('/movie/top_rated');
      setTopImages(getRecentImages.data.results)
    };
    requestTopPlayedImages()
  },[])


  useEffect(() => {
    const requestArtistPicture = async () => {
      const getArtist = await axios.get("/person/popular")
      setNewPicture(getArtist.data.results)
    };
    requestArtistPicture()
},[])

    const settings = {
      arrows: true,
        centerMode:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        centerPadding: "30px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              centerPadding: "50px",
    
            }
          },

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              centerPadding: "50px",
    
            }
          },

          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 1,
              centerPadding: "0px",
    
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerPadding: "25px",
    
            }
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "50px",
    
            }
          }
        ]
      };


  return (
    <div className='container-lg caurosalRoot '>
      <div className="siderImg">
        <h2 className='heading'>{props.heading }  Recently Played </h2>
             <Slider {...settings} className="sliderr">
          {recentimages.map((eachimg) => {
            return (
              <div key={eachimg.id} className='heroImg'>
                <FaPlayCircle size={30} className="player " />
                <img src={`https://image.tmdb.org/t/p/original${eachimg.poster_path}`} alt="" />
                <p>{`${eachimg.name}`}</p>
           </div>
         )
        })}
        </Slider>  
      </div>
      

      {/* Duplicates  */}
      <div className="siderImg">
        <h2 className='heading'>{props.heading } New Releases </h2>
             <Slider {...settings} className="sliderr">
          {newimages.map((eachimg) => {
            return (
              <div key={eachimg.id} className='heroImg'>
                <FaPlayCircle size={30} className="player " />
                <img src={`https://image.tmdb.org/t/p/original${eachimg.poster_path}`} alt="" />
                <p>{`${eachimg.original_title}`}</p>
           </div>
         )
       })}
        </Slider>  
      </div>
      
      <div className="siderImg">
        <h2 className='heading'>{props.heading } Top Lists </h2>
             <Slider {...settings} className="sliderr">
          {topimages.map((eachimg) => {
            return (
              <div key={eachimg.id} className='heroImg'>
                <FaPlayCircle size={30} className="player " />
                <img src={`https://image.tmdb.org/t/p/original${eachimg.poster_path}`} alt="" />
                <p>{`${eachimg.original_title}`}</p>
           </div>
         )
       })}
        </Slider>  
      </div>


      <div className="siderImg">
        <h2 className='heading'>{props.heading } Top Artist </h2>
             <Slider {...settings} className="sliderr">
          {newPicture.map((eachimg) => {
            return (
              <div key={eachimg.id} className='heroImg'>
                <FaPlayCircle size={30} className="player " />
                <img src={`https://image.tmdb.org/t/p/original${eachimg.profile_path}`} alt="" />
                <p>{`${eachimg.name}`}</p>
           </div>
         )
       })}
        </Slider>  
      </div>

      

      
      {/* Duplicates  */}

      

    </div>
  )
}

export default Caurosal