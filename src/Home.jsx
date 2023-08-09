import React from 'react'
import Navbar from '../src/NavBar/Navbar/'
import Header from '../src/Header/Header'
import Slide from '../src/Slide/Slide'
import Cards from '../src/Cards/Cards'
import Footerimage from '../src/Footerimage/Footerimage'
import Footer from '../src/Footer/Footer'

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