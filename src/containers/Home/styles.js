import styled from "styled-components";
import Backgroud from "../../Assets/Background1.svg";

//import {Link} from "react-router-dom"

export const Contanier = styled.div`
  background: url("${Backgroud}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  // TAMAHO
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 25px;
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  color: #eeeeee;

  margin-left: 25px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  width: 342px;
  height: 58px;
  padding-left: 25px;
  margin-bottom: 27px;

  border: none;
  outline: none;

  /* LETRAS */

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;

  color: #ffffff;
`;


