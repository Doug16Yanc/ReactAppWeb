import "./App.css";
import React from "react";
import Cabra from "./images/cabra.jpg";
import Data from "./images/data.png";
import Cidts from "./images/cidts.jpeg";
import IFCE from "./images/ifce.png";
import homeIcon from "./icons/Vector.png";
import perfilIcon from "./icons/Group 6.png";
import proprieIcon from "./icons/Vector-1.png";
import animalIcon from "./icons/Vector-2.png";
import dashIcon from "./icons/dash.png";
import SairIcon from "./icons/out.png";

const Animal = () => {
    return (
        <div>
         <div className="header">
                <a href="#" className="logo">Rumin Web</a>
                <i className="fa-solid fa-bars" id="menu-icons"></i>
                <div className="navbar" id="navbar">
                    <a href="#perfil">Perfil</a>
                    <a href="#services">Propriedades</a>
                    <a href="#skills">Animais</a>
                    <a href="#education">Estatísticas</a>
                </div>
            </div>
            <div className="data-animal">
                <div className="animal-data-with-image">
                    <h1>Animal</h1>
                    <img src={Cabra} alt=""/>
                </div>
                <div className="box-data-animal">
                    <div className="data">
                        <label>
                            Número de identificação
                            <input id="identificacao" type="text" readOnly value="" />
                        </label>
                        <label>
                            Data de nascimento
                            <input id="nascimento" type="text" readOnly value="" />
                        </label>
                        <label>
                            Peso atual
                            <input id="peso-atual" type="text" readOnly value="" />
                        </label>
                        <label>
                            Data de desmame
                            <input id="desmame" type="text" readOnly value="" />
                        </label>
                            <label>
                                Raça
                                <input id="raca" type="text" readOnly value="" />
                            </label>
                            <label>
                                Categoria
                                <input id="categoria" type="text" readOnly value="" />
                            </label>
                        <label>
                            Peso ao nascimento
                            <input id="pesoNascimento" type="text" readOnly value="" />
                        </label>
                        <label>
                            Peso ao desmame
                            <input id="pesoDesmame" type="text" readOnly value="" />
                            </label>
                            </div>
                        <div className="data1">
                            <label>
                            <h1>Tipo </h1>
                            <button className="rounded-button"></button>
                            <h2> Caprino </h2>
                            <h1> Sexo </h1>
                            <button className="rounded-button"></button>
                            <h2>Feminino </h2>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="footer">
         <div className="author">
        <div className="copyright">
            <img src={Cidts} alt=""/> 
            <img src={IFCE} alt=""/>
            </div>
            <div className="text">
            All Right Reserved
            </div>
          </div>  
    </div>
    </div>
    );
}

export default Animal;
