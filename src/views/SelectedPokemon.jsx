import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SelectedPokemon = () => {
  const { name } = useParams();
  const [pokemonStats, setPokemonStats] = useState(null);

  useEffect(() => {
    const fetchPokemonStats = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        setPokemonStats(data);
      } catch (error) {
        console.error("Error consiguiendo los datos de pokemon:", error);
      }
    };

    fetchPokemonStats();
  }, [name]);

  if (!pokemonStats) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center p-4 g-5">
      <div className="mt-5 d-flex flex-row justify-content-center align-items-center p-4 g-5">
        <img
          src={pokemonStats.sprites.other["official-artwork"].front_default}
          alt="Imagen del pokemon"
          style={{ width: "50%" }}
        ></img>
        <div className="mt-5 d-flex flex-column justify-content-center align-items-center p-4 g-5">
          <h4>
            <strong>{pokemonStats.name}</strong>
          </h4>
          <ul>
            {pokemonStats.stats.map((stat, index) => (
              <li key={index}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
            <li>type: {pokemonStats.types[0].type.name}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectedPokemon;
