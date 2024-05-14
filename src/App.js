import './App.css';
import React from "react";
import Login from "./Login";
import Owner from "./Owner";
import Prop  from './Prop';
import Rebanho from "./Reb";
import Animal from './Animal';


const App = () => {
  return (
    <div>
      <Login/>
      <Owner/>
      <Prop/>
      <Rebanho/>
      <Animal/>
    </div>
  );
  }
export default App;