import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './View.css'
import CallIcon from '@mui/icons-material/Call';
import { Button } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import DirectionsIcon from '@mui/icons-material/Directions';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { red } from '@mui/material/colors';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import Divider from '@mui/material/Divider';
import FoodDisplay from '../../FoodDisplay/FoodDisplay';

const view = () => {
    const [category, setCategory] = useState("All")
    const location = useLocation();
    const { id, name, price, description, image } = location.state;
    const { cartItems, removeFromCart, addToCart } = useContext(StoreContext)
    return (
        <>
            <div className="restaurant-banner">
                <h1 className="restaurant-name">Eato Restaurant</h1>
                <p className="restaurant-cuisine">Biryani, North Indian, Chinese</p>
                <div className="restaurant-ratings">
                    <span className="rating">4.2 ★</span>
                    <span className="rating-count">(620 Ratings)</span>
                </div>
                <div className="dish-container">
                    <img className='dish-container-img' src={image} alt="dish" />
                    <div className='dish-description'>
                        <p>{description}</p>
                        <div className='restaurant-status'>
                            <span style={{ color: 'red' }}>Open now :  </span>
                            <span>10:30am – 9:30pm (Today)</span>

                        </div>
                        <span><CallIcon sx={{ mr: 1, mt: 2 }} color='error' />044-124-878-0946</span>
                        <div className='price-qty'>
                            <p>&#8377;{price}</p>
                            {!cartItems[id] ? <img onClick={() => addToCart(id)} src={assets.add_icon_white} alt="addNew" className="view-add" /> :
                                <div className="view-food-item-counter">
                                    <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='remove' />
                                    <p>{cartItems[id]}</p>
                                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='add' />
                                </div>
                            }

                        </div>


                        <div className='action-buttons'>
                            <Button variant="outlined" color="error"><DirectionsIcon sx={{ mr: 1}} /> Direction</Button>
                            <Button variant="outlined" className="hide-on-mobile" color="error"><ShareIcon sx={{ mr: 1 }} /> Share</Button>
                            <Button variant="outlined" color="error"><ReviewsIcon sx={{ mr: 1 }} /> Reviews</Button>
                        </div>

                    </div>
                </div>

            </div>

            <Divider sx={{ mt: 10, mb: 10, fontSize: 50 }}>Top Orders</Divider>

            <div >
                <FoodDisplay category={category} />
            </div>
        </>
    )
}

export default view