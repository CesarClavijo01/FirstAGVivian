import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Worship from './pages/Worship';
import Collide from './pages/Collide';
import Youth from './pages/Youth';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>  
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='worship' element={<Worship/>}></Route>
        <Route path='collide' element={<Collide/>}></Route>
        <Route path='youth' element={<Youth/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
