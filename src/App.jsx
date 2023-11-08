import { useState, useContext } from 'react'
import { Navigate, Route, Routes } from "react-router-dom"

import Navigation from './components/Navigation'
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import NotFound from "./views/NotFound";
import SelectedPokemon from "./views/SelectedPokemon";
/* import { userContext } from "./components/context/userContext" */
/* import './App.css' */

function App() {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemones/" element={<Pokemones />} />
        <Route path="/Pokemones/:name" element={<SelectedPokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
