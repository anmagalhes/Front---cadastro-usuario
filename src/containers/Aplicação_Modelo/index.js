import React, { useState, useRef, useEffect } from "react";

import axios from "axios";

import People from "../../Assets/People.svg"; /* SUBIR O NIVEL ../../    */
import Arrow from "../../Assets/Arrow.svg";
import Trash from "../../Assets/Trash.svg";

import {
  Contanier,
  H1,
  Image,
  ContanierItens,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

/* JSX - MISTURAR JAVASCRIPT COM HTML */
function App() {
  /* REACT HOOKS => FERRAMENTAS AUXILIARES
  
  01 => NOME DA VARIAVEL -> POSSIÇÃO É NOME DA VARIAVEL CONSTANTE
  02 => SET -> SET&NOME DA VARIAVEL
  
  SETUSERS => SEMPRE ADICIONAR UM NOVO VALOR.
  EXEMPLO:

   CAPTURAR DADOS DE UM DADOS DIGITADOS PELO O USUARIO

   function chaceInputName(event) {
    setName(event.target.value);
  }

   <InputLabel>Nome</InputLabel>
        <Input onChange={chaceInputName} placeholder="Nome" />

  Spread Operator => REPETIR OS DADOS ANTERIOR E ADICIONAR MAIS UM NOVO (...)
  React Hook Use Ref => 

  /* ESTADO REACT */

  const [Users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  /* 
 ADICIONAR DADOS NOVOS PARA O BANCO DE DADOS 
 function AddNewUser() {
    setUsers([
      ...Users,
      {
        id: Math.random(),
        Name: inputName.current.value,
        Age: inputAge.current.value,
      },
    ]);
  }
  */

  /* FUNÇÃO ASYNC - ENVIAR E VOLTA DADOS DO BACK END => 
  const {data} -> Deve ser o mesmo nome que está apresentando no console do DOM ( inspetor)*/

  async function AddNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3033/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    setUsers([...Users, newUser]);
    console.log(newUser);
  }

  /* REACT HOOKS => USEREFFECT (EFEITO COLATERAL)
      01 - A MINHA APLICAÇÃO INICIA (A PAGINA CARRGOU, useEffect é chamado) 
      02 - QUANDO ESTADO QUE ESTÁ NO ARRAY DE DEPENDENCIA DO useEffect é Alterado
      03 - DEVER CRIAR UMA FUNÇÃO ASYNC - DENTRO PARA TRAZER OS DADOS.
      */

  /* TRAZER OS DADOS DO BACK END*/

  useEffect(() => {
    async function fetchUser() {
      const { data: newUser } = await axios.get("http://localhost:3033/users");

      setUsers(newUser);
    }

    fetchUser();
  }, [Users]);

  /* DELETAR DADOS DO BACK END */
  async function DeleteUser(userId) {
    await axios.delete(`http://localhost:3033/users/${userId}`);

    const newUsers = Users.filter((user) => user.id !== userId);

    setUsers(newUsers);
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

        <ul>
          {Users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => DeleteUser(user.id)}>
                <img src={Trash} alt="Lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>
      </ContanierItens>
    </Contanier>
  );
}

export default App;
