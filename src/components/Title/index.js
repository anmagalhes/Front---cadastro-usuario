import React from "react";
import { H1 } from "./styles";

/* NO REACT TEM PROPS => PROPRIEDADES  - function Title(props)*/

/* TRAZ E LEVAR INFORMAÇÕES PODE SER ULTILIZADAS EM VARIAS VEZES 

Children -> é o campo que está retornando no H1

*/

function Title({children}) {
    
  return <H1>{children}</H1>;
}

export default Title;
