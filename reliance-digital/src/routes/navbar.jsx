import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { mynavcontext } from '../context/AuthContext'


const Navbar = () => {
  const { isAuth, userDetails } = useContext(mynavcontext)
  return (
    <div className='navbar' >

      <Link to="/" ><img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="" /></Link>

      <input type="search" placeholder='Find your best product' />


      <div className='loginmeneu'>
        <div>
          <Link to="/findstore" >Find a store</Link>
          <Link to="/buyingguide" >Buying Guides</Link>
          <Link to="/contactus" >Contact us</Link>

        </div>

        <div>
          <Link to='/pincode' >PinCode</Link>
          <Link to="/cart" >Cart</Link>
          <Link to="/login" >{isAuth === true ? userDetails.name : "Login"}</Link>


        </div>
      </div>



    </div>
  )
}

export { Navbar }
