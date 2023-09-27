import React from 'react';

import { Navbar } from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'

import Signup from './Pages/signup';
import Home from './Pages/Home';
import Todolist from './Pages/Todolist'


function App() {
  return (
    <div className='Apps'> <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    
      <Route path='/signup' element={<Signup/>} />
      <Route path='/todolist' element={<Todolist/>} />
      
      
    </Routes>
    </div>
    
  );
}

export default App;