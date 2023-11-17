import React, { useContext } from 'react'
import './Mobile.css'
import { mobiledata } from '../HomePages/data/data'
import { Link, Navigate } from 'react-router-dom';
import { mynavcontext } from '../context/AuthContext';


export const Mobile = () => {
  const { isAuth } = useContext(mynavcontext)
  if (isAuth === false) {
    return (<Navigate to="/login" />)
  }





  return (
    <div className='maindiv'>
      <div className='sidediv' >
        <h1>Filter</h1>
        <input type="range" />


      </div>

      <div className='Mobileproduct'>


        <div className='titldiv' >
          <h2>Mobile Phones & Tablest</h2>
        </div >
        <div className='mobilelist'>
          {
            mobiledata.map((ele) => (

              <div className='mobiledata' >
                <Link ><img src={ele.src} alt="" /></Link>
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
