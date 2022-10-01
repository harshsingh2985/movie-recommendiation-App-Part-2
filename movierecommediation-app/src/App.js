import React from 'react'
import Home from "./Home";
import Singlemovies from './Singlemovies';
import { BrowserRouter,Routes,Route } from "react-router-dom";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home/>}/>

      <Route path="movie/:id" element={<Singlemovies/>}/>


    </Routes>

    </BrowserRouter>
    
    
    </>

  )
}

export default App
