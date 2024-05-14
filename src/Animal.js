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
        <div className="data">
            <div className="screen-animal">
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
            <div className="data-animal">
                <div className="animal-data-with-image">
                    <h1>Animal</h1>
                    <img src={Cabra} alt=""/>
                </div>
                <div className="box-data-animal">
                    <div className="data1">
                        <label>
                            Número de identificação
                            <input id="identificacao" type="text" readOnly value="" />
                        </label>
                        <label>
                            Data de nascimento
                            <input id="nascimento" type="text" readOnly value="" />
                        </label>
                    </div>
                    <div className="data2">
                        <label>
                            Peso atual
                            <input id="peso-atual" type="text" readOnly value="" />
                        </label>
                        <label>
                            Data de desmame
                            <input id="desmame" type="text" readOnly value="" />
                        </label>
                        </div>
                        <div className="data3">
                            <label>
                                Raça
                                <input id="raca" type="text" readOnly value="" />
                            </label>
                            <label>
                                Categoria
                                <input id="categoria" type="text" readOnly value="" />
                            </label>
                        </div>
                        <div className="data4">
                        <label>
                            Peso ao nascimento
                            <input id="pesoNascimento" type="text" readOnly value="" />
                        </label>
                        <label>
                            Peso ao desmame
                            <input id="pesoDesmame" type="text" readOnly value="" />
                        </label>
                        </div>
                        <div className="data5">
                            <label>
                            <h1>Tipo</h1>
                            <button className="rounded-button"></button>
                            <h2>Caprino</h2>
                            <h1>Sexo</h1>
                            <button className="rounded-button"></button>
                            <h2>Feminino</h2>
                            </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Animal;
