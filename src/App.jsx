import { useState } from "react";

function App() {
  //Hooks
  const [inputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
  });

  const handleInputChange = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });

  };

  const handleResetClick = () =>{
    setInputState({
      ...inputState,
      titulo: "",
      fecha: "",
      nota: "",
    });

  }
  
  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <h3>Lista</h3>
        </div>
        
        <div className="col">
        <h3>Hola</h3>
        <label className="mb-2">
          Título 
          <input 
            id = "titulo" 
            name = "titulo" 
            type = "text" 
            onChange = {handleInputChange}
            value = {inputState.titulo}
        /></label>
        
        <br></br>
        <label className="mb-2">
          Fecha
          <input 
            id = "fecha" 
            name = "fecha" 
            type = "text" 
            onChange = {handleInputChange}
            value = {inputState.fecha}
        /></label>
        
        <br></br>
        <label htmlfor = "nota">
          Nota
          <input 
            id = "nota" 
            name = "nota" 
            type = "text" 
            onChange = {handleInputChange}
            value = {inputState.nota}
        /></label>
        
        </div>
      </div>
      <hr></hr>
      <div className="ms-2 mt-2">

      <button
        type="button"
        onClick={handleResetClick}
      >
        Reinicio
      </button>
      </div>

    </div>
  );
}

export default App;
