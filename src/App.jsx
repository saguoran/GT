// import './debug.css';
import React, { useState, useRef, useMemo  } from 'react';
import logo from './assets/Mario_plus_Rabbids_Sparks_of_Hope_Cover_art_1920x1080.jpg';
import { debounce } from 'lodash';
import { Navbar } from './components/navbar/Navbar';

function App() {
  // console.log(process.env.PUBLIC_URL);
  return (
    <>
      <Navbar />
    </>
  )
}

export default App
