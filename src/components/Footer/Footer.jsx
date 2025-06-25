import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                  <img src={assets.logo} style={{ width: 105 }} alt="logo" className="logo" />
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.simos harum eos exercitationem explicabo voluptatibus ab. Assumenda vel minima adipisci aut enim? Voluptates, tempora nobis, molestiae amet excepturi accusamus veritatis at nulla sequi cum </p>
                  <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="facebook_icon"/>
                    <img src={assets.twitter_icon} alt="twitter_icon" />
                    <img src={assets.linkedin_icon} alt="linkedin_icon" />
                  </div>
            </div>
            <div className="footer-content-center">
                <h2>Copmpany</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>044-124-878-0946</li>
                    <li>contact@eato.com</li>
                </ul>
            </div>
        </div>
        <hr />
          <p className="footer-copy-right">Copyright 2025 &copy; Eato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer