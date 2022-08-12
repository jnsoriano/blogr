
import './assets/global.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Presentation from './components/Presentation/Presentation';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />}/>
        <Route path="presentation" element={<Presentation />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
