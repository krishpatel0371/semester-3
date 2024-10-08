import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './firstpage/Layout'; 
import Home from './pages/home/Home';
import Course from './pages/course/Course';
import React from 'react';
import Login from './pages/login/Login.js';
import Signin from './pages/sign in/Signin.js';
import About from './pages/about/About.js';
import Contact from './pages/contact/Contact.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Course" element={<Course />} />
        <Route path='/Log in' element={<Login/>}/>
        <Route path='/Sign in' element={<Signin/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        {/* Add a 404 route */}
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
