import "./App.css";
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

const Reb = () => {

    const labels = ["1", "2", "3", "4", "5"];

    const doLabels = () => {
        return labels.map((label, index) => (
            <label key={index}>
            <input id={`label-${index}`} type="text" readOnly value={label} />
            </label>
        ));
    }
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
            <div className="data-rebanho">
            <div className="data-rebanho-with-image">
                    <h1>Rebanho</h1>
                    </div>
                    <div className="text">
                        Selecione um animal para ver suas informações.
                    </div>
                    <div className="labels">
                        <label>
                        {doLabels()}
                        </label>
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

export default Reb;