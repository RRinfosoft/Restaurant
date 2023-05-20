
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Menu from './components/Pages/Menu/Menu';
import Event from './components/Pages/Event/Event';
import Chef from './components/Pages/Chef/Chef';
import Gallery from './components/Pages/Gallery/Gallery';
import Contact from './components/Pages/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { home } from './components/Pages/Home/utill';
import { firstarray } from './components/Pages/About/utill';
import WOW from 'wowjs';


function App() {
  return (
  <>
  <Header />
    <Routes>
      <Route>
      <Route path='/' element={<Home home={home}/>} />
      <Route path='/about' element={<About />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/events' element={<Event />} />
      <Route path='/chefs' element={<Chef />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
    <Footer />
  
  </>
  );
}

export default App;
