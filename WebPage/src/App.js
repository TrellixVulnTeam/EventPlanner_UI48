import "./App.css";
import Navbar from "./components/Navbar";
//import Footer from ".components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Events from "./pages/Events";
import SignUp from "./pages/SignUp";
import {BrowserRouter as Router, Routes, Route} 
from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar> </Navbar>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ='/event' element={<Events/>}/>
          <Route path ='/Login'  element={<Login/>}/>
          <Route path ='/SignUp'  element={<SignUp/>}/>
      </Routes>
      </Router>  
    
      
    </div>
      
  );
}

export default App;
