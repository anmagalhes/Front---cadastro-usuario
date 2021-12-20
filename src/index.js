import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/GlobalStyles"; /* NO React só pode Ter uma Rederização PAI*/
import Routes from "./routes";

ReactDOM.render(
  <>
    <Routes />
    <GlobalStyle />
  </>,
  document.getElementById("root")
);
