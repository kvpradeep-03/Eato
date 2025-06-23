import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/HEader'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
const Home = () => {
  // category is used to store the selected category from the ExploreMenu component
  // and is passed to the FoodDisplay component to filter the food items based on the selected category
  // setCategory is used to update the category state when a new category is selected
  const [category, setCategory] = useState("All")
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home