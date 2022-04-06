import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className='sticky top-0 flex justify-between mx-auto px-12 py-4 bg-indigo-300'>
            <div>
                <Link to='/'>Brand Logo</Link>
            </div>
            <div className='flex gap-4 text-normal'>
                <Link to="/">Home</Link>
                <Link to="/meals">Meals</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/addtocart">
                    <span></span>
                    <BsFillCartFill className='mt-1' color='#fff'></BsFillCartFill>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;