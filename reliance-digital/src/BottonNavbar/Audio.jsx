import React from 'react'
import { Link } from 'react-router-dom';
import { audio } from '../HomePages/data/data'
export const Audio = () => {


  return (
    <div className='maindiv'>
      <div className='sidediv' >
        <h1>Filter</h1>
        <input type="range" />


      </div>

      <div className='Mobileproduct'>


        <div className='titldiv' >
          <h2>Audio & Headseats</h2>
        </div >
        <div className='mobilelist'>
          {
            audio.map((ele) => (

              <div className='mobiledata' >
                <Link><img src={ele.src} alt="" /></Link>
                <p>{ele.price}</p>
                <p>{ele.title
                }</p>
                <button>Add to Cart</button>
              </div>

            ))
          }
        </div>
      </div>



    </div>
  )
}
