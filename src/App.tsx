import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import "./App.scss";
import imagenprincipal from "./assets/bcq.jpg";
import footerimagen from "./assets/Grupo7610.png";
import path from "path";
import Navbar from "./components/Navbar";
import ojingeo from "./assets/Ojingeo.png"
import Star from "../src/assets/icons/Star"
import Favorite from "../src/assets/icons/favorite"
import cola from "./assets/Cola.png"
import roasted from "./assets/Roasted.png"
import sweet from "./assets/cherry.png"
import dificultad from "./assets/icons/Dificultad"
import raciones from "./assets/icons/Raciones"
import tiempo from "./assets/icons/Tiempo"
import Raciones from "./assets/icons/Raciones";
import Tiempo from "./assets/icons/Tiempo";
import Dificultad from "./assets/icons/Dificultad";


function App(): JSX.Element {

 
  return (
    <body >
      <div className="contenedor">
        <nav>
          <ul>
            <div>
              <Navbar />
              <div />
            </div>
          </ul>
        </nav>
      <div>
          <img className="imagenPrincipal"
            src={imagenprincipal}
            alt="imagen principal"
          />
          <div className="TextoRecetas">Recetas</div>
          <div className="TextoParaTodos">para todos</div>
        </div>
      </div>
      <h2>Nuevas Recetas</h2>
      <main className="contenedorRecetas">
      
        <div className="contenedorReceta1">
        <div className="receta1">
        <img className="ojingeo" src={ojingeo} alt="" />
               <p className="ojingeoLetra">Ojingeo <span className="muchim">Muchim</span></p>
               <div className="valorReceta"><div className="starReceta1">
               < Star /> <span className="puntuacionReceta1">5.0</span> </div>
               <div className="favoriteReceta1"><Favorite /></div></div></div>
            <div className="infoReceta1"><img className="ojingeo" src={ojingeo} alt="" />
            <Raciones /> <p className="tituloInfo">Tamaño de la porcion</p>
            <p className="info">4 raciones</p><Tiempo/><p className="tituloInfo">Tiempo de preparacion</p>
            <p className="info">10 minutos</p><Dificultad/><p className="tituloInfo">Dificultad</p>
            <p className="info">fácil</p>
            </div>
            </div>     
        <div className="contenedorReceta2">
        <div className="receta2">
        <img className="cola" src={cola} alt="" />
        <p className="colaLetra">Cola <span className="chicken">Chicken</span></p>
        <div className="starReceta2">
               < Star /> <span className="puntuacionReceta2">5.0</span> </div>
               <div className="favoriteReceta2"><Favorite /></div></div>
        <div className="infoReceta2"><img className="cola" src={cola} alt="" />
            <Raciones /> <p className="tituloInfo">Tamaño de la porcion</p>
            <p className="info">4 raciones</p><Tiempo/><p className="tituloInfo">Tiempo de preparacion</p>
            <p className="info">10 minutos</p><Dificultad/><p className="tituloInfo">Dificultad</p>
            <p className="info">fácil</p>
            </div>
        </div>
        <div className="contenedorReceta3">
        <div className="receta3">
        <img className="roasted" src={roasted} alt="" />
        <p className="roastedLetra">Roasted <span className="carrot">carrot</span></p>
        <div className="starReceta3">
               < Star /> <span className="puntuacionReceta3">4.5</span> </div>
               <div className="favoriteReceta3"><Favorite /></div></div>
        <div className="infoReceta3"><img className="roasted" src={roasted} alt="" />
            <Raciones /> <p className="tituloInfo">Tamaño de la porcion</p>
            <p className="info">4 raciones</p><Tiempo/><p className="tituloInfo">Tiempo de preparacion</p>
            <p className="info">10 minutos</p><Dificultad/><p className="tituloInfo">Dificultad</p>
            <p className="info">fácil</p>
            </div>
        </div>

        <div className="contenedorReceta4">
        <div className="receta4">
        <img className="sweet" src={sweet} alt="" />
        <p className="sweetLetra">Sweet <span className="cherries">cherries</span></p>
        <div className="starReceta4">
               < Star /> <span className="puntuacionReceta4">4.0</span> </div>
               <div className="favoriteReceta4"><Favorite /></div></div>
               <div className="infoReceta4"><img className="sweet" src={sweet} alt="" />
            <Raciones /> <p className="tituloInfo">Tamaño de la porcion</p>
            <p className="info">4 raciones</p><Tiempo/><p className="tituloInfo">Tiempo de preparacion</p>
            <p className="info">10 minutos</p><Dificultad/><p className="tituloInfo">Dificultad</p>
            <p className="info">fácil</p>
            </div>

        </div>
      </main> 

      <footer>
        <h1>Con el Patrocinio de</h1>
        <img className="imagenFooter" src={footerimagen} alt="Imagen footer" />
      </footer>
      
    </body>
  );
}

export default App;
