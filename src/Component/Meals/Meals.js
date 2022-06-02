import React, { useState, useEffect, useContext } from 'react';
import Meal from '../Meal/Meal';
import Modal from 'react-modal';
import Cart from '../Cart/Cart';
// import toast from 'react-hot-toast';
import { toast } from 'react-toastify';
import { ContextProvider } from '../CartContext/CartContext';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');


const Meals = () => {
    const [searchMeal, setSearchMeal] = useState('');
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useContext(ContextProvider)


    const searchFood = e => {
        setSearchMeal(e.target.value)
    }

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(meal => meal.strMeal === selectedItem.strMeal);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
            toast('Item added in your cart');
        } else {
            toast.error('Already exist this item')
        }
    }


    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchMeal])


    return (
        <div className=''>
            <input onChange={searchFood} className='mt-4 px-2 py-2 border-2 rounded-md w-96 h-auto' type="text" name='meal' placeholder='Enter your favorite meal' />
            <h2>Meals Count:{meals.length}</h2>
            <div className='grid gap-4 md:grid-cols-4 justify-items-center mt-6 mx-6'>
                {meals.map(meal => <Meal key={meal.idMeal} meal={meal} handleAddToCart={handleAddToCart}></Meal>)}
            </div>
        </div>
    );
};

export default Meals;