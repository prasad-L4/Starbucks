import React from 'react'


import'./Slide.css'




const Slide = () => {
   
  return (
    <>
    <div className="slider">
      <div className="image">
        <img className='png-image'  src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Frapp_Mocha_Banner_2_611041dedb.png" alt="" />
      </div>
      <div className="slide-texts">
        <p className="text1">Irresistible Indulagence</p>
        <h2 className="text-head">Mocha Cookie Crumble</h2>
        <p className="text2">Rich mocha,crunchy cookies,and velvety smooothness:A perfect Frappuccino experience! </p>
        <span className='rates'>
          <p className="rate-text">Starting From</p>
          <p className='rate'>₹ 480.00</p>

        </span>
        <div className='order-btns'>
        <button className='order-btn'>Order Now</button>
          
        </div>
      </div>

    
    </div>
    

   

    </>
  )
}

export default Slide
