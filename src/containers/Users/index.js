import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";


import axios from "axios";

import Avatar from "../../Assets/Avatar.svg"; /* SUBIR O NIVEL ../../    */
import Arrow from "../../Assets/Arrow.svg";
import Trash from "../../Assets/Trash.svg";

import H1 from "../../components/Title";
import ContanierItens from "../../components/contanierIntens";
import Button from "../../components/Button";

import { Contanier, Image, User } from "./styles";

/* JSX - MISTURAR JAVASCRIPT COM HTML */
function Users() {
  /* REACT HOOKS => FERRAMENTAS AUXILIARES
  

  /* ESTADO REACT */

  const [Users, setUsers] = useState([]);
  const navigate = useNavigate(); // NAGEVAR ENTRE PAGINAS PELO O HISTORICOS

  /* TRAZER OS DADOS DO BACK END*/

  useEffect(() => {
    async function fetchUser() {
      const { data: newUser } = await axios.get("http://localhost:3033/users");

      setUsers(newUser);
    }

    //FUNÇÃO DO HISTORY

    fetchUser();
  }, []);

  /* DELETAR DADOS DO BACK END */
  async function DeleteUser(userId) {
    await axios.delete(`http://localhost:3033/users/${userId}`);

    const newUsers = Users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Contanier>
      <Image alt="logo-imagem" src={Avatar} />
      <ContanierItens isBlur={true}>
        <H1>Usuarios</H1>

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

        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContanierItens>
    </Contanier>
  );
}

export default Users;
