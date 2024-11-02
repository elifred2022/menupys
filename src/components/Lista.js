import { useState } from "react";

export default function ListaComidas({ state, dispatch, onChangeComidas }) {
  return (
    <>
      <table className="styled-table">
        <thead></thead>
        <tbody>
          {state.comidas.map((usuario, index) => (
            <Foods
              key={usuario.id}
              usuario={usuario}
              onChangeComidas={onChangeComidas}
              dispatch={dispatch}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

function Foods({ onChangeComidas, usuario, index, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);

  // Función para actualizar los inputs
  const handleInputChange = (e, consumoIndex, field) => {
    const newConsumoStore = usuario.consumoStore.map((item, idx) => {
      if (idx === consumoIndex) {
        return { ...item, [field]: e.target.value };
      }
      return item;
    });

    onChangeComidas({
      type: "EDITAR_COMIDA",
      ...usuario,
      consumoStore: newConsumoStore,
    });
  };

  // Función para agregar un nuevo consumo
  const agregarConsumo = () => {
    const newConsumoStore = [
      ...usuario.consumoStore,
      { comida: "", gusto: "" },
    ];

    onChangeComidas({
      type: "EDITAR_COMIDA",
      ...usuario,
      consumoStore: newConsumoStore,
    });
  };

  // Renderizar contenido
  let foodContent;
  if (isEditing) {
    foodContent = (
      <tr key={usuario.id}>
        <td>{index + 1}.-</td>
        <td>
          <input
            value={usuario.nombre}
            onChange={(e) => {
              onChangeComidas({
                type: "EDITAR_COMIDA",
                ...usuario,
                nombre: e.target.value,
              });
            }}
          />
        </td>
        <td>
          {usuario.consumoStore.map((item, consumoIndex) => (
            <div className="consumocu" key={consumoIndex}>
              <label>Lunes:</label>
              <input
                value={item.comida}
                onChange={(e) => handleInputChange(e, consumoIndex, "comida")}
              />
              <input
                type="text"
                value={item.gusto}
                onChange={(e) => handleInputChange(e, consumoIndex, "gusto")}
              />
            </div>
          ))}
        </td>
      </tr>
    );
  } else {
    foodContent = (
      <>
        <td colSpan={3}>
          {/*<td>{index + 1}.-</td>*/}
          <td>{usuario.nombre}</td>
          <td>{usuario.fecha}</td>
        </td>
        <tr key={usuario.id}>
          <td>
            {usuario.consumoStore.map((item, consumoIndex) => (
              <div className="consumocu" key={consumoIndex}>
                <td>
                  <p>
                    Lunes: {item.comidaL}, {item.gustoL}
                  </p>
                </td>
                <td>
                  <p>
                    Martes: {item.comidaMt}, {item.gustoMt}
                  </p>
                </td>
                <td>
                  <p>
                    Miercoles: {item.comidaMc}, {item.gustoMc}
                  </p>
                </td>
                <td>
                  <p>
                    Jueves: {item.comidaJ}, {item.gustoJ}
                  </p>
                </td>
                <td>
                  <p>
                    Viernes: {item.comidaV}, {item.gustoV}
                  </p>
                </td>
              </div>
            ))}
          </td>
        </tr>
        <tr>
          <td colSpan={3}>
            <div className="botonera">
              <button
                className="my-button_editar"
                onClick={() => setIsEditing(true)}
              >
                EDITAR
              </button>
              <button
                className="my-button_eliminar"
                onClick={() => {
                  if (
                    window.confirm("¿Estás seguro de eliminar este registro?")
                  ) {
                    dispatch({ type: "ELIMINAR_COMIDA", payload: usuario });
                  }
                }}
              >
                ELIMINAR
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }

  return <>{foodContent}</>;
}
