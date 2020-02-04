import React, { Component } from "react";

class Buscador extends Component {
  state = {};
  busquedaRef = React.createRef();

  obternerDatos = e => {
    e.preventDefault();
    const termino = this.busquedaRef.current.value;
    this.props.datosBusqueda(termino);
  };
  render() {
    return (
      <form onSubmit={this.obternerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.busquedaRef}
              className="form-control form-control-lg"
              type="text"
              placeholder="¿Que estas buscando?"
            ></input>
          </div>
          <div className="form-group col-md-2">
            <button className="btn btn-danger btn-lg btn-block" type="submit">
              Buscar
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;
