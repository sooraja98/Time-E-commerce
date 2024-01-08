import './App.css';
import Home from './page/Home';
import { Routes, Route } from 'react-router-dom';
import ProductViewPage from './page/ProductViewPage';
import ProductListPage from './page/ProductListPage';
import CartPage from './page/CartPage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/*" element={<ProductViewPage />} />
      <Route path="/shop" element={<ProductListPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    
    </Routes>
  );
}

export default App;