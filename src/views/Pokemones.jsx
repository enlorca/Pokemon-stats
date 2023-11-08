import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Pokemones = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const handleSelectPokemon = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleViewStats = () => {
    if (selectedPokemon) {
      navigate(`/Pokemones/${selectedPokemon}`);
    }
  };


  return (
    <div>
      {!name ? (
        <div className="mt-5 d-flex flex-column justify-content-center align-items-center p-4 g-5">
          <h1>Selecciona un pokemon</h1>
          <div className="mb-3 pt-2">
            <select
              className="form-select"
              value={selectedPokemon}
              onChange={handleSelectPokemon}
            >
              <option value="">Pokemones</option>
              <option value="pikachu">Pikachu</option>
              <option value="charmander">Charmander</option>
              <option value="bulbasaur">Bulbasaur</option>
              <option value="squirtle">Squirtle</option>
              <option value="caterpie">Caterpie</option>
              <option value="pidgey">Pidgey</option>
              <option value="rattata">Rattata</option>
            </select>
          </div>
          <div>
            <button className="btn btn-secondary" onClick={handleViewStats}>
              Ver Detalle
            </button>
          </div>
        </div>
      ) : (
        <h1>{name}</h1>
      )}
    </div>
  );
};

export default Pokemones;
