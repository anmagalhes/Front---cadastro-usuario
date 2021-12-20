import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; /* DENTRO DO ROUTE DOM */

import Home from "./containers/Home";
import Users from "./containers/Users";

/* DOM ROUTER 5 - PATH - PAGINA PRINCIPAL
SWITCH -> SERVER PARA AUMENTAR A PERFORMACE

*/

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Users/>} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
