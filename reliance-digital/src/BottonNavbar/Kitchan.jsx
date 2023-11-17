import React from 'react'
import { largeAppliance } from '../HomePages/data/data'
import { Link } from 'react-router-dom';
export const Kitchan = () => {
  return (
    <div className='maindiv'>
      <div className='sidediv' >
        <h1>Filter</h1>
        <input type="range" />


      </div>

      <div className='Mobileproduct'>


        <div className='titldiv' >
          <h1>Kitchan Items</h1>
        </div >
        <div className='mobilelist'>
          {
            largeAppliance.map((ele) => (

              <div className='mobiledata' >
                <Link to="/kitchan"><img src={ele.src} alt="" /></Link>
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
