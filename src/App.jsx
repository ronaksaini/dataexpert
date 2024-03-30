import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import FormData from './components/FormData/FormData';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp'
const App = () => {
  return (
    <div className='app'>
        <Router>
        <Navbar />
          <Routes>
          <Route path="/" exact element={<Header/>} />
          <Route path="/add-employee" element={<Form/>} />
          <Route path="/employee-list" element={<FormData/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          </Routes>
      </Router>
      
    </div>
  )
}

export default App
