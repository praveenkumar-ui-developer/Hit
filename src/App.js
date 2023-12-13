
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Navba from './Navbar/Navba';
import Home from './Home/Home';
import Python from './Python/Python';
import Footer from './Footer/Footer';
import Courses from './Courses/Courses';
import About from './About/About';
import Newbatch from './Newbatch/Newbatch';
import Register from './Register/Register';

function App() {
  return (
    <div className="App">
      <Navba />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/python' element={<Python />}></Route>
        <Route path='/courses' element={<Courses />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/newbatch' element={<Newbatch />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
