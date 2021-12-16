
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
// import DisplayCar from './components/DisplayCars/DisplayCar/DisplayCar.js';
import DisplayCars from './components/DisplayCars/DisplayCars.js';
import Login from './components/Login/Login/Login.js';
import Register from './components/Login/Register/Register.js';
import Offers from './components/Offers/Offers.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cars" element={<DisplayCars/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/offers" element={<Offers />} />
          




        </Routes>
        
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
