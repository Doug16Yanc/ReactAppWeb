import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Owner from "./Owner";
import Propriedade from "./Prop";
import Rebanho from "./Reb";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Owner }  path="/" exact />
           <Route component = { Propriedade }  path="/propriedades" />
           <Route component = { Rebanho }  path="/rebanho" />
       </BrowserRouter>
   )
}

export default Routes;