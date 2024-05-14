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
import SairIcon from "./icons/out.png";

const Owner = () => {
    return (
        <div className="data">
            <div className="screen-owner">
                <div className="title">
                    Menu
                </div>
                <div className="foto">
                    <img src={Data} alt="" width="250px" />
                    <p>Antônio Felipe da Silva</p>
                </div>
                <nav className="list">
                    <ul>
                        <li><img src={homeIcon} alt=""/><a href ="/home">Home</a></li>
                        <li><img src={perfilIcon} alt=""/><a href="/perfil">Meu perfil</a></li>
                        <li><img src={animalIcon} alt=""/><a href="/animais">Meus animais</a></li>
                        <li><img src={proprieIcon} alt=""/><a href="/propriedades">Minhas propriedades</a></li>
                        <li><img src={SairIcon} alt="" width={"80px"}/><a href="/sair">Sair</a></li>
                    </ul>
                </nav>
                <div className="images">
                    <img src={Cidts} alt="" width="250px" />
                    <img src={IFCE} alt="" width="250px" />
                </div>
            </div>
            <div className="introduce">
                <div className="first_introduce">
                    <img src={Data} alt="" width="450px" />
                    <div className="text">
                        <h1>Proprietário</h1>
                        <h2>Antônio Felipe da Silva</h2>
                    </div>
                </div>
                <div className='container'>
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
        </div>
    );
}

export default Owner;
