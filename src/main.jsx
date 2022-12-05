import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './main.css';
import Page404 from './components/Page404';
import App from './components/App';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/user/Profile';
import CryptoGrid from './components/crypto/CryptoGrid';
import CryptoPage from './components/crypto/CryptoPage';
import {UserContextProvider} from "./components/context/UserContext";
import Login from './components/user/login';


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/login" element={<Login />} />


        <Route path="/cryptos" element={<App />}>
          <Route index element={<CryptoGrid />} />
          <Route path=":asset" element={<CryptoPage />} />
        </Route>
        
        <Route path='*' element={<Page404 />}>
        </Route>
        
        </Routes>
    </BrowserRouter>
  </UserContextProvider>

);
