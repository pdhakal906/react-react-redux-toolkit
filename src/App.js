import React from 'react'
import { Route, Routes } from 'react-router'
import About from './pages/About'
import RootLayout from './components/RootLayout'
import HomePage from './pages/HomePage'
import NotFound from './components/NotFound'
import Details from './pages/Details'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<About />}></Route>
          <Route path="*" element={<NotFound />} />
          <Route path="details/:id" element={<Details />} />
        </Route>

      </Routes>


      <ToastContainer position="top-right" autoClose='1000' />

    </>

  )
}

export default App
