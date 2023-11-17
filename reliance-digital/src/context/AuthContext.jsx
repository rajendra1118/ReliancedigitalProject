import React, { useState } from 'react'
import { createContext } from 'react'



export const mynavcontext = createContext()
export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [userDetails, setUserDetails] = useState({})
  const [cartDetails, setCartDetails] = useState([])
  const obj = {
    isAuth,
    setIsAuth,
    userDetails,
    setUserDetails,
    cartDetails,
    setCartDetails,
  }


  return (
    <mynavcontext.Provider value={{ ...obj }}>
      {children}
    </mynavcontext.Provider>
  )
}
