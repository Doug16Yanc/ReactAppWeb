import React from "react";
import Proprie from "./Prop";
import Rebanho from "./Reb";
import Animal from "./Animal";
import './App.css';
import Data from "./images/data.png";
import Cidts from "./images/cidts.jpeg";
import IFCE from "./images/ifce.png";
import homeIcon from "./icons/Vector.png";
import perfilIcon from "./icons/Group 6.png";
import proprieIcon from "./icons/Vector-1.png";
import animalIcon from "./icons/Vector-2.png";
import dashIcon from "./icons/dash.png";
import SairIcon from "./icons/out.png";

const Owner = () => {
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
            <div className="introduce">
                <div className="first-introduce">
                    <img src={Data} alt="Dados" width="450px" />
                    <div className="text">
                        <h1>Proprietário</h1>
                        <h2>Antônio Felipe da Silva</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="input-wrapper">
                        <label htmlFor="nomeCompleto">Nome completo</label>
                        <input id="nomeCompleto" type="text" readOnly value="Antônio Felipe da Silva" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="dataNascimento">Data de nascimento</label>
                        <input id="dataNascimento" type="text" readOnly value="07/09/1989" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" readOnly value="felipeantonio09@gmail.com" />
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

export default Owner;
