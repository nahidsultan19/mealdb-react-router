import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import './Navbar.css';
import Modal from 'react-modal';
import Cart from '../Cart/Cart';
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

const Navbar = (props) => {
    const [cart, setCart] = useContext(ContextProvider)
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(meal => meal.idMeal !== selectedItem.idMeal);
        setCart(rest);
    }


    return (
        <div className='sticky top-0 flex justify-between mx-auto px-12 py-4 bg-indigo-300'>
            <div>
                <Link to='/'>Brand Logo</Link>
            </div>
            <div className='flex gap-4 text-normal'>
                <Link to="/">Home</Link>
                <Link to="/meals">Meals</Link>
                <Link to="/contact">Contact</Link>

                <div className='cart-counter'>
                    <span className='bg-red-500 rounded-2xl px-1 text-xs absolute top-2'>{cart.length}</span>
                    <BsFillCartFill onClick={openModal} className='mt-1 icon relative cursor-pointer' color='#fff'></BsFillCartFill>
                </div>


            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <button onClick={closeModal} className='text-red-400'>X</button>
                <div>
                    {
                        cart.map(item => <Cart key={item.strMeal} cart={item} handleRemoveFromCart={handleRemoveFromCart}></Cart>)
                    }
                </div>
            </Modal>
        </div>
    );
};

export default Navbar;