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
        <div className="data">
            <div className="screen-rebanho">
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
            <div className="data-rebanho">
            <div className="data-rebanho-with-image">
                    <img src={animalIcon} alt=""/>
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
        </div>
    );
}

export default Reb;