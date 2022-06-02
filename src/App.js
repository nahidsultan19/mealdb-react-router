import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Meals from './Component/Meals/Meals';
import MealDetail from './Component/MealDetal/MealDetail';
import Cart from './Component/Cart/Cart';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContext from './Component/CartContext/CartContext';

function App() {

  return (
    <CartContext>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/meals' element={<Meals></Meals>} />
          <Route path='/meal-detail/:idMeal' element={<MealDetail></MealDetail>} />
          <Route path='/cart' element={<Cart></Cart>} />
        </Routes>
        {/* <Toaster position="top-right"
        reverseOrder={false} /> */}
        <ToastContainer />
      </div>
    </CartContext>
  );
}

export default App;
