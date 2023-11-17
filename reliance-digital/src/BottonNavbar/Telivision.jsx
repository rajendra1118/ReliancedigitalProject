import React from 'react'
import { tvdata } from '../HomePages/data/data'
import { Link } from 'react-router-dom'
export const Telivision = () => {
  return (
    <div className='maindiv'>
      <div className='sidediv' >
        <h1>Filter</h1>
        <input type="range" />


      </div>

      <div className='Mobileproduct'>


        <div className='titldiv' >
          <h2>All type Tvs</h2>
        </div >
        <div className='mobilelist'>
          {
            tvdata.map((ele) => (

              <div className='mobiledata' >
                <Link to="" ><img src={ele.src} alt="" /></Link>
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