import React, { useState, useEffect } from 'react';
import Meal from '../Meal/Meal';


const Meals = () => {
    const [searchMeal, setSearchMeal] = useState('');
    const [meals, setMeals] = useState([]);

    const searchFood = e => {
        setSearchMeal(e.target.value)
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
                {meals.map(meal => <Meal key={meal.idMeal} meal={meal} ></Meal>)}
            </div>
        </div>
    );
};

export default Meals;