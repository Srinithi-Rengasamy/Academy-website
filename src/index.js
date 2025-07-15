import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/home/home';
import About from './components/about/about';
import Classes from './components/classes/classes';
import Course from './components/course/course';
import Branches from './components/branches/branches';
import Gallery from './components/gallery/gallery';
import Contact from './components/contact/contact';
import Videos from './components/videos/videos';
import Shop from './components/shop/shop';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
