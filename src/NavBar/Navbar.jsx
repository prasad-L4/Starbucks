import React from "react";
import "./Navbar.css";
import { useState } from "react";
import Starlogo from "../Logo/Starlogo.png";
import {CiSearch} from 'react-icons/ci'

const Navbar = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <div className= "navbar" >
        <span>
          <img className="logo" src={Starlogo} alt="" />
        </span>
        <span>
          <ul  className= "totallist" >
            <li style={{fontSize:'16px',fontWeight:'14'}} className= "list">Home</li>

            <li style={{fontSize:'16px',fontWeight:'14'}} className= "list" >Gift</li>

            <li style={{fontSize:'16px',fontWeight:'14'}} className= "list" >Order</li>

            <li style={{fontSize:'16px',fontWeight:'1'}} className= "list" >Pay</li>
            <li style={{fontSize:'16px',fontWeight:'1'}} className= "list" >Store</li>
          </ul>
          
        </span>
        <div className="search" >
        <input type="text" className="search-input" placeholder="Looking for something specific?" value="" />
        <span className="search-icon"><CiSearch/></span>
        </div>
   
      </div>
    </>
  );
};

export default Navbar;
