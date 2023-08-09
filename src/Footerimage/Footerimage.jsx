import React from 'react'
import './Footerimage.css'

const Footerimage = () => {
  return (
    <>
    <div className="learn-head">
        <div>
            <p className='le-head'>Learn more about world of coffe!</p>
            <div className="header1">
          <img className="image1" src='https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Coffeculture_Blog_Web_Banner_2_X_8b72db6546.jpg' alt="" />
          <div className="overlay1">
            <h1 className='text-4'>Coffe-Origin Story :Mystic,Intriguing <p className='armotic'>And Armotic</p></h1>
            <h3 className='text3'>Many certuries ago,somewhere between 800-900 AD the story of coffe <p className='first-took'>first took root in Ethiopia.</p> </h3>
            
            <button className="btn" variant="light">
              Learn More
            </button>
     </div>
            
            
        </div>
        </div>
    </div>
      
    </>
  )
}

export default Footerimage;
