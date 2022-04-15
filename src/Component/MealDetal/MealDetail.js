import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const { idMeal } = useParams();
    const [meal, setMeal] = useState({});
    console.log(meal)

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [idMeal]);



    return (
        <div className=''>
            <h2>This is meal details page where you can find out meal detail:{idMeal}</h2>
            <div className='bg-white-200 border-2 rounded-sm w-96 h-auto mx-auto mt-2 shadow-md'>
                <img className='w-78 mx-auto p-2 rounded-sm' src={meal.strMealThumb} alt="" />
                <p>Name:{meal.strMeal}</p>
                <p>Category:{meal.strCategory}</p>
                <p>Area:{meal.strArea}</p>
                <p>Tags:{meal.strTags}</p>
                <p><small>Instruction: {meal?.strInstructions?.slice(1, 100)}</small></p>

            </div>

        </div>
    );
};

export default MealDetail;