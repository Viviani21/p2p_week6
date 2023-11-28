import React,{useState} from 'react';
import SearchBar from './SearchBar';

const Navbar = () => {

  
  return (
   
    <nav className="nav-links">
      
     <input type="checkbox" id="toggle_button1" />
     <label htmlFor="toggle_button1" className="toggle_button1">
       <span className="bar1"></span>
       <span className="bar1"></span>
       <span className="bar1"></span>
     </label>
 
     <ul >     
       <li >
         <a className="active" href="/">Home</a>
       </li>
       <li >
         <a href="/aboutUs">About Us</a>
       </li>
       <li >
         <a  href="./Products" >Products</a>
       </li>
       <li >
         <a  href="/contact">Contact</a>
       </li>
       <li >
         <a  href="/blog">Blog</a>
       </li>
       <li>
         <a   href="/fqa">FAQ</a>
       </li>
     </ul>
     
     <SearchBar/> 
    
</nav> 
    
  );
};

export default Navbar