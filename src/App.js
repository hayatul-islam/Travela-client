import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./Pages/Home/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './Pages/About/About';
import Tour from './Pages/Tour/Tour';
import Hotels from './Pages/Hotels/Hotels';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
