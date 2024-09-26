import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Pdt from './pages/Pdt.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import Orders from './pages/Orders.jsx';  // Corrected path
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Connect from './pages/Contact.jsx'
import SearchBar from './components/SearchBar.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/connect' element={<Connect/>} />
        <Route path='/product' element={<Contact/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:productsId' element={<Pdt/>} />
        <Route path='/placeorder' element={<PlaceOrder />} /> {/* Corrected path */}
        <Route path='/order' element={<Orders />} /> {/* Added missing closing tag */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
