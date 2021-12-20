import react from "react";

import{ContanierItens as Contanier } from './styles'

/* CONSTUMIZANDO UM INFORMAÇÃO PARA ULTILIZAR EM MAIS DE UMA VEZ */

function ContanierItens({children,isBlur}){

    return <Contanier isBlur ={isBlur}>{children}</Contanier>
}

export default ContanierItens;
