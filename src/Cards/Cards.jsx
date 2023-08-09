import React from 'react'
import './cards.css'
import { details } from './Cardsdetails'
import { smallcards } from './Cardsdetails'
const Cards = () => {
  return (
    <>
     <div className="latestoffers">
      <div className="latest-offer">
        <p className="offer-title">Latest Offerings</p>

      </div>
      <div className="cards">
      {
       details.map((detail)=>(
       
        <div class="card" style={{ width: "20rem" }}>
          <img class="card-img-top1" src={detail.image} />
          <div class="card-body">
    
            <h4 class="card-title">{detail.title}</h4>
            <p className="subhed">{detail.subhed}</p>
            <p class="card-text">
               {detail.content}
            </p>
            <p className='price'>{detail.rate}</p>
            <button className='add-btn'>Add Item</button>
          </div>
        </div>

       

        
      

       ))

      }
     </div>
    </div>
    

    <div className="latestoffers1">
      <div className="latest-offer1">
        <p className="offer-title1">Barista Recommends</p>

      </div>
      <div className="cards1">
      {
       smallcards.map((smallcard)=>(
       
        <div class="card1" style={{ width: "20rem" }}>
          <img class="card-img-top2" src={smallcard.image} />
          <div class="card-body1">
    
            <h4 class="card-title1">{smallcard.title}</h4>
            <p className="subhed1">{smallcard.sub}</p>
            <p class="card-text1">
               {smallcard.content}
            </p>
            <p className='pric1e'>{smallcard.rate}</p>
            <button className='add-btn'>Add Item</button>
          </div>
        </div>

       

        
      

       ))

      }
     </div>
    </div>
      
    </>
  )
}

export default Cards
