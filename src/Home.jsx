import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Slide from './Slide/Slide'
import Cards from '../src/Cards/Cards'
import Footerimage from './Footerimage/Footerimage'
import Footer from './Footer/Footer'

function Home() {
  return (
    <div>
     
        <Navbar/>
   <Header/>
   <Slide/>
   <Cards/>
   <Footerimage/>
   <Footer/>

    </div>
  )
}

export default Home