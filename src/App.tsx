import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/layout';
import Home from './pages/home';
import Registration from './pages/registration';
import Contact from './pages/contact';
import Products from './pages/products';
import './styles/critical.css';
import './styles/style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<Registration />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
