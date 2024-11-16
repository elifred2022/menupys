import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

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

  const navigate = useNavigate(); // Inicializa useNavigate para redirigir

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
                  if (
                    e.target.value !== "4 empanadas (pollo/carne/jyq/humita)"
                  ) {
                    // Resetea saborEmpanadasL a una cadena vacía
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborEmpanadasL: "", // Resetea el sabor
                      oPlunes: e.target.value,
                    });
                  } else if (
                    e.target.value !==
                    "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)"
                  ) {
                    // Resetea saborTartaL a una cadena vacía
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborTartaL: "", // Resetea el sabor
                      oPlunes: e.target.value,
                    });
                  } else {
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      oPlunes: e.target.value,
                    });
                  }
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
          {(usuario.oPlunes === "4 empanadas (pollo/carne/jyq/humita)" && (
            <div>
              <p>Gusto:</p>
              <input
                value={usuario.saborEmpanadasL}
                onChange={(e) => {
                  onChangeComidas({
                    type: "EDITAR_COMIDA",
                    ...usuario,
                    saborEmpanadasL: e.target.value,
                  });
                }}
              />
            </div>
          )) ||
            (usuario.oPlunes ===
              "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)" && (
              <div>
                <p>Gusto:</p>
                <input
                  value={usuario.saborTartaL}
                  onChange={(e) => {
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborTartaL: e.target.value,
                    });
                  }}
                />
              </div>
            ))}

          <div>
            <p>Martes:</p>
            <label>
              <select
                className="selector"
                value={usuario.oPmartes}
                onChange={(e) => {
                  if (
                    e.target.value !== "4 empanadas (pollo/carne/jyq/humita)"
                  ) {
                    // Resetea saborEmpanadasL a una cadena vacía
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborEmpanadasM: "", // Resetea el sabor
                      oPmartes: e.target.value,
                    });
                  } else if (
                    e.target.value ===
                    "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)"
                  ) {
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborTartaM: "", // Resetea el sabor
                      oPmartes: e.target.value,
                    });
                  } else {
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      oPmartes: e.target.value,
                    });
                  }
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
          {(usuario.oPmartes === "4 empanadas (pollo/carne/jyq/humita)" && (
            <div>
              <p>Gusto:</p>
              <input
                value={usuario.saborEmpanadasM}
                onChange={(e) => {
                  onChangeComidas({
                    type: "EDITAR_COMIDA",
                    ...usuario,
                    saborEmpanadasM: e.target.value,
                  });
                }}
              />
            </div>
          )) ||
            (usuario.oPmartes ===
              "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)" && (
              <div>
                <p>Gusto:</p>
                <input
                  value={usuario.saborTartaM}
                  onChange={(e) => {
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborTartaM: e.target.value,
                    });
                  }}
                />
              </div>
            ))}
          <div>
            <p>Miercoles:</p>
            <label>
              <select
                className="selector"
                value={usuario.oPmiercoles}
                onChange={(e) => {
                  if (
                    e.target.value !== "4 empanadas (pollo/carne/jyq/humita)"
                  ) {
                    // Resetea saborEmpanadasL a una cadena vacía
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborEmpanadasMc: "", // Resetea el sabor
                      oPmiercoles: e.target.value,
                    });
                  } else if (
                    e.target.value !==
                    "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)"
                  ) {
                    // Resetea saborTartaL a una cadena vacía
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborTartaMc: "", // Resetea el sabor
                      oPmiercoles: e.target.value,
                    });
                  } else {
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      oPmiercoles: e.target.value,
                    });
                  }
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
          {(usuario.oPmiercoles === "4 empanadas (pollo/carne/jyq/humita)" && (
            <div>
              <p>Gusto:</p>
              <input
                value={usuario.saborEmpanadasMc}
                onChange={(e) => {
                  onChangeComidas({
                    type: "EDITAR_COMIDA",
                    ...usuario,
                    saborEmpanadasMc: e.target.value,
                  });
                }}
              />
            </div>
          )) ||
            (usuario.oPmiercoles ===
              "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)" && (
              <div>
                <p>Gusto:</p>
                <input
                  value={usuario.saborTartaMc}
                  onChange={(e) => {
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborTartaMc: e.target.value,
                    });
                  }}
                />
              </div>
            ))}
          <div>
            <p>Jueves:</p>
            <label>
              <select
                className="selector"
                value={usuario.oPjueves}
                onChange={(e) => {
                  if (
                    e.target.value !== "4 empanadas (pollo/carne/jyq/humita)"
                  ) {
                    // Resetea saborEmpanadasL a una cadena vacía
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborEmpanadasJ: "", // Resetea el sabor
                      oPjueves: e.target.value,
                    });
                  } else if (
                    e.target.value !==
                    "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)"
                  ) {
                    // Resetea saborTartaL a una cadena vacía
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborTartaJ: "", // Resetea el sabor
                      oPjueves: e.target.value,
                    });
                  } else {
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      oPjueves: e.target.value,
                    });
                  }
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
          {(usuario.oPjueves === "4 empanadas (pollo/carne/jyq/humita)" && (
            <div>
              <p>Gusto:</p>
              <input
                value={usuario.saborEmpanadasJ}
                onChange={(e) => {
                  onChangeComidas({
                    type: "EDITAR_COMIDA",
                    ...usuario,
                    saborEmpanadasJ: e.target.value,
                  });
                }}
              />
            </div>
          )) ||
            (usuario.oPjueves ===
              "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)" && (
              <div>
                <p>Gusto:</p>
                <input
                  value={usuario.saborTartaJ}
                  onChange={(e) => {
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborTartaJ: e.target.value,
                    });
                  }}
                />
              </div>
            ))}
          <div>
            <p>Viernes:</p>
            <label>
              <select
                className="selector"
                value={usuario.oPviernes}
                onChange={(e) => {
                  if (
                    e.target.value !== "4 empanadas (pollo/carne/jyq/humita)"
                  ) {
                    // Resetea saborEmpanadasL a una cadena vacía
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborEmpanadasV: "", // Resetea el sabor
                      oPviernes: e.target.value,
                    });
                  } else if (
                    e.target.value !==
                    "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)"
                  ) {
                    // Resetea saborTartaL a una cadena vacía
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborTartaV: "", // Resetea el sabor
                      oPviernes: e.target.value,
                    });
                  } else if (
                    e.target.value !==
                    "Milanesa de vegetales (calabaza, zucchini o berenjena) con batatas al horno"
                  ) {
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborMilanesaV: "", // Resetea el sabor
                      oPviernes: e.target.value,
                    });
                  } else {
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      oPviernes: e.target.value,
                    });
                  }
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
          {(usuario.oPviernes === "4 empanadas (pollo/carne/jyq/humita)" && (
            <div>
              <p>Gusto:</p>
              <input
                value={usuario.saborEmpanadasV}
                onChange={(e) => {
                  onChangeComidas({
                    type: "EDITAR_COMIDA",
                    ...usuario,
                    saborEmpanadasV: e.target.value,
                  });
                }}
              />
            </div>
          )) ||
            (usuario.oPviernes ===
              "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)" && (
              <div>
                <p>Gusto:</p>
                <input
                  value={usuario.saborTartaV}
                  onChange={(e) => {
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborTartaV: e.target.value,
                    });
                  }}
                />
              </div>
            )) ||
            (usuario.oPviernes ===
              "Milanesa de vegetales (calabaza, zucchini o berenjena) con batatas al horno" && (
              <div>
                <p>Gusto:</p>
                <input
                  value={usuario.saborMilanesaV}
                  onChange={(e) => {
                    onChangeComidas({
                      type: "EDITAR_COMIDA",
                      ...usuario,
                      saborMilanesaV: e.target.value,
                    });
                  }}
                />
              </div>
            ))}
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
            <h3 name="nombre">{usuario.nombre}</h3>
          </div>
          <div>
            <h3 name="email">{usuario.email}</h3>
          </div>
          <h3>Su orden:</h3>
          <div className="contenido">
            <div>
              <p>Desde:</p>
              {usuario.fechaDesde}
            </div>
            <div>
              <p> Hasta:</p> {usuario.fechaHasta}
            </div>
            <div>
              <p>Lunes:</p>{" "}
              {usuario.oPlunes === "4 empanadas (pollo/carne/jyq/humita)" ? (
                <>
                  {usuario.oPlunes}; {usuario.saborEmpanadasL}
                </>
              ) : usuario.oPlunes ||
                usuario.oPlunes ===
                  "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)" ? (
                <>
                  {usuario.oPlunes}; {usuario.saborTartaL}
                </>
              ) : (
                usuario.oPlunes
              )}
            </div>
            <div>
              <p> Martes:</p>{" "}
              {usuario.oPmartes === "4 empanadas (pollo/carne/jyq/humita)" ? (
                <>
                  {usuario.oPmartes}; {usuario.saborEmpanadasM}
                </>
              ) : usuario.oPmartes ||
                usuario.oPmartes ===
                  "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)" ? (
                <>
                  {usuario.oPmartes}; {usuario.saborTartaM}
                </>
              ) : (
                usuario.oPmartes
              )}
            </div>
            <div>
              <p>Miercoles:</p>{" "}
              {usuario.oPmiercoles ===
              "4 empanadas (pollo/carne/jyq/humita)" ? (
                <>
                  {usuario.oPmiercoles}; {usuario.saborEmpanadasMc}
                </>
              ) : usuario.oPmiercoles ||
                usuario.oPmiercoles ===
                  "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)" ? (
                <>
                  {usuario.oPmiercoles}; {usuario.saborTartaMc}
                </>
              ) : (
                usuario.oPmiercoles
              )}
            </div>
            <div>
              <p>Jueves:</p>{" "}
              {usuario.oPjueves === "4 empanadas (pollo/carne/jyq/humita)" ? (
                <>
                  {usuario.oPjueves}; {usuario.saborEmpanadasJ}
                </>
              ) : usuario.oPjueves ||
                usuario.oPjueves ===
                  "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)" ? (
                <>
                  {usuario.oPjueves}; {usuario.saborTartaJ}
                </>
              ) : (
                usuario.oPjueves
              )}
            </div>
            <div>
              <p>Viernes:</p>{" "}
              {usuario.oPviernes === "4 empanadas (pollo/carne/jyq/humita)" ? (
                <>
                  {usuario.oPviernes}; {usuario.saborEmpanadasV}
                </>
              ) : usuario.oPviernes &&
                usuario.oPviernes ===
                  "Milanesa de vegetales (calabaza, zucchini o berenjena) con batatas al horno" ? (
                <>
                  {usuario.oPviernes}; {usuario.saborMilanesaV}
                </>
              ) : usuario.oPviernes ||
                usuario.oPviernes ===
                  "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)" ? (
                <>
                  {usuario.oPviernes}; {usuario.saborTartaV}
                </>
              ) : (
                usuario.oPviernes
              )}
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
            <button type="submit" className="my-button_agregar">
              Enviar
            </button>
          </div>
        </div>
      </>
    );
  }

  return <>{foodContent}</>;
}
