import React from 'react'
import { largeAppliance } from './data/data.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
export const LargeAppli = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true
  };


  return (




    <div className='productrange'>

      <div className='topheading'>

        <h3>Appliance</h3>
        <Link to="laptop"> <p>view All</p></Link>


      </div>





      <div className='product'>



        <Slider {...settings}>



          {largeAppliance.map((product) => (

            <div className='productdatadiv'>

              <div >
                <img src={product.src} alt='sd' />
              </div>


              <div>
                <p>{product.title}</p>
                <Link to="/homeappli"> <h1>{product.price}</h1></Link>
              </div>





            </div>

          ))}

        </Slider>
      </div>
    </div>





  )
}

