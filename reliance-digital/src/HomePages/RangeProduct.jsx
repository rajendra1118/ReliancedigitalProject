import React from 'react'
import { productRange } from './data/data.js'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

import './RangeProduct.css'

export const RangeProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true
  };


  return (



    <div className='productranges'>


      <Slider {...settings}>



        {productRange.map((product) => (

          <div className='productdatadivs'>

            <div >
              <img src={product.src} alt='sd' />
            </div>


            <div>
              <Link to="mobile"> <h1>{product.logo}</h1></Link>
            </div>




          </div>

        ))}

      </Slider>




    </div>


  )
}



