import './App.css';
import React from "react";
import Login from "./Login";
import Owner from "./Owner";
import Prop  from './Prop';
import Rebanho from "./Reb";
import Animal from './Animal';
import Data from "./images/data.png";
import Cidts from "./images/cidts.jpeg";
import IFCE from "./images/ifce.png";
import homeIcon from "./icons/Vector.png";
import perfilIcon from "./icons/Group 6.png";
import proprieIcon from "./icons/Vector-1.png";
import animalIcon from "./icons/Vector-2.png";
import dashIcon from "./icons/dash.png"
import SairIcon from "./icons/out.png";



const Dash = () => {
  return (
    <div className="data">
            <div className="screen-dash">
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
                        <li><img src={dashIcon} alt="" width={"85px"}/><a href="/dashboard">Estatísticas gráficas</a></li>
                        <li><img src={SairIcon} alt="" width={"80px"}/><a href="/sair">Sair</a></li>
                    </ul>
                </nav>
                <div className="images">
                    <img src={Cidts} alt="" width="250px" />
                    <img src={IFCE} alt="" width="250px" />
                </div>
            </div>
            </div>
  );
  }
export default Dash;