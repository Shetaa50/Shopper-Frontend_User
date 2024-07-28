import React, { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";



export const ShopContext = createContext(null);    
const GetDefaultCart =()=>{
    let cart = {};
    for(let index=0;index<300;index++){
        cart[index]=0;
    }
    return cart;
};
const ShopContextProvider = (props) => {

    const [all_product,setAll_product] = useState([]);

    const[cartItems,setCartItems] = useState(GetDefaultCart());

    useEffect(() => {
        fetch("http://localhost:4000/allproducts")
        .then(response => response.json())
        .then(data => setAll_product(data))
        if(localStorage.getItem('authToken')) {
            fetch('http://localhost:4000/getcartdata', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/form-data',
                        'Content-Type': 'application/json',
                        'auth-token': `${localStorage.getItem('authToken')}`,
                    },
                    body: ""

            }).then(response =>response.json())
            .then(data => setCartItems(data))
            .catch(error => console.error('Error:', error));
        }
    },[]);

    const AddToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if (localStorage.getItem('authToken')) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'auth-token': `${localStorage.getItem('authToken')}`,
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text(); // Read response as text first
            })
            .then(text => {
                console.log(text); // Log the raw response text
                return JSON.parse(text); // Parse the JSON if it's valid
            })
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        
            console.log('added to cart'); 
        }
        
    };
     const removefromCart = (itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
            if(localStorage.getItem('authToken')){
                fetch('http://localhost:4000/removefromcart', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'auth-token': `${localStorage.getItem('authToken')}`,
                    },
                    body: JSON.stringify({ "itemId": itemId }),
                })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error('Error:', error));
                }
        };

    
        const getTotalCartAmount = () => {
            let totalAmount = 0;
            for (const item in cartItems) {
                if (cartItems[item] > 0) {
                    let itemInfo = all_product.find((product) => product.id === Number(item));
                    if (!itemInfo) {
                        console.error(`Product with id ${item} not found in all_product`);
                        continue; // Skip this iteration if itemInfo is not found
                    }
                    totalAmount += cartItems[item] * itemInfo.new_price;
                }
            }
            return totalAmount;
        };
    const getTotalCArtItems = ()=>{
        let totalItem = 0;
        for ( const item in cartItems){
            if(cartItems[item]>0)
                {
                    totalItem+=cartItems[item];
                }
        }
        return totalItem;
    }
    

const contextValue = {getTotalCArtItems,getTotalCartAmount,all_product,cartItems,AddToCart,removefromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider