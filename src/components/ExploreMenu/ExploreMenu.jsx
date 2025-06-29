import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

//destructuring the props to get category and setCategory from home component
const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id="explore-menu">
            <h1>Explore Menu</h1>
            <p>Craving something tasty? Dive into our menu and discover your next favorite meal!</p>
            {/* by clicking stores the current name and compares the weather the stored name and selected name is true 
                if true it added red circle around the img and also acts like filtering products based on category  */}
            <div className='explore-menu-list'>
                {
                    menu_list.map((item, index) => {
                        // checking if the category is equal to the item menu_name
                        // at first it is all eg: menu_name == pasta (first) by clicking on pasta the category is set to pasta
                        // if the category is already pasta and we click on pasta again it will set the category to all
                        // this helps to sort the products based on the category on the food display component
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
            <h2>Top dishes near you</h2>
        </div>
    )
}

export default ExploreMenu