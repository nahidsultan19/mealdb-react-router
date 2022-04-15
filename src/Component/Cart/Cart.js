import React from 'react';

const Cart = (props) => {
    const { cart, handleRemoveFromCart } = props;
    return (
        <div className='grid grid-cols-3 mt-2 items-center w-96'>
            <img className='w-12' src={cart.strMealThumb} alt="" />
            <p className=''>{cart.strMeal}</p>
            <button onClick={() => handleRemoveFromCart(cart)} className='text-red-500'>Remove</button>
        </div>
    );
};

export default Cart;