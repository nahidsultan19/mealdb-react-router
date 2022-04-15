import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Meals from './Component/Meals/Meals';
import MealDetail from './Component/MealDetal/MealDetail';
import Cart from './Component/Cart/Cart';


function App() {
  return (
    <div className="App">
      {/* <h1 className='text-3xl bg-indigo-300 w-80 mx-auto mt-8 p-10 rounded-md shadow-md'>Hello Developer!</h1> */}
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/meals' element={<Meals></Meals>} />
        <Route path='/meal-detail/:idMeal' element={<MealDetail></MealDetail>} />
        <Route path='/cart' element={<Cart></Cart>} />
      </Routes>
    </div>
  );
}

export default App;
