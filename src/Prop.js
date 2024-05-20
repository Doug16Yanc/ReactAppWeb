import './App.css';
import React from "react";
import Data from "./images/data.png";
import Cidts from "./images/cidts.jpeg";
import IFCE from "./images/ifce.png";
import homeIcon from "./icons/Vector.png";
import perfilIcon from "./icons/Group 6.png";
import proprieIcon from "./icons/Vector-1.png";
import animalIcon from "./icons/Vector-2.png";
import SairIcon from "./icons/out.png";
import dashIcon from "./icons/dash.png";
import Propriedade from "./images/zona-rural.jpg";

const Prop = () => {
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
            <div className="data-prod">
            <div className="data-prod-with-image">
                    <img src={Propriedade} alt=""/>
                    <div className="text">
                    <h1>Propriedade</h1>
                    <h2>Sítio das capoeiras</h2>
                    </div>
                    </div>
                    <div className="labels-data">
                    <div className="input-wrapper">
                        <label htmlFor="nomePropriedade">Nome da propriedade</label>
                        <input id="nomePropriedade" type="text" readOnly value="" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="localizacao">Localização</label>
                        <input id="localizacao" type="text" readOnly value="" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="area">Área total da propriedade em hectares</label>
                        <input id="area" type="text" readOnly value="" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="atividade">Atividade realizada</label>
                        <input id="atividade" type="text" readOnly value="" />
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

export default Prop;