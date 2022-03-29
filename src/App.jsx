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
  
  return (
    <div className="App">
      <h3>Hola</h3>
      <label htmlfor = "titulo">Título</label>
      <input 
        id = "titulo" 
        name = "titulo" 
        type = "text" 
        onChange = {handleInputChange}
        value = {inputState.titulo}
      />
      <br></br>
      <label htmlfor = "fecha">Fecha</label>
      <input 
        id = "fecha" 
        name = "fecha" 
        type = "text" 
        onChange = {handleInputChange}
        value = {inputState.fecha}
      />
      <br></br>
      <label htmlfor = "nota">Nota</label>
      <input 
        id = "nota" 
        name = "nota" 
        type = "text" 
        onChange = {handleInputChange}
        value = {inputState.nota}
      />

    </div>
  );
}

export default App;
