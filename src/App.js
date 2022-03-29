import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component.jsx'

const HatsPage = () => {

  return (<div>
    <h1>HATS PAGE</h1>
  </div>)
};
function App() {
  return (
    <div>
    <Header />
    
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>} />
      </Routes>
    </div>
  );
}

export default App;
