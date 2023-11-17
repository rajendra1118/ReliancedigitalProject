import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Accessories.css'
import { mynavcontext } from '../context/AuthContext'

export const Accessories = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  // const { setCartDetails } = useContext(mynavcontext)


  const getData = async () => {
    setLoading(true)
    try {

      let res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      setData(data)
      setLoading(false)
      console.log(data)
    } catch (error) {
      setLoading(false)
      setErr(true)
    }

  }

  useEffect(() => {

    getData()
  }, [])


  if (loading) {
    return <h1>Loading....</h1>
  }
  if (err) {
    return <h1>Somthing went wrong.....try again </h1>
  }

  const sortPriceLh = () => {
    data.sort((a, b) => a.price - b.price)
    setData([...data])
  }
  const sortPricehl = () => {
    data.sort((a, b) => b.price - a.price)
    setData([...data])
  }

  // const AddToCart = (obj) => {
  //   setCartDetails([...setCartDetails, obj])
  // }


  return (
    <div className='maindiv'>
      <div className='sidediv' >
        <h1>Filter</h1>
        <button onClick={sortPriceLh} >Sort for Price: high to Low</button>
        <button onClick={sortPricehl} > Low To high</button>

        <div>
          <input type="Enter Price" />
          <select name="" id="">
            <option value="">Below</option>
            <option value="">Equal</option>
            <option value="">Above</option>

          </select>
        </div>



      </div>

      <div className='Mobileproducts'>


        <div className='titldiv' >
          <h2>All Accessories</h2>
        </div >
        <div className='mobilelists'>
          {
            data.map((ele) => (

              <div className='mobiledatas' >
                <Link><img src={ele.image} alt="" /></Link>
                <p>{ele.price}</p>
                <p>{ele.title
                }</p>
                <button >Add to Cart</button>
              </div>

            ))
          }
        </div>
      </div>



    </div>
  )
}