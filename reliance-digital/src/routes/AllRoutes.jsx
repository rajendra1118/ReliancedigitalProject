

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BuyingGuide } from '../Navbarpages/BuyingGuide'
import { Cart } from '../Navbarpages/Cart'
import { Contactus } from '../Navbarpages/Contactus'
import { FindStore } from '../Navbarpages/FindStore'
import { Login } from '../Navbarpages/Login'
import { Pincode } from '../Navbarpages/Pincode'
import { Search } from '../Navbarpages/Search'
import { Home } from '../HomePages/Home'
import { Mobile } from '../BottonNavbar/Mobile'
import { Telivision } from '../BottonNavbar/Telivision'
import { Audio } from '../BottonNavbar/Audio'
import { HomeAppli } from '../BottonNavbar/HomeAppli'
import { Computers } from '../BottonNavbar/Computers'
import { Cameras } from '../BottonNavbar/Cameras'
import { Kitchan } from '../BottonNavbar/Kitchan'
import { Personal } from '../BottonNavbar/Personal'
import { Accessories } from '../BottonNavbar/Accessories'
import { Register } from '../Register/Register'

const AllRoutes = () => {
  return (
    <div>AllRoutes

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buyingGuide' element={<BuyingGuide />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='/contactus' element={<Contactus />} />
        <Route path='/findstore' element={<FindStore />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pincode' element={<Pincode />} />
        <Route path='/search' element={<Search />} />

        {/* bottom navbar routes */}

        <Route path='/mobile' element={<Mobile />} />
        <Route path='/tv' element={<Telivision />} />
        <Route path='/audio' element={<Audio />} />
        <Route path='/homeappli' element={<HomeAppli />} />
        <Route path='/computers' element={<Computers />} />
        <Route path='/cameras' element={<Cameras />} />
        <Route path='/kitchan' element={<Kitchan />} />
        <Route path='/personal' element={<Personal />} />
        <Route path='/accessories' element={<Accessories />} />

        <Route path='/register' element={<Register />} />


      </Routes>


    </div>
  )
}

export { AllRoutes }
