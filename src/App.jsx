import { useState } from "react";

function App() {
  //Hooks
  const [tituloState, setTituloState] = useState("");
  const [fechaState, setFechaState] = useState("");
  const [notaState, setNotaState] = useState("");

  const handleChangeTitulo = (event) => {
    setTituloState(event.target.value);

  }

  const handleChangeFecha = (event) => {
    setFechaState(event.target.value);

  }

  const handleChangeNota = (event) => {
    setNotaState(event.target.value);

  }
  
  return (
    <div className="App">
      <h3>Hola</h3>
      <label htmlfor = "titulo">Título</label>
      <input 
        id = "titulo" 
        name = "titulo" 
        type = "text" 
        onChange = {handleChangeTitulo}
        value = {tituloState}
      />
      <br></br>
      <label htmlfor = "fecha">Fecha</label>
      <input 
        id = "fecha" 
        name = "fecha" 
        type = "text" 
        onChange = {handleChangeFecha}
        value = {fechaState}
      />
      <br></br>
      <label htmlfor = "nota">Nota</label>
      <input 
        id = "nota" 
        name = "nota" 
        type = "text" 
        onChange = {handleChangeNota}
        value = {notaState}
      />

    </div>
  );
}

export default App;
