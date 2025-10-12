// import React, { useEffect, useRef } from 'react';
import React from 'react';
import { gsap } from 'gsap';
// import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Message from './msg/Message';
import { useState } from 'react';
import LayoutMenu from './Components/Sneat/LayoutMenu';
import MenuMobileToggler from './Components/Sneat/MenuMobileToggler ';

export default function Sneat(){
    return(<>
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <LayoutMenu/>
                <MenuMobileToggler/>
            </div>
        </div>
    </>)
}