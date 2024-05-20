import './App.css';
import React from "react";
import Bode from "./images/bode.jpeg";
import In from "./icons/in.png";
import Pass from "./icons/pass.png";

const Login = () => {
    return (
        <div>
            <header className='login'>
                <div className='screen'>
                    <div className='title'>
                        Bem-vindo(a) à versão web
                    </div>
                    <div className="image">
                        <img src={Bode} alt="Bode" />
                    </div>
                </div>
                <div className="credentials">
                        <div className="input-box">
                            <input type="text" name="username" placeholder="Login" required />
                            <input type="password" placeholder="Senha" required />
                        </div>
                        <input type="submit" value="Entrar" className="btn" />
                    </div>
            </header>
        </div>
    );
}

export default Login;
