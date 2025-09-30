import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Message from './msg/Message';
import { useState } from 'react';


export default function App() {
  const [number, setNumber] = useState(0)
  return (<>
    <BrowserRouter>
    <h2>{number}</h2>
      <Link to={'/test'} >test</Link>
      <Routes>
        <Route path='/test' element={<Message/>}/>
      </Routes>
    </BrowserRouter>
  </>);
}
