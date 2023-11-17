import React, { useContext, useState } from 'react'

import { mynavcontext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import './Cart.css'

export const Cart = () => {
  const { isAuth, cartDetails, setCartDetails } = useContext(mynavcontext)
  const [data, setData] = useState([setCartDetails])
  setCartDetails(cartDetails)
  console.log(data)

  if (isAuth === false) {
    return (<Navigate to="/login" />)
  }

  return (




    <div className='maindiv'>






      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "10px"

      }}>
        {
          cartDetails.map((ele) => (

            <div className='mobiledatas' >
              <img src={ele.src} alt="" />
              <p>{ele.price}</p>
              <p>{ele.title
              }</p>

            </div>

          ))
        }
      </div>
    </div>




  )
}