import React, { useState, useEffect } from "react";
import './App.css';
import {Routes, Route} from "react-router-dom"
import Layout from './components/Layout'
import Staff from './components/staff'
import Login from './components/login'
import Order from './components/order'
import Inventory from './components/inventory'

function App() {
  return (
      <Routes>
        <Route path ="/" element={<Layout/>} >
            <Route path = "/staff" element={<Staff />} />
            <Route path = "/login" element={<Login />} />
            <Route path = "/order" element={<Order />} />
            <Route path = "/inventory" element={<Inventory />} />          
        </Route>
      </Routes>   
  );
}

export default App;
