import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = ({setShowLogin}) => {

    const[menu, setMenu] = useState("home")
    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        //TODO: Fix smooth scroll
        <div className='navbar'>
            <Link to={'/'}><img src={assets.logo} className='logo' alt="logo"/></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home"?"active":""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu"?"active":""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us"?"active":""}>contact us</a>
            </ul>
            <div className='navbar-right'>
                <SearchIcon sx={{display:{xs: 'none', sm: 'block'}, fontSize: 35 }} />
                <div className='navbar-search-icon'>
                    <Link to={'/cart'}><LocalMallIcon sx={{ fontSize: 35 }} /></Link>
                    <div className={getTotalCartAmount() > 0? "dot" : " "}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar    