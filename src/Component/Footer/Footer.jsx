

import React from "react";
import "./Footer.css";
import {assets} from '../../assets/assets'

const Footer=()=>{
    return(
        <div className="footer" id="footer">
             <div className="footer-content">
                <div className="footer-content-left">
                     <img src={assets.logo} alt="" />
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptate repudiandae quisquam inventore laboriosam rem fugit repellendus et asperiores recusandae temporibus laborum ratione iusto iure! Sequi ipsa at fuga reprehenderit, ratione cupiditate vel eius qui ipsam quos rerum sapiente. Non laboriosam veritatis eveniet?</p>
                     <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
                     </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                    
                </div>
               
                <div className="footer-content-right">
                   <h2>GET IN TOUCH</h2>
                   <ul>
                    <li>+91 9525839590</li>
                    <li>hassanqaisar01@gamil.com</li>
                   </ul>
                </div>
               
             </div>
             <hr />
             <p className="footer-copyright">
                Copyright 2024@ Tomoto.com -All Right Reserved.
             </p>
        </div>
    )
}
export default Footer;