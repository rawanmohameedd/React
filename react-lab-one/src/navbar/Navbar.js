import React from "react";
import logo from "../logo.svg";
import  "./navbar.css"
const Navbar = () => {
    return (
    <div className='navbar'>
        <img src={logo} width={100} height={100}  alt='lab logo'/>
        <ul className='navbarComponents'>
            <li className="item"> <a href="#"> Home </a></li>
            <li className="item"><a href="#"> About</a></li>
            <li className="item"><a href="#"> Profile</a></li>
        </ul>
    </div>
    );
};



export default Navbar