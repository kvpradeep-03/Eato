import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <img src="/food_img.jpg" alt="Header" style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '20px'
      }} />
        <div className='header-contents'>
              <h2>Your cravings, delivered fast.</h2>
            <p>Discover delicious meals from top restaurants near you and get them delivered hot and fresh only on Eato.</p>
        <button style={{cursor: 'pointer'}}>View Menu</button>
        </div>

    </div>
  )
}

export default Header