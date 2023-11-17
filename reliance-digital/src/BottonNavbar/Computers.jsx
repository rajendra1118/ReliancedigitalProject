import React, { useState } from 'react'
import { laptopData } from '../HomePages/data/data'
import { Link } from 'react-router-dom';
import { mynavcontext } from '../context/AuthContext';
import { useContext } from 'react';

export const Computers = () => {
  const [productdata, setProductData] = useState([])

  const { isAuth, cartDetails, setCartDetails } = useContext(mynavcontext)


  const addToCart = (obj) => {

    console.log(obj)

    setCartDetails([...cartDetails, obj])

  }




  return (
    <div className='maindiv'>
      <div className='sidediv' >
        <h1>Filter</h1>
        <input type="range" />


      </div>

      <div className='Mobileproduct'>


        <div className='titldiv' >
          <h2>Laptops & Desktop</h2>
        </div >
        <div className='mobilelist'>
          {
            laptopData.map((ele) => (

              <div className='mobiledata' >
                <Link to="/computers"><img src={ele.src} alt="" /></Link>
                <p>{ele.price}</p>
                <p>{ele.title
                }</p>
                <button onClick={() => addToCart(ele)}>Add to Cart</button>
              </div>

            ))
          }
        </div>
      </div>



    </div>
  )
}