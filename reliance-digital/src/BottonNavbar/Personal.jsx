import React from 'react'
import { personal } from '../HomePages/data/data'
import { Link } from 'react-router-dom'

export const Personal = () => {
  return (
    <div className='maindiv'>
      <div className='sidediv' >
        <h1>Filter</h1>
        <input type="range" />


      </div>

      <div className='Mobileproduct'>


        <div className='titldiv' >
          <h2>Personal Care</h2>
        </div >
        <div className='mobilelist'>
          {
            personal.map((ele) => (

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