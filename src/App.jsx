import { useState } from 'react'
import './bootstrap.min.css'
import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import History from './pages/History'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/his' element={<History />} />
        <Route path='/log' element={<Login />} />
        <Route path='/reg' element={<Register />} />

      </Routes>
      <Footer />

    </>
  )
}

export default App
