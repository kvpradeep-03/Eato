import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, removeFromCart, addToCart } = useContext(StoreContext)
    const navigate = useNavigate()

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} alt="food-item-image" className="food-item-image" />
                {   // checking that the id of the food item is present in the cartItems object or not
                    // onclick the id will be passed which is passed as a props in FoodDisplay component
                    !cartItems[id] ? <img onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="addNew" className="add" /> :
                    <div className="food-item-counter">
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt='remove'/>
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt='add'/>
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="food-item-rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                    <span
                    // pin react useNavigation() is used to route as well as pass objs as states and this state can be used in /view.jsx by useLocation()
                        onClick={() => navigate('/view', { state: { id, name, price, description, image } })}
                        className="view-link"
                    >view</span>
                    <p className="food-item-price">&#8377;{price}</p>
                </div>
            </div>


        </div>
    )
}

export default FoodItem