import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContext from './context/CartContext'; // Make sure the context import name matches
import Home from './components/Home';
import Courses from './components/Courses';
import CourseDetails from './components/CourseDetails';
import Cart from './components/Cart';
import LoginForm from './components/LoginForm';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [cartList, setCartList] = useState([]);
  const [name, setName] = useState("");
  
  const addCartItem = (product) => {
    console.log(product);
   
    console.log(product.course_name);
    setCartList((prevCartList) => [...prevCartList, product]);
  };

  const nameAdd = (name) => {
    setName(name);
  }

  const deleteCartItem = (itemId) => {
    setCartList((prevCartList) => prevCartList.filter(item => item.course_id !== itemId));
  };

  

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <CartContext.Provider
          value={{
            cartList,
            name,
            nameAdd,
            addCartItem,
            deleteCartItem,
            
            
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
