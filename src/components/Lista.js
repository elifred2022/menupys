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
      <div className="formulario" key={usuario.id}>
        <div className="consumo">
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
              type="date"
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
              type="date"
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
                <option className="selector" value="seleccionar">
                  Seleccione
                </option>
                <option className="selector" value="No asisto">
                  No asisto
                </option>
                <option
                  className="selector"
                  value="Milanesa de pollo con puré de papas"
                >
                  Milanesa de pollo con puré de papas
                </option>
                <option
                  className="selector"
                  value="Calabaza rellena con ratotoille de vegetales y queso gratinado"
                >
                  Calabaza rellena con ratotoille de vegetales y queso gratinado
                </option>
                <option
                  className="selector"
                  value="Sandwich de milanesa de ternera completo"
                >
                  Sandwich de milanesa de ternera completo
                </option>
                <option
                  className="selector"
                  value="Sandwich de milanesa de pollo completo"
                >
                  Sandwich de milanesa de pollo completo
                </option>
                <option
                  className="selector"
                  value="Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)"
                >
                  Tarta(acelga/caprese/jyq) con ensalada
                  (lechuga/tomate/zanahoria/cebolla)
                </option>
                <option
                  className="selector"
                  value="4 empanadas (pollo/carne/jyq/humita)"
                >
                  4 empanadas (pollo/carne/jyq/humita)
                </option>
                <option
                  className="selector"
                  value="Pechuga a la plancha con arroz blanco aceite y queso"
                >
                  Pechuga a la plancha con arroz blanco aceite y queso
                </option>
                <option
                  className="selector"
                  value="Costeleta de ternera con papas al natural"
                >
                  Costeleta de ternera con papas al natural
                </option>
                <option className="selector" value="Ensalada caesar">
                  Ensalada caesar
                </option>
                <option className="selector" value="Ensalada Lelucha">
                  Ensalada Lelucha
                </option>
                <option className="selector" value="Ensalada primavera">
                  Ensalada primavera
                </option>
              </select>
            </label>
          </div>
          <div>
            <p>Martes:</p>
            <label>
              <select
                className="selector"
                value={usuario.oPmartes}
                onChange={(e) => {
                  onChangeComidas({
                    type: "EDITAR_COMIDA",
                    ...usuario,
                    oPmartes: e.target.value,
                  });
                }}
              >
                <option className="yellow" value="seleccionar">
                  Seleccione
                </option>
                <option className="yellow" value="No asisto">
                  No asisto
                </option>
                <option className="yellow" value="Ravioles con filetto y queso">
                  Ravioles con filetto y queso
                </option>
                <option
                  className="yellow"
                  value="Chop suey (vegetales salteados con salsa de soja, jengibre y mix de semillas)"
                >
                  Chop suey (vegetales salteados con salsa de soja, jengibre y
                  mix de semillas)
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
          <div>
            <p>Miercoles:</p>
            <label>
              <select
                className="selector"
                value={usuario.oPmiercoles}
                onChange={(e) => {
                  onChangeComidas({
                    type: "EDITAR_COMIDA",
                    ...usuario,
                    oPmiercoles: e.target.value,
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
                  value="Costeletas de cerdo a la Riojana"
                >
                  Costeletas de cerdo a la Riojana
                </option>
                <option className="yellow" value="Omelette capresse">
                  Omelette capresse
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
          <div>
            <p>Jueves:</p>
            <label>
              <select
                className="selector"
                value={usuario.oPjueves}
                onChange={(e) => {
                  onChangeComidas({
                    type: "EDITAR_COMIDA",
                    ...usuario,
                    oPjueves: e.target.value,
                  });
                }}
              >
                <option className="yellow" value="seleccionar">
                  Seleccione
                </option>
                <option className="yellow" value="No asisto">
                  No asisto
                </option>
                <option className="yellow" value="Ñoquis con salsa bolognesa">
                  Ñoquis con salsa bolognesa
                </option>
                <option
                  className="yellow"
                  value="Hamburguesas de vegetales con arroz integral oliva y queso"
                >
                  Hamburguesas de vegetales con arroz integral oliva y queso
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
          <div>
            <p>Viernes:</p>
            <label>
              <select
                className="selector"
                value={usuario.oPviernes}
                onChange={(e) => {
                  onChangeComidas({
                    type: "EDITAR_COMIDA",
                    ...usuario,
                    oPviernes: e.target.value,
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
                  value="Pollo al horno con papas doradas"
                >
                  Pollo al horno con papas doradas
                </option>
                <option
                  className="yellow"
                  value="Milanesa de vegetales (calabaza, zucchini o berenjena) con batatas al horno"
                >
                  Milanesa de vegetales (calabaza, zucchini o berenjena) con
                  batatas al horno
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
        <div className="botonera">
          <button
            className="my-button_agregar"
            onClick={() => setIsEditing(false)}
          >
            Guardar
          </button>
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
