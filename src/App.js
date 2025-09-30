// import React, { useEffect, useRef } from 'react';
import React from 'react';
import { gsap } from 'gsap';
// import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Message from './msg/Message';
import { useState } from 'react';
import Dashboard from './Dashboard';
// import SignUp from './SignUp';
// function Home() {
//   return <h1>Home Page</h1>;
// }

// function About() {
//   return <h1>About Page</h1>;
// }

// function SignUp() {
//   return <SignUp/>;
// }

export default function App() {
  const [number, setNumber] = useState(0)
  return (<>
    {/* <BrowserRouter>
      <SignUp/>
      <Dashboard/>
    </BrowserRouter> */}
    <BrowserRouter>
      {/* Navigation */}
      {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/SignUp"><SignUp/></Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Dashboard />}/>
        {/* <Route path="/SignUp" element={}/> */}
      </Routes>
    </BrowserRouter>
  </>
  );
}


