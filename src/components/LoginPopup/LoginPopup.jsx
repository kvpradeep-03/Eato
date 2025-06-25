import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState('Login')

    return (
        <div className="login-popup">
            <div className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="cross_icon" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === 'Login' ? <></> : <input type="text" placeholder='Your name' required />}
                    <input type="email" placeholder='Your email' required />
                    <input type="email" placeholder='password' required />
                </div>
                <button>{currentState === 'Login' ? "Login" : "Create Account"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree terms of use & privacy policy.</p>
                </div>
                {currentState === "Login" ? <p>Create a new account? <span onClick={()=>setCurrentState("Sign up")}>Click here</span></p> :
                    <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
            </div>
        </div>
    )
}

export default LoginPopup