import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu'>
            <h1>Explore Menu</h1>
            <p>Craving something tasty? Dive into our menu and discover your next favorite meal!</p>
            {/* by clicking stores the current name and compares the weather the stored name and selected name is true 
                if true it added red circle around the img and also acts like filtering products based on category  */}
            <div className='explore-menu-list'>
                {
                    menu_list.map((item, index) => {
                        return (
                            <div key={index} onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className='explore-menu-list-item'>
                                <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="menu" />
                                <p>{item.menu_name}</p>
                            </div>
                        );
                    })
                }

            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu