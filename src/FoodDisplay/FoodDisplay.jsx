import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from '../components/FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
          {food_list.map((item,index)=>{
            // checks the category is setted to all or specific category on the ExploreMenu component
            //  if the category key of the food_list obj matches the selected category it will display the food item (were the category is defined in food_list obj from assets/assets.js)
            // if the category is All it will display all the food items
            if (category === 'All' || category === item.category) {
              // if the category is All or the category of the item matches the selected category
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
            
          })}
        </div>
    </div>
  )
}

export default FoodDisplay 