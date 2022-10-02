import React from 'react'
import Home from "./Home";
import Singlemovie from "./Singlemovies";

import { BrowserRouter,Routes,Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      
      <Route path="/" element={<Singlemovie></Singlemovie>}></Route>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App