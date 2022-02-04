import React, {useState} from 'react';
import Logo from "../assets/Logo.jpeg";
import {Link} from "react-router-dom";
import '../styles/Navbar.css';
import ReorderIcon from'@material-ui/icons/Reorder';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }
    return (
    <div className ="navbar">
        <div className ="leftSide" id={openLinks ? "open" : "close"}>
            <img src ={Logo}/>
            <div className= "hiddenLinks">
            <Link to ="/">Home</Link>
            <Link to ={"/event"}>Events</Link>
            <Link to ="/about">About</Link>
            <Link to ="/contact">Contact</Link>
            <Link to ="/Login">Login</Link>
            <Link to ="/SignUp">SignUp</Link>
            </div>
        </div> 
        <div className ="rightSide">
            <Link to ="/">Home</Link>
            <Link to ="/event">Events </Link>
            <Link to ="/about">About</Link>
            <Link to ="/contact">Contact</Link>
            <Link to ="/Login">Login</Link>
            <Link to ="/SignUp">SignUp</Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon/>
            </button>
        </div>     
    </div>
    );
}
    
export default Navbar;