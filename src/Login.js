import './App.css';
import React from "react";
import Bode from "./images/bode.jpeg"
import In from "./icons/in.png";
import Pass from "./icons/pass.png";


const Login = () => {
    return (
        <header className='login'>
                <div className='screen'>
                    <div className='title'>
                        RZ-Bode
                    </div>
                    <div className="image">
                    <img src= {Bode} alt=""></img>
                    </div>
                </div>
                <div className='Login'>
                    <div className='text-title'>
                        <h1>
                            Bem vindo!
                        </h1>
                        <p>
                            Fazer login
                        </p>
                    </div>
                    <div className='container'>
                    <div className='input-with-image'>
                    <label>
                        Login
                        <div className='content'>
                            <img src={In} alt="" />
                            <input type="text" placeholder="Login" className="input-border"/>                          
                        </div>
                    </label>
                    <label>
                        Senha
                        <div className='content'>
                            <img src={Pass} alt="" />
                            <input type="password" placeholder="Senha" className="input-border"/>
                        </div>
                    </label>
                    </div>
                    </div>
                    <button className="go">
                        <span>
                            Entrar
                        </span>
                    </button>
                </div>
        </header>
    );
}

export default Login;