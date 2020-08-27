import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((totalPrice,value) => totalPrice+value.price,0);
    let shipping = 0 ;
    if(totalPrice < 0){
        shipping = 0
    }
    else if(totalPrice < 15 && totalPrice > 0){
        shipping = 4.89
    }
    else if (totalPrice > 35){
            shipping = 12.99 
    }
    const tax = ((totalPrice *15)/115).toFixed(2);
;
    const total = (totalPrice + shipping+ Number(tax)).toFixed(2)
    return (
        <div className='pt-5 text-primary'>
              
               <h2>This is a cart</h2>
               <p>Item Ordered: {cart.length}</p>
               <p>Shipping:{shipping}</p>
               <p>Product Price: {totalPrice}</p>
               <p>TAX : {tax}</p>
               <p>Total Price : {total} </p>
               
        </div>
    );
};

export default Cart;