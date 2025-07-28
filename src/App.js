import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/UI-Pages/home-page/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShoppingCartPage from './components/UI-Pages/home-page/ShoppingCartPage';
// import ShoesCategory from './components/UI-Pages/home-page/ShoesCategory';
import CategoryItems from './components/UI-Pages/home-page/CategoryItems';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/category' element={<ShoesCategory />} /> */}
          <Route path='/category/:categoryName' element={<CategoryItems />} />
          <Route path='/shoppingCart' element={<ShoppingCartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
