import styled from "styled-components";
import Backgroud from "../../Assets/Background1.svg";

export const Contanier = styled.div`
  background: url("${Backgroud}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  height: 150vh;
`;

export const Image = styled.img`
  margin-top: 25px;
`;

export const ContanierItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;

  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 25px;
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

export const Button = styled.button`
  width: 342px;
  height: 74px;

  /* Templates 5/Color 1 */
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;

  /* FORMATAÇÃO LETRAS DENTRO DO INPUNT */

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;

  color: #ffffff;

  cursor:pointer;

  /* SEPERAR SETA COM O NOME */

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  /* DEIXAR EFEITO NO BOTÃO QUANDO MOUSE */

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top:20px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px; /* ARREDORAR AS BORDAS DA DIV */

  width: 342px;
  height: 58px;

  border: none;
  outline: none;

/*PODE COLCAR O STILIZAÇÃO P DENTRO DO USER*/

P{
  font-style:normal;
  font-weight:normal;
  font-size: 20px;
  line-height: 28px;

  color: #ffffff;

};

  button{
    background:none;
    border:none;
    cursor:pointer;
  };

`;
