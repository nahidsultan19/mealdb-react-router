import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import './Navbar.css';

const Navbar = (props) => {

    return (
        <div className='sticky top-0 flex justify-between mx-auto px-12 py-4 bg-indigo-300'>
            <div>
                <Link to='/'>Brand Logo</Link>
            </div>
            <div className='flex gap-4 text-normal'>
                <Link to="/">Home</Link>
                <Link to="/meals">Meals</Link>
                <Link to="/contact">Contact</Link>
                <Link to="">
                    <div className='cart-counter'>
                        <span className='bg-red-500'></span>
                        <BsFillCartFill className='mt-1 icon' color='#fff'></BsFillCartFill>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;