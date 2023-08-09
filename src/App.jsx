import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"
import Slide from "./Slide/Slide"
import'./app.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer/Footer";
import Cards from "./Cards/Cards";
import Footerimage from "./Footerimage/Footerimage";




function App() {


  return (
    <>
   <Navbar/>
   <Header/>
   <Slide/>
   <Cards/>
   <Footerimage/>
   <Footer/>
  
      
    </>
  )
}

export default App
