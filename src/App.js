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
function App() {
  return (
   <>
   <Home/>
   <About/>
   <Classes/>
   <Course/>
   <Branches/>
   <Gallery/>
   <Contact/>
   <Videos/>
   </>
  );
}
export default App;