import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';
import * as C from "./styles";

const Home = () => {
  const {signout} = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Label>PROJETO DEV - LOGADO</C.Label>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]} />
    </C.Container>
  )
}

export default Home