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

  // Función para formatear la fecha
  /*
  const formatDate = (date) => {
    if (!date) return ""; // Verifica si hay una fecha
    const localDate = new Date(date);
    return localDate.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }; */

  // Renderizar contenido
  let foodContent;
  if (isEditing) {
    foodContent = (
      <div key={usuario.id}>
        <div>
          <p>Nombre:</p>
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
        </div>
        <div>
          <p>Desde:</p>
          <input
            value={usuario.fechaDesde}
            onChange={(e) => {
              onChangeComidas({
                type: "EDITAR_COMIDA",
                ...usuario,
                fechaDesde: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <p>Hasta:</p>
          <input
            value={usuario.fechaDesde}
            onChange={(e) => {
              onChangeComidas({
                type: "EDITAR_COMIDA",
                ...usuario,
                fechaHasta: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <p>Lunes:</p>
          <label>
            <select
              className="selector"
              value={usuario.oPlunes}
              onChange={(e) => {
                onChangeComidas({
                  type: "EDITAR_COMIDA",
                  ...usuario,
                  oPlunes: e.target.value,
                });
              }}
            >
              <option className="yellow" value="seleccionar">
                Seleccione
              </option>
              <option className="yellow" value="No asisto">
                No asisto
              </option>
              <option
                className="yellow"
                value="Milanesa de pollo con puré de papas"
              >
                Milanesa de pollo con puré de papas
              </option>
              <option
                className="yellow"
                value="Calabaza rellena con ratotoille de vegetales y queso gratinado"
              >
                Calabaza rellena con ratotoille de vegetales y queso gratinado
              </option>
              <option
                className="yellow"
                value="Sandwich de milanesa de ternera completo"
              >
                Sandwich de milanesa de ternera completo
              </option>
              <option
                className="yellow"
                value="Sandwich de milanesa de pollo completo"
              >
                Sandwich de milanesa de pollo completo
              </option>
              <option
                className="yellow"
                value="Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)"
              >
                Tarta(acelga/caprese/jyq) con ensalada
                (lechuga/tomate/zanahoria/cebolla)
              </option>
              <option
                className="yellow"
                value="4 empanadas (pollo/carne/jyq/humita)"
              >
                4 empanadas (pollo/carne/jyq/humita)
              </option>
              <option
                className="yellow"
                value="Pechuga a la plancha con arroz blanco aceite y queso"
              >
                Pechuga a la plancha con arroz blanco aceite y queso
              </option>
              <option
                className="yellow"
                value="Costeleta de ternera con papas al natural"
              >
                Costeleta de ternera con papas al natural
              </option>
              <option className="yellow" value="Ensalada caesar">
                Ensalada caesar
              </option>
              <option className="yellow" value="Ensalada Lelucha">
                Ensalada Lelucha
              </option>
              <option className="yellow" value="Ensalada primavera">
                Ensalada primavera
              </option>
            </select>
          </label>
        </div>
      </div>
    );
  } else {
    foodContent = (
      <>
        <div className="lista">
          <div>
            <h3>{usuario.nombre}</h3>
          </div>
          <div className="contenido">
            <div>
              <p>Desde:</p>
              {usuario.fechaDesde} {/* formatDate(usuario.fechaDesde) */}
            </div>
            <div>
              <p> Hasta:</p>
              {usuario.fechaHasta} {/* formatDate(usuario.fechaHasta) */}
            </div>
            <div>
              <p>Lunes:</p>
              {usuario.oPlunes}
            </div>
            <div>
              <p> Martes:</p>
              {usuario.oPmartes}
            </div>
            <div>
              <p>Miercoles:</p>
              {usuario.oPmiercoles}
            </div>
            <div>
              <p>Jueves:</p>
              {usuario.oPjueves}
            </div>
            <div>
              <p>Viernes:</p>
              {usuario.oPviernes}
            </div>
          </div>
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
        </div>
      </>
    );
  }

  return <>{foodContent}</>;
}
