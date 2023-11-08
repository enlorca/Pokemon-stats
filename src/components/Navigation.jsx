import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import pokemonMarker from "../assets/img/PokemonMarker.svg";
import "./Navigation.css";

const Navigation = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <Navbar variant="dark" className="bg-secondary w-100">
      <Container className="d-flex justify-content-between mt-2 mb-2">
        <div>
          <Navbar.Brand>
            <img
              src={pokemonMarker}
              alt="Pokemon Marker"
              style={{
                height: "50px",
                marginRight: "10px",
                filter: "brightness(0) invert(1)",
              }}
            />
          </Navbar.Brand>
        </div>
        <div>
          <NavLink
            className={`${setActiveClass} text-white ms-3 text-decoration-none`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={`${setActiveClass} text-white ms-3 text-decoration-none`}
            to="/Pokemones"
          >
            Pokemones
          </NavLink>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
