import React, { Component } from 'react'

export default class Formulario extends Component {

    // crear los refs

    ciudadRef = React.createRef();
    paisRef = React.createRef();

    buscarClima = (e) =>{
            e.preventDefault();

        // leer los ref y crear el objeto...

        const respuesta ={
            ciudad : this.ciudadRef.current.value,
            pais   : this.paisRef.current.value
        }

        console.log("Respuesta objeto : ",respuesta);
        
        //enviar por props
        this.props.datosConsulta(respuesta);
      
        // this.props.datosConsulta(respuesta)
         
        // console.log("Enviar por props",datosConsulta);
        

        //opcional rsetear el form


    }

  render() {
    return (
      <div className="contenedor-form">
        <div className="container">
         <div className="row">
          <form onSubmit={this.buscarClima}>
              <div className="input-field col s12 m8 l4  offset-m2">
                <input id="ciudad" type="text" ref={this.ciudadRef}  />
                <label htmlFor="ciudad">Ciudad</label>
               
              </div>
              <div className="input-field col s12 m8 l4  offset-m2">
                <select ref={this.paisRef}>
                  <option value="" defaultValue >Elije un País</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="US">Estados Unidos</option>
                  <option value="MX">México</option>
                  <option value="PE">Perú</option>
                  <option value="GA">Gran Bretaña</option>
                  <option value="CA">Canada</option>
                  <option value="IT">Italia</option>
                  <option value="EC">Ecuador</option>
                  <option value="PL">Polonia</option>
                  <option value="NG">Nigeria</option>
                  <option value="CU">Cuba</option>
                  <option value="AF">Afganistan</option>
                </select>
                <label htmlFor="pais">País</label>
              </div>
              <div className="input-field col s12 m8 l4  offset-m2 buscador">
               <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar ..." />
              </div>
          </form>
         </div>
        </div>
      </div>
    )
  }
}
