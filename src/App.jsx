import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'

import Header from './Components/Header/Header.jsx'
import Banner from './Components/Banner/Banner';
import DisplayRow from './Components/DisplayRow/DisplayRow.jsx';
import Footer from './Components/Footer/footer.jsx'; 

function App() {
  

  return (
    <>
    <Header/>
    <Banner/>
    <DisplayRow/>
    <Footer/>
    </> 
  )
}

export default App;
