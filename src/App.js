import Reducer, { initialState } from "./reducer/Reducer";
import { useState, useEffect, useReducer } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function App() {
  const [storedState, setStoredState] = useState(() => {
    // funcion para recuperar datos del localstorage del state general
    const stored = JSON.parse(localStorage.getItem("state"));
    return stored || initialState;
  });

  const [state, dispatch] = useReducer(Reducer, storedState);

  useEffect(() => {
    // funcion para enviar los datos del state general al localstorage
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const [consumosListados, setConsumosListados] = useState([]);

  const agregarConsumo = (nuevoConsumo) => {
    setConsumosListados([...consumosListados, nuevoConsumo]);
  };

  function handleChangeComidas(comidaId) {
    dispatch({
      type: "EDITAR_COMIDA",
      payload: comidaId,
    });
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Formulario dispatch={dispatch} onAgregarConsumo={agregarConsumo} />
        <Lista
          consumoStore={consumosListados}
          comidas={state.comidas}
          state={state}
          dispatch={dispatch}
          onChangeComidas={handleChangeComidas}
        />
      </main>
    </div>
  );
}

export default App;
