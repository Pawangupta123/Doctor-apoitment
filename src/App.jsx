import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import InnerText from './components/Header/InnerText'
import {getDatabase,ref,set} from 'firebase/database';
import { ap } from './Firebase/firebase'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';

const db = getDatabase(ap);
function App() {
  return (
    <>
      <Header/>
      <Outlet/> 
      {/* <Footer/> */}
      
    </>
  )
}

export default App
