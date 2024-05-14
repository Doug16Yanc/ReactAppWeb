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
        <div className="data">
            <div className="screen-prop">
                <div className="title">
                    Menu
                </div>
            <div className="foto">
                <img src={Data} alt="" width="250px" />
                <p>Antônio Felipe da Silva</p>
            </div>
            <nav className="list">
                <ul>
                    <li><img src={homeIcon} alt=""/><a href="#home">Home</a></li>
                    <li><img src={perfilIcon} alt=""/><a href="#perfil">Meu perfil</a></li>
                    <li><img src={animalIcon} alt=""/><a href="#animais">Meus animais</a></li>
                    <li><img src={proprieIcon} alt=""/><a href="#propriedades">Minhas propriedades</a></li>
                    <li><img src={dashIcon} alt="" width={"85px"}/><a href="/dashboard">Estatísticas gráficas</a></li>
                    <li><img src={SairIcon} alt="" width={"80px"}/><a href="#sair">Sair</a></li>
                </ul>
            </nav>
            <div className="images">
                <img src={Cidts} alt="" width="250px" />
                <img src={IFCE} alt="" width="250px" />
            </div>
            </div>
            <div className="data-prod">
            <div className="data-prod-with-image">
                    <img src={Propriedade} alt="" width="450px" />
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
        </div>
    );
}

export default Prop;