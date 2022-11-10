import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import FirstLook from './components/FirstLook'
import AboutPage from './components/AboutPage'
import PLook from './components/Porfolio/PLook'
import BLook from './components/Blog/BLook'
import SLook from './components/WShop/SLook'
import CLook from './components/CheckOut/CLook'
import DLook from './components/DemoPage/DLook'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<FirstLook />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/portfolio' element={<PLook />}/>
        <Route path='/blog' element={<BLook/>}/>
        <Route path='/shop' element={<SLook/>} />
        <Route path='/checkout' element={<CLook/>} />
        <Route path='/demo' element={<DLook/>} />
      </Routes>
    </>
  )
}

export default App
