import React, { Component } from "react";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends Component {
  state = {
    termino: "",
    imagenes: [],
    pagina: ""
  };

  scroll = () => {
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("smooth", "end");
  };

  pagAnterior = () => {
    let pagina = this.state.pagina;
    if (pagina === 1) return null;
    pagina--;
    this.setState({ pagina }, () => {
      this.consultarApi();
      this.scroll();
    });
    console.log({ pagina });
  };
  pagSiguiente = () => {
    let pagina = this.state.pagina;
    pagina++;
    this.setState({ pagina }, () => {
      this.consultarApi();
      this.scroll();
    });
    console.log({ pagina });
  };

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url =
      "https://pixabay.com/api/?key=15121018-587bbbb3f09ef98175475de07&q=" +
      termino +
      "&per_page=30&page=" +
      pagina;
    console.log(url);

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = termino => {
    this.setState({ termino: termino, pagina: 1 }, () => {
      this.consultarApi();
    });
  };

  render() {
    return (
      <div className="App container-fluid">
        <div className="jumbotron">
          <h1 className="display-4">Pixabay!</h1>
          <p className="lead">Buscador de imagenes</p>
          <hr className="my-4"></hr>
          <Buscador datosBusqueda={this.datosBusqueda}></Buscador>
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            pagAnterior={this.pagAnterior}
            pagSiguiente={this.pagSiguiente}
          ></Resultado>
        </div>
      </div>
    );
  }
}

export default App;
