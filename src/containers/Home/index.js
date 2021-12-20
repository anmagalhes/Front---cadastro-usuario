import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import People from "../../Assets/People.svg"; /* SUBIR O NIVEL ../../    */
import Arrow from "../../Assets/Arrow.svg";

import H1 from "../../components/Title";
import ContanierItens from "../../components/contanierIntens";
import Button from "../../components/Button";

import {
  Contanier,
  Image,
  InputLabel,
  Input,

} from "./styles";

/* JSX - MISTURAR JAVASCRIPT COM HTML */
function App() {
  /* ESTADO REACT */
  const [Users, setUsers] = useState([]);

  const navigate = useNavigate(); // NAGEVAR ENTRE PAGINAS PELO O HISTORICOS

  const inputName = useRef();
  const inputAge = useRef();

  async function AddNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3033/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    setUsers([...Users, newUser]);

    navigate("/usuarios");
  }

  return (
    <Contanier>
      <Image alt="logo-imagem" src={People} />
      <ContanierItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={AddNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>
      </ContanierItens>
    </Contanier>
  );
}

export default App;
