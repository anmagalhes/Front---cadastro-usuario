import styled from "styled-components";
import Backgroud from "../../Assets/Background.svg";

//import {Link} from "react-router-dom" Ir para outra pagina via Link

export const Contanier = styled.div`
  background: url("${Backgroud}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  // TAMAHO
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 25px;
`;


export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px; /* ARREDORAR AS BORDAS DA DIV */

  width: 342px;
  height: 58px;

  border: none;
  outline: none;

  /*PODE COLCAR O STILIZAÇÃO P DENTRO DO USER*/

  P {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;

    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
