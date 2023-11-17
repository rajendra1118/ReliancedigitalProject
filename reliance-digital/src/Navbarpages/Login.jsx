import React from 'react'
import './Login.css'
// import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { mynavcontext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Login = () => {

  const { setIsAuth, userDetails, } = useContext(mynavcontext)
  const [state, setState] = useState({ email: "", password: "" })


  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)


    if (state.email === userDetails.email && state.password === userDetails.password) {
      alert("Login succesfull")
      setIsAuth(true)

    } else {
      alert("incorrect")

    }

  }



  return (
    <div className='topLoginDiv'>


      <img src="https://www.reliancedigital.in/akamai/images/web/LoginWebBanner.jpeg" />
      <div className='LoginDiv'>
        <div><h3>Login/Register</h3></div>
        <div>
          <form onSubmit={handleSubmit} action="">
            <input name="email" type="email" placeholder='Enter  email'
              onChange={handleChange} />
            <input name="password" type="password" placeholder='Enter password'
              onChange={handleChange} />
            <input type="submit" />

          </form>
          <Link to="/register"> <button>Register</button></Link>


          {/* <Link to="/register" ><button>Procced</button></Link> */}
        </div>
      </div>

    </div >
  )
}
