import { useState } from "react";

function App() {
  //Hooks
  const [inputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
  });

  const initialState = JSON.parse(localStorage.getItem("notas")) || []
  const [notas, setnotas] = useState(initialState)

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

  const handleClickGuardar =() =>{
    setnotas([...notas, inputState])

    localStorage.setItem("notas", JSON.stringify(notas));
    handleResetClick();
  }

  const handleBorrarNota = (index) =>{
    const nuevoArreglo = []
    notas.forEach((nota, i )=> {
      if (index !==i){
        nuevoArreglo.push(nota);
      }
    });
    localStorage.setItem("notas",JSON.stringify(nuevoArreglo));
    setnotas([...nuevoArreglo])  
  }
  
  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <h3>Lista</h3>
          {
            notas.length===0 ?
            "Al momento no tienes notas guardadas. Puedes crear una en el formulario contiguo":
          
            <ol>
              {notas.map((item, index) => {
                return(
                  <li key={index}>
                    { item.titulo }({item.fecha}) &nbsp;
                    <i className="bi-x-circle-fill" 
                    onClick={() => handleBorrarNota(index)}
                    style ={{color: "red", fontSize: "0.95rem", cursor: "pointer" }}></i>
                  </li>
                  
                )
              }
            )}
            </ol>  
          }
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
            type = "date" 
            onChange = {handleInputChange}
            value = {inputState.fecha}
        /></label>
        
        <br></br>
        <label htmlfor = "nota">
          Nota
          <textarea 
            id = "nota" 
            name = "nota" 
            onChange = {handleInputChange}
            value = {inputState.nota}
            style = {{width: "100%"}}

        /></label>

      <hr></hr>
      <div className="ms-2 me-2 mt-2 row">

      <div className="col">
        <span className="row me-1">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleResetClick}
          >
            Limpiar
          </button>
          </span>
        </div>

        <div className="col">
          <span className="row ms-1">
          
          <button 
            type="button"
            className="btn btn-secondary"
            onClick={handleClickGuardar}>
            Guardar
          </button>
          </span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
