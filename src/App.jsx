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

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
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
