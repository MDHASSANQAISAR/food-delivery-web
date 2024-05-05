import React, { useState } from "react";
import Navbar from "./Component/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import Cart from "./pages/Cart/Cart.jsx"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import LoginPopup from "./Component/LoginPopup/LoginPopup.jsx";

const App=()=>{

  const [showLogin, setShowLogin]=useState(false);

  return(
    <> 
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
      </Routes>
    </div>
   
    <Footer/>
    
    </>
  )
}
export default App;