import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer'
import Appointment from './Components/Appointment/Appointment';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/appointment' element={<Appointment></Appointment>}></Route>

    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
