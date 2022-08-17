import React, {useEffect, useState} from 'react'
import axios from "axios"
import "./home.css"
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DefaultCaurosal from '../EntireCaurosal/DefaultCaurosal';

const Home = () => {

  const settings = {
    arrows: true,
    centerMode:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "250px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          centerPadding: "20px",

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerPadding: "20px",

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",

        }
      }
    ]
  };

  const [images, setImages] = useState([])

  useEffect(() => {
    const requestPlayerBackground = async () => {
      const getImages = await axios.get("/movie/popular");
      setImages(getImages.data.results);
    };
    requestPlayerBackground()
  },[])




  return (
    <div>
          <div className=' slide mx-auto'>
    <Slider {...settings} className="sliderr">
          {images.map((image) => {
            return (
              <div className='heroImg'>
                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="imagess" />
           </div>
         )
       })}
    </Slider>
      </div>
      <div>

      <DefaultCaurosal />
      </div>
    </div>
  )
}

export default Home