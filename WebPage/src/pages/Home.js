import React from "react"
import {Link} from "react-router-dom";
import BannerImage from "../assets/image.jpeg";
import "../styles/Home.css";


function Home() {
    return(
        <div className= "home" style={{background: `url(${BannerImage})`}}>
            
            <div className="headerContainer">
                <h1>Travel</h1>
                <p>Travel anywhere you want</p>
                <Link to ="/Plan">
                <button> Plan now</button>
                </Link> 
            </div>
        </div>

        
    );
}

export default Home