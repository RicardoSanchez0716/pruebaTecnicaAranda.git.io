import React, {useState} from "react";
import "../navbar.scss";
import Home from "../assets/icons/home.js";
import iconobar from "../assets/iconobar.png";
import Vegetarianos from "../assets/icons/Vegetarianos.js";
import Principales from "../assets/icons/Principales";
import Tortas from "../assets/icons/Tortas";
import Rapida from "../assets/icons/Rapida";
import Niños from "../assets/icons/Niños";
import Sopas from "../assets/icons/Sopas";


function Navbar() {

  return (
    <nav>
      <img className="iconobar" src={iconobar} alt="iconobar" />
      <ul className={"nav__menu"}>
        <li className="nav__item1">
          <a href="#" className="nav__linkHome">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link1">
            <div className="vegetarianos"><Vegetarianos/></div>
            <p className="letra_vegetarianos"> Vegetarianos </p>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link1">
            <div className="Principales"><Principales/></div>
            <p className="letra_Platos_principales"> Platos Principales </p>
            <p className="letra_principales">Principales</p>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link1">
            <div className="Tortas"> <Tortas/></div>
            <p className="letras_tortas">Tortas</p> 
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link2">
            <div className="rapida"> <Rapida/></div>
            <p className="letra_comida_rapida">Comida Rápida</p>
            <p className="letra_rapida">Rapida</p>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link2">
            <div className="niños"> <Niños/></div>
            <p className="letra_niños">Menú Niños</p> 
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link2">
            <div className="sopas"> <Sopas/></div>
            <p className="letra_sopas">Sopas</p>
          </a>
        </li>
      </ul>
      <div className="nav__toggler">
        <Home />
      </div>
    </nav>
  );
}

export default Navbar;
