import React,{Component}from 'react';
import Logo from "../assets/Logo.jpeg";
import {Link} from "react-router-dom";
import '../styles/Navbar.css';
import ReorderIcon from'@material-ui/icons/Reorder';
import axios from 'axios';

export default class Navbar extends Component {

    handleLogout = () => {
        localStorage.clear();
        console.log("here I am ");
        this.props.setUser("");
    }
    constructor(props) {
        super(props);
      }
      state1={
        openLinks:false  ,
    }
    render(){

        console.log("hello world")
        console.log(this.props.user)
    // const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        this.setState(!this.state1.openLinks);
    }
    let buttons ; 
    console.log("props ARE WQAITING");
    if(this.props.user !="" && this.props.user.user_type == "ADMIN"){
        console.log(this.props.user.user_type);
        buttons =(
            buttons = (<><div className ="leftSide" id={this.state1.openLinks ? "open" : "close"}>
            <img src ={Logo}/>
            <div className= "hiddenLinks">
            <Link to ="/">Home</Link>
            <Link to ={"/event"}>Events</Link>
            <Link to ="/about">Display Event</Link>
            <Link to ="/contact">Contact</Link>
            <Link to ="/" >Logout</Link>
            {/* <Link to ="/Signup">SignUp</Link> */}
            <Link to ="/USERS" >Users</Link>
            <Link to ='/notifs' >Notification</Link>
            </div>
        </div> 
        <div className ="rightSide">
            <Link to ="/">Home</Link>
            <Link to ="/event">Events </Link>
            <Link to ="/about">Display Event</Link>
            <Link to ="/contact">Contact</Link>
            <Link id="login" to ={"/"} onClick={()=> {
            localStorage.clear();
            console.log("here I am ");
            this.props.setUser("");
        }} >Logout</Link>
        <Link to ="/USERS" >Users</Link>
        <Link to ='/notifs' >Notification</Link>
           
            <button onClick={toggleNavbar}>
                <ReorderIcon/>
            </button>
        </div> 
        </>    
                
            )
        )

    }
    else if(this.props.user !=""){
      
        buttons = (<><div className ="leftSide" id={this.state1.openLinks ? "open" : "close"}>
        <img src ={Logo}/>
        <div className= "hiddenLinks">
        <Link to ="/">Home</Link>
        {/* <Link to ={"/event"}>Events</Link> */}
        <Link to ="/about">Display Event</Link>
        <Link to ="/contact">Contact</Link>
        <Link to ="/" >Logout</Link>
        {/* <Link to ="/Signup">SignUp</Link> */}
        </div>
    </div> 
    <div className ="rightSide">
        <Link to ="/">Home</Link>
        {/* <Link to ="/event">Events </Link> */}
        <Link to ="/about">Display Event</Link>
        <Link to ="/contact">Contact</Link>
        <Link id="login" to ={"/"} onClick={()=> {
        localStorage.clear();
        console.log("here I am ");
        this.props.setUser("");
    }} >Logout</Link>
       
        <button onClick={toggleNavbar}>
            <ReorderIcon/>
        </button>
    </div> 
    </>    
            
        )

    }else{

        buttons = (<><div className ="leftSide" id={this.state1.openLinks ? "open" : "close"}>
        <img src ={Logo}/>
        <div className= "hiddenLinks">
        <Link to ="/">Home</Link>
        {/* <Link to ={"/event"}>Events</Link> */}
        <Link to ="/about">Display Event</Link>
        <Link to ="/contact">Contact</Link>
        <Link to ="/Login">Login</Link>
        <Link to ="/Signup">SignUp</Link>
        </div>
    </div> 
    <div className ="rightSide">
        <Link to ="/">Home</Link>
        {/* <Link to ="/event">Events </Link> */}
        <Link to ="/about">Display Event</Link>
        <Link to ="/contact">Contact</Link>
        <Link id="login" to ="/Login">Login</Link>
       
        <button onClick={toggleNavbar}>
            <ReorderIcon/>
        </button>
    </div> 
    </>    
            
        )

    }

  
    return (
    <div className ="navbar">
        {buttons}
    </div>
    );
    }
}
    
// export default Navbar;
