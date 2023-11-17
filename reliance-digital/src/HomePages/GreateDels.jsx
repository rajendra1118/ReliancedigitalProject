import React from 'react'
import './GreateDels.css'
export const GreateDels = ({ imagedata }) => {




  return (
    <div className='topdiv'>
      <div>
        <h4>Great Deals on Electronics</h4>
      </div>

      <div className='dels'>
        {
          imagedata.map((ele) => (
            <img src={ele.src} alt="" />
          ))
        }


      </div>







    </div>
  )
}
