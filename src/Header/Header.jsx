import React from 'react'
import'./Header.css'
import { roundLists } from './Roundimages'

const Header = () => {
  return (
    <>
    <div className="container">
        
        <div className="row">
        <h1 className="rewards">Avail benefits! Sign up for My Starbucks Rewards.</h1>
        <button className="knowmore-btn">Know More</button>
        </div>
  
        <div className="handcrafted">
            
            <h1 className="title">Handcrafted Curations</h1>
            <div className="round">
        {
          roundLists.map((roundlist)=>(
            <figure className="main-round">
            <img
              className="round-image"
              src={roundlist.image}
              alt=""
              style={{ width: "8rem", height: "8rem" }}
            />
            <figcaption className="round-title">{roundlist.title}</figcaption>
          </figure>

          ))
        }
        </div>
     

            
        </div>
    </div>

      
    </>
  )
}

export default Header
