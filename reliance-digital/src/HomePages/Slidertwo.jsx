import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';




export const Slidertwo = ({ sliderT }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [AutoSlide, setAutoSlide] = useState(true);
  const length = sliderT.length;

  const prevSlide = () => {

    setCurrentIndex((prevIndex) => (prevIndex - 1 + length) % length)


  }


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % length)
  }

  useEffect(() => {
    let intervalId
    if (AutoSlide) {
      intervalId = setInterval(nextSlide, 1500)
    }

    return () => {
      clearInterval(intervalId)
    }

  })



  const handleMouseEnter = () => {
    setAutoSlide(false)
  }

  const handleMouseLeave = () => {
    setAutoSlide(true)
  }



  return (
    <div onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}

    >


      <Link to="mobile"><img src={sliderT[currentIndex]} alt={`slide-${currentIndex}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Link>

      <button onClick={prevSlide} style={{ position: 'absolute', top: '40%', left: '10px', height: "50px", background: "none", border: "1px solid black" }} > ←</button>
      <button onClick={nextSlide} style={{ position: 'absolute', top: '40%', right: '10px', height: "50px", background: "none", border: "1px solid black" }} >→</button>


    </div>
  )
};

