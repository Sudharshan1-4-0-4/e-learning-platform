// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Courses from './components/Courses';
import CourseDetails from './components/CourseDetails';

import LoginForm from './components/LoginForm';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/courses"  element={<Courses/>} />
        <Route path="/courses/:id" element={<CourseDetails/>} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
