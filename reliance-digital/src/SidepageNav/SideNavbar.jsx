import React from 'react'
import { Link } from 'react-router-dom'

const SideNavbar = () => {
  return (
    <div>
      <div className='topDiv'>
        <h1>OUR BRAND PROMISE</h1>
        <h1>EASY RETURN</h1>
        <h1>NEXT DAY DELIVERY</h1>
        <h1>SERVICE GUARNTEE</h1>
        <h1>UNMATCHED NETWORK</h1>
        <Link to="findstore" >Find a store</Link>
        <Link to="contactus" >Contact us</Link>
      </div>

      <div>
        <Link to="home" >Relince Degital</Link>

        <input type="search" placeholder='Find your best product' />
        <Link to="cart" >Cart</Link>
        <Link to="login" >Login</Link>
      </div>



    </div>
  )
}

export { SideNavbar }
