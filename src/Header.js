import React, { useState } from 'react';
import SingInForm from "./SingInForm";
import Navbar from './Navbar';


const Header = () => {

  const [showForm, setShowForm] = useState(false);

  const handleNavClick = (link,e) => {
    e.preventDefault();
    if (link === 'SingInForm') {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };

  return (
    <header>
        <div className="header">
            
            <a id="companyName"><span className="orange">Spices </span> & <span className="green"> Herbs</span></a>
       
            <ul  className="navbar1">
             
              <li ><a   href="/index.html"><i className="fa-regular fa-heart"></i>Wish List</a></li>
              <li >
                <a  href="/contact/contact.html"><i className="fa-solid fa-globe"></i>EN</a>
              </li>
              <li >
                <a  href="/card/products_tables.html"><i className="fa-solid fa-cart-shopping"></i>Shopping Cart</a>
              </li>
              <li >
                <a  href="./SingInForm" onClick={ (e) => handleNavClick("SingInForm",e)}><i className="fa-solid fa-user"></i>My Account</a>
              </li>
            </ul>
      </div>
      <Navbar/>
      {showForm && (<SingInForm/> )}
   
    </header>
  
 );
};

export default Header