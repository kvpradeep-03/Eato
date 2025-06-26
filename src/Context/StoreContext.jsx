import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// creating a context
// we are updating this storeContext via StoreContextProvider's contextValue
// so that we can use this context in any component that is wrapped inside StoreContextProvider
export const StoreContext = createContext(null)

// This one is component and The const StoreContextProvider = (props) -> props.children is <App />.
const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    // adding items for the first time in the cart
    // if cartItems is empty, then add the item with quantity 1 
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))  //assigns by the key-->item_id of the dish value-->quantity
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })) //if item already exists in the cart, then increase the quantity by 1
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })) //if item already exists in the cart, then decrease the quantity by 1     
    }

    // useEffect(()=>{
    //     console.log(cartItems)

    // },[cartItems])

    const getTotalCartAmount = ()=>{
        let totalAmount = 0
        for(const item in cartItems){ // for key in value of cartItems 
            if(cartItems[item] > 0){ //qty of item is > 0
                let itemInfo = food_list.find((product)=>product._id === item)
                totalAmount += itemInfo.price * cartItems[item]
            } 
        }
        return totalAmount
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount

    }

    return (
        //updatig the storeContex that we created above with the contextValue inside the StoreContextProvider. 
        <StoreContext.Provider value={contextValue}>
            {props.children}  {/** props.children to render the <App /> (or anything else you wrap inside this context provider). */}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider