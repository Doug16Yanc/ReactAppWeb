import './App.css';
import React from "react";
import Login from "./Login";
import Owner from "./Owner";
import Prop  from './Prop';
import Rebanho from "./Reb";
import Animal from './Animal';
import Dash from './Dashboard';


const App = () => {
  return (
    <div>
      <Login/>
      <Owner/>
      <Prop/>
      <Rebanho/>
      <Animal/>
      <Dash/>
    </div>
  );
  }
export default App;