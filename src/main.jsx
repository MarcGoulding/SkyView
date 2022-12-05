import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './main.css';
import Page404 from './components/Page404';
import App from './components/App';
import About from './components/About';
import Home from './components/Home';
import CryptoGrid from './components/crypto/CryptoGrid';
import CryptoPage from './components/crypto/CryptoPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/about" element={<App />}>
        <Route index element={<About />} />
      </Route>

      <Route path="/cryptos" element={<App />}>
        <Route index element={<CryptoGrid />} />
        <Route path=":asset" element={<CryptoPage />} />
      </Route>
      
      <Route path='*' element={<Page404 />}>
      </Route>
      
      </Routes>
  </BrowserRouter>

);
