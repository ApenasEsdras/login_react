import React from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../../components/Button";
// import useAuth from "../../hooks/useAuth";
// import * as C from "./styles";

import Header from "../../components/Header/header";
import ListarTarefa from "../../pages/tarefa/ListarTarefa";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
    </div>
  );
};

export default Home;
