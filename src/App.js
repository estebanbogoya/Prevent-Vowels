import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Listener from './Listener';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/events" element={<Listener />} />
      </Routes>
    </BrowserRouter>
  );
}
