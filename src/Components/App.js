import React, { Component } from 'react';
import Header from './Header/Header';
import Form from './Formulario/Formulario';
import Error from './Error/Error';

class App extends Component {

      state = {
        error: '',
        consulta:{}
      }
      
      componentDidUpdate(){

        this.consultarApi();
      }

      componentDidMount(){
        
        this.setState({
          error:false
        })

      }
     
      consultarApi = ()=>{
        
        const {ciudad, pais} = this.state.consulta;
        if(!ciudad || !pais) return null;
        console.log("Ciudad :", ciudad);
        console.log("Pais : ", pais);

        
        
        const appId = 'c65563027fd2b23c43ddca222678cc26';
        let url = `https://samples.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        console.log("URL : ", url);
        
        //query fecth api

        fetch(url , {mode: 'no-cors'})
        .then( respuesta => {
          console.log("Respuesta : ",respuesta);
          
        })

        // leer la url agregar el API key



        // consultar con fecth
       
        
    
        
      }

    datosConsulta = respuesta =>{

          if(respuesta.ciudad === '' || respuesta.pais === ''){
            this.setState({
              error:true
            })
            
          }else{

            this.setState({
              
                consulta:respuesta
              
            })
            // console.log(respuesta);
          }
    }


  render() {

    const error = this.state.error;

    // console.log(error);

    let resultado;

    if(error){
      resultado = <Error mensaje="Ambos campos son obligatorios" />
    }
    

    return (
      <div className="app">
        <Header titulo="Clima " />
        <Form 
          datosConsulta = {this.datosConsulta}
        />
        {resultado}
      </div>
    );
  }
}

export default App;
