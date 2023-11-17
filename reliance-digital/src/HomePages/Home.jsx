import React, { useContext } from 'react'
// import banner from '../assest/homepage/banner.avif'




import { images } from './SliderData.js'
import { ImageSlider } from './slider'
import { RangeProduct } from './RangeProduct.jsx'
import { Laptoppage } from './Laptoppage.jsx'
import { SmartWatch } from './SmartWatch.jsx'
import './laptoppage.css'
import { LargeAppli } from './LargeAppli.jsx'
import { Audio } from './Audio.jsx'
import { Tvpage } from './Tvpage.jsx'
import { GreateDels } from './GreateDels.jsx'
import { greatDels } from './data/data'
import { Slidertwo } from './Slidertwo.jsx'
import { sliderT } from './data/data'
import { mynavcontext } from '../context/AuthContext.jsx'

export const Home = () => {
  const value = useContext(mynavcontext)

  console.log(value)



  return (
    <div className='homemainDiv'>



      <ImageSlider images={images} />
      <Laptoppage />
      <SmartWatch />
      <GreateDels imagedata={greatDels} />
      <Slidertwo sliderT={sliderT} />

      <LargeAppli />
      <Audio />
      <Tvpage />

      <RangeProduct />







    </div>
  )
}
