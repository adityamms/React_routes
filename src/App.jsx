import React from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Error from './pages/Error404'

export default function App() {
  return (
    <>
  <nav>
    <ul>
      <li> <Link to="/">Home</Link></li>
      <li> <Link to="/Contact">Contact</Link></li>
    </ul>

  </nav>
    <Routes>
    <Route path='/' element= { <Home /> }></Route>
    <Route path='/Contact' element= { <Contact /> }></Route>
    <Route path='*' element= { <Error /> }></Route>
    </Routes>
    </>
  )
}
