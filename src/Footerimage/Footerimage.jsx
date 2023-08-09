import React from 'react'
import './Footerimage.css'

const Footerimage = () => {
  return (
    <>
    <div className="learn-head">
        <div>
            <p className='le-head'>Learn more about world of coffe!</p>
            <div className="header1">
          <img className="image1" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF9TBSk6m6npsgY6v_sKzde6S2XWis94hHC7kXxdfSNDrIgJvu8UruL7iGHw0mER_J93g&usqp=CAU' alt="" />
          <div className="overlay1">
            <h1 className='text-4'>Coffe-Origin Story :Mystic,Intriguing And Armotic</h1>
            <h3 className='text3'>Many certuries ago,somewhere between 800-900 AD the story of coffe first took root in Ethiopia.</h3>
            
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
