import React from "react";
import Buscador from "./components/Buscador";

function App() {
  return (
    <div className="App container-fluid">
      <div className="jumbotron">
        <h1 className="display-4">Pixabay!</h1>
        <p className="lead">Buscador de imagenes</p>
        <hr className="my-4"></hr>
        <Buscador mensaje="Buscar"></Buscador>
      </div>
    </div>
  );
}

export default App;
