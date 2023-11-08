import React from 'react'
import pikachuImage from "../assets/img/pikachu.png";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center gap-1 p-4">
        <h3>Bienvenido maestro pokémon</h3>
        <img
          src={pikachuImage}
          alt="Imagen de pikachu"
          style={{ width: "25%" }}
        ></img>
      </div>
    </div>
  );
}

export default Home