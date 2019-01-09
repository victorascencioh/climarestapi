import React, { Component } from 'react';
import Header from './Header/Header';
import Form from './Formulario/Formulario';
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header titulo="Clima " />
        <Form />
      </div>
    );
  }
}

export default App;
