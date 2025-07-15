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
   <Router>
			<Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/home' element={<Home/>} exact/>
      <Route path='/about' element={<About/>} exact/>
      <Route path='/classes' element={<Classes/>} exact/>
      <Route path='/course' element={<Course/>} exact/>
      <Route path='/branches' element={<Branches/>} exact/>
      <Route path='/gallery' element={<Gallery/>} exact/>
      <Route path='/contact' element={<Contact/>} exact/>
      <Route path='/videos' element={<Videos/>} exact/>
      <Route path='/shop' element={<Shop/>} exact/>
    	</Routes>
		</Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
