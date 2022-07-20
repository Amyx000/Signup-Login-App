import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Nav from './Nav';
import Signup from "./Signup"
import Home from "./Home"
import Welcome from './Welcome';
import Privatecom from './Privatecom';

function App() {

  return (
   <>
   <BrowserRouter>
   <Nav></Nav>
   
   <Routes>
    <Route path="/login" element={<Login></Login>}/>
    <Route path="/signup" element={<Signup></Signup>}/>
    <Route path="/" element={<Home></Home>}/>
    <Route element={<Privatecom/>}>
    <Route path="/welcome" element={<Welcome></Welcome>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   
   
  
   </>
  );
}

export default App;
