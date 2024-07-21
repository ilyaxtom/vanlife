import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./host/Dashboard";
import Income from "./host/Income";
import Reviews from "./host/Reviews";
import HostLayout from "./components/HostLayout";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />} >
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="vans" element={<Vans />} />
                  <Route path="vans/:id" element={<VanDetail />} />


                  <Route path="host" element={<HostLayout />}>
                      <Route index element={<Dashboard />} />
                      <Route path="income" element={<Income />} />
                      <Route path="reviews" element={<Reviews />} />
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App;