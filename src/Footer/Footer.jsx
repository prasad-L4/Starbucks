import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import Starlogo from "../Logo/Starlogo.png";
import {BsApple}from'react-icons/bs'
import {BiLogoPlayStore} from'react-icons/bi'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <p className="logo-footer"></p>
          <p className="caption-footer"></p>
        </div>
      
      </div>
      <di v className="footer-bottom">
        <div  className="footer-img">
            <img style={{height:'4rem'}} src={Starlogo} alt="" />
        </div>
        <div className="footer-bottom-sub">
         
          <p className="footer-sub-heading">About Us</p>
          <div className="text">
            <p className="heritage">Our Heritage</p>
            <p className="text-cmpny">Our Company</p>
            <p className="text-coffe">Coffeehouse</p>
      
          </div>
        </div>
        <div className="footer-bottom-sub">
         
          <p className="footer-sub-heading">Responsibility</p>
          <div className="text">
            <p className="text-cmt">Community</p>
            <p className="text-ethical">Ethical Sourcing</p>
            <p className="text-env">Environment</p>
            <p className="text-div">Diversity</p>
          </div>
        </div>
        <div className="footer-bottom-sub">
          
          <p className="footer-sub-heading">Quick Links</p>
          <div className="text">
            <p className="text-delv">Delivery</p>
            <p className="text-season">Season's Gifting</p>
            <p className="text-car">Careers</p>
            <p className="text-cus">Customer Service</p>
            <p className="text-fa">FAQs</p>
            <p className="text-priv">Privacy Policy</p>
           
          </div>
        </div>
        <div className="footer-bottom-sub">
        
          <p className="footer-sub-heading">SOCIAL MEDIA</p>
          <div className="footer-social-media">
           
           <FaFacebookSquare className="icons"/>
           <FaInstagram className="icons"/>
          
           <FaTwitterSquare className="icons"/>
        
       </div>
      
        <button className="apple-btn"><BsApple/>Download on the <br />App Store</button>
      
    
       <button className="play-btn"><BiLogoPlayStore/>Get it on <br />Google Play</button>

        </div>
      </di>
      </div>
  );
}

export default Footer;
