import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Pokemones = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=20`
        );
        const data = await response.json();
        const names = data.results.map((pokemon) => pokemon.name);
        setPokemonList(names);
      } catch (error) {
        console.error("Error fetching Pokemon list:", error);
      }
    };

    fetchPokemonList();
  }, []);

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
              {pokemonList.map((pokemonName) => (
                <option key={pokemonName} value={pokemonName}>
                  {pokemonName}
                </option>
              ))}
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
