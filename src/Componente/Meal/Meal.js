import React from 'react';
import { useNavigate } from 'react-router-dom';

const Meal = (props) => {
    const { strMeal, strMealThumb, strArea, idMeal } = props.meal
    // console.log(props)
    const navigate = useNavigate();
    const handleMealDetail = () => {
        const detail = `/meal-detail/${idMeal}`;
        navigate(detail);
    }
    return (
        <div className='shadow-lg rounded-md p-8'>
            <img className='rounded-md' src={strMealThumb} alt="" />
            <div>
                <h2 className='text-2xl'>{strMeal}</h2>
                <p><small>{strArea}</small></p>
            </div>
            <button onClick={handleMealDetail} className='bg-indigo-400 px-3 py-2 mt-4 w-48 font-semibold rounded-md'>
                <p>Details</p>
            </button>
            <button className='bg-gray-400 px-3 py-2 mt-4 w-48 font-semibold rounded-md'>Add To Cart</button>
        </div>
    );
};

export default Meal;