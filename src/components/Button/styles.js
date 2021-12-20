import styled from "styled-components";

// TRANSFORMAR O BOTÃO E UM LINK

// export const Button = styled.button` BOTÃO

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 130px;

  background: ${props => props.isBack ? 'transparent':'rgba(0, 0, 0, 0.8)'} ;
  border-radius: 14px;
  border:${props => props.isBack ? '1px solid #ffffff;' : 'none'};

  /* FORMATAÇÃO LETRAS DENTRO DO INPUNT */
    
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 28px;

  color: #ffffff;

  cursor: pointer;

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

  img {
    transform: ${props => props.isBack && 'rotatey(180deg)'};
  }
`;
