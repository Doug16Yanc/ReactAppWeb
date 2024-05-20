import './App.css';
import React from "react";
import Login from "./Login";
import Owner from "./Owner";
import Prop  from './Prop';
import Rebanho from "./Reb";
import Animal from './Animal';
import ChartBar from "./ChartBar";
import ChartHeat from './ChartHeatMap';
import ChartPie from './CharPie';
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
            <div className="dash-graphics">
                <ChartBar/>
                <ChartHeat/>
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
export default Dash;