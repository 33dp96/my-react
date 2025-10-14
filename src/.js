import logo from './logo.svg';
import './App.css';
import './style.css'
import Message from './components/message';
import Card from './components/Card';
import Sidebar from './components/theme/Sidebar';
import Nav from './components/theme/Nav';
import BaseFrame from './components/theme/BaseFrame';
import Main from './components/theme/Main';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { useState } from 'react';
import Changenum from './components/changenum';
import TodoLists from './components/todo/todolist';
import Slider from './components/Slider';
import Swiperslider from './components/slider2';

export default function App() {
  const [title, setTitle] = useState('home')


  const change_title = (new_title) => {
    console.log(12345);

    setTitle(new_title)
  }

  const [num, setNum] = useState(0);

  const change_num = (type) => {
    if (type == 'inc') {
      setNum(num + 1)
    } else {
      setNum(num - 1)
    }
  }

  return (<>
    <BrowserRouter>
      <p>{num}</p>
      <h1 dir='rtl'>
        {title}
      </h1>
      <div dir='rtl'>
        <Link to='/home'>go to home</Link>
        <br />
        <Link to='/login'>go to login </Link>
        <br />
        <Link to='/msg'>go to meesage page</Link>
        <br />
        <Link to='/changenum'>go to change num</Link>
        <br />
        <Link to='/todo'>todo lists</Link>
        <br />
        <Link to='/slider'>slider</Link>
        <br />
        <Link to='/swiperslider'>swiperslider</Link>

      </div>
      <Routes>
        <Route path="/msg" element={<Message func={change_num} />} />
        <Route path='/changenum' element={<Changenum func={change_num} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login func={change_title} />} />
        <Route path="/todo" element={<TodoLists />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="swiperslider" element={<Swiperslider />} />
      </Routes>

    </BrowserRouter>
  </>
  );
}
