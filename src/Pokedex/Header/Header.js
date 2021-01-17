import React from "react";

import logo from "../../assets/pokeball-logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="pokedex-header">
        <h1 className="pokedex-header__title">Pokedex</h1>
        <img src={logo} alt="pokemon-logo" className="pokedex-header__logo" />
      </header>
      <nav className="pokedex-navigation-menu"></nav>
    </>
  );
};

export default Header;
