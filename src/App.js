import 'bootstrap/dist/css/bootstrap.css';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
import  Home from './components/home/home';
import  About from './components/about/about';
import  Classes from './components/classes/classes';
import  Course from './components/course/course';
import  Branches from './components/branches/branches';
import  Gallery from './components/gallery/gallery';
import  Contact from './components/contact/contact';
import Videos from './components/videos/videos';
import { HashRouter } from 'react-router-dom';
function App() {
  return (
   <>
   {/* <Home/>
   <About/>
   <Classes/>
   <Course/>
   <Branches/>
   <Gallery/>
   <Contact/>
   <Videos/> */}
   <HashRouter>
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
      </HashRouter>
   </>
  );
}
export default App;