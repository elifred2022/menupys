import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Formulario = ({ onAgregarConsumo, dispatch }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [oPlunes, setOpLunes] = useState("");
  const [oPmartes, setOpMartes] = useState("");
  const [oPmiercoles, setOpMiercoles] = useState("");
  const [oPjueves, setOpJueves] = useState("");
  const [oPviernes, setOpViernes] = useState("");
  const [saborEmpanadasL, setSaborEmpanadasL] = useState(""); // Nuevo estado para el sabor de las empanadas
  const [saborEmpanadasM, setSaborEmpanadasM] = useState("");
  const [saborEmpanadasMc, setSaborEmpanadasMc] = useState("");
  const [saborEmpanadasJ, setSaborEmpanadasJ] = useState("");
  const [saborEmpanadasV, setSaborEmpanadasV] = useState("");
  const [saborTartaL, setSaborTartaL] = useState(""); // Nuevo estado para el sabor de las empanadas
  const [saborTartaM, setSaborTartaM] = useState("");
  const [saborTartaMc, setSaborTartaMc] = useState("");
  const [saborTartaJ, setSaborTartaJ] = useState("");
  const [saborTartaV, setSaborTartaV] = useState("");
  const [saborOmeletteMc, setSaborOmeletteMc] = useState("");
  //const [saborMilanesaL, setSaborMilanesaL] = useState("");
  //const [saborMilanesaM, setSaborMilanesaM] = useState("");
  //const [saborMilanesaMc, setSaborMilanesaMc] = useState("");
  //const [saborMilanesaJ, setSaborMilanesaJ] = useState("");
  const [saborMilanesaV, setSaborMilanesaV] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const form = useRef();

  const navigate = useNavigate(); // Inicializa useNavigate para redirigir
  /*
  const agregarConsumo = () => {
    setConsumoStore([
      ...consumoStore,
      {
        id: uuidv4(),
        comidaL: "",
        gustoL: "",
        comidaMt: "",
        gustoMt: "",
        comidaMc: "",
        gustoMc: "",
        comidaJ: "",
        gustoJ: "",
        comidaV: "",
        gustoV: "",
      },
    ]);
  };
*/
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFechaDesdeChange = (e) => {
    setFechaDesde(e.target.value);
  };

  const handleFechaHastaChange = (e) => {
    setFechaHasta(e.target.value);
  };

  const handleoPlunesChange = (e) => {
    setOpLunes(e.target.value);
  };

  const handleoPmartesChange = (e) => {
    setOpMartes(e.target.value);
  };

  const handleoPmiercolesChange = (e) => {
    setOpMiercoles(e.target.value);
  };

  const handleoPjuevesChange = (e) => {
    setOpJueves(e.target.value);
  };

  const handleoPviernesChange = (e) => {
    setOpViernes(e.target.value);
  };

  const handleSaborEmpanadasChangeL = (e) => {
    setSaborEmpanadasL(e.target.value);
  };

  const handleSaborEmpanadasChangeM = (e) => {
    setSaborEmpanadasM(e.target.value);
  };

  const handleSaborEmpanadasChangeMc = (e) => {
    setSaborEmpanadasMc(e.target.value);
  };

  const handleSaborEmpanadasChangeJ = (e) => {
    setSaborEmpanadasJ(e.target.value);
  };

  const handleSaborEmpanadasChangeV = (e) => {
    setSaborEmpanadasV(e.target.value);
  };

  const handleSaborTartaChangeL = (e) => {
    setSaborTartaL(e.target.value);
  };
  const handleSaborTartaChangeM = (e) => {
    setSaborTartaM(e.target.value);
  };
  const handleSaborTartaChangeMc = (e) => {
    setSaborTartaMc(e.target.value);
  };
  const handleSaborTartaChangeJ = (e) => {
    setSaborTartaJ(e.target.value);
  };
  const handleSaborTartaChangeV = (e) => {
    setSaborTartaV(e.target.value);
  };

  /*
  const handleSaborMilanesaChangeL = (e) => {
    setSaborMilanesaL(e.target.value);
  };
  const handleSaborMilanesaChangeM = (e) => {
    setSaborMilanesaM(e.target.value);
  };
  const handleSaborMilanesaChangeMc = (e) => {
    setSaborMilanesaMc(e.target.value);
  };
  const handleSaborMilanesaChangeJ = (e) => {
    setSaborMilanesaJ(e.target.value);
  }; */
  const handleSaborOmeletteChangeMc = (e) => {
    setSaborOmeletteMc(e.target.value);
  };

  const handleSaborMilanesaChangeV = (e) => {
    setSaborMilanesaV(e.target.value);
  };

  const handleObservacionesChange = (e) => {
    setObservaciones(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pregunta de confirmación
    const confirmSubmit = window.confirm("¿Confirma su orden?");
    if (!confirmSubmit) {
      return; // Si el usuario cancela, no se envía el formulario
    }

    alert("Su orden fue enviada con éxito.");

    emailjs
      .sendForm("service_pad444t", "template_n3d7zna", form.current, {
        publicKey: "Lfqdb8OfXO68L-vVt",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    /*
    dispatch({
      type: "AGREGAR_COMIDA",
      payload: {
        id: uuidv4(),
        nombre,
        email,
        fechaDesde,
        fechaHasta,
        oPlunes,
        oPmartes,
        oPmiercoles,
        oPjueves,
        oPviernes,
        saborEmpanadasL,
        saborEmpanadasM,
        saborEmpanadasMc,
        saborEmpanadasJ,
        saborEmpanadasV,
        saborTartaL,
        saborTartaM,
        saborTartaMc,
        saborTartaJ,
        saborTartaV,
        //saborMilanesaL,
        //saborMilanesaM,
        //saborMilanesaMc,
        //saborMilanesaJ,
        saborMilanesaV,
      },
    }); */ // ACA ESTA LA LOGICA PARA ENVIAR AL LOCAL STORAGE

    setNombre("");
    setEmail("");
    setFechaDesde("");
    setFechaHasta("");
    setOpLunes("");
    setOpMartes("");
    setOpMiercoles("");
    setOpJueves("");
    setOpViernes("");
    setSaborEmpanadasL("");
    setSaborEmpanadasM("");
    setSaborEmpanadasMc("");
    setSaborEmpanadasJ("");
    setSaborEmpanadasV("");
    setSaborTartaL("");
    setSaborTartaM("");
    setSaborTartaMc("");
    setSaborTartaJ("");
    setSaborTartaV("");
    //setSaborMilanesaL("");
    //setSaborMilanesaM("");
    //setSaborMilanesaMc("");
    //setSaborMilanesaJ("");
    setSaborMilanesaV("");
    setSaborOmeletteMc("");
    setObservaciones("");

    // setGuardarDisabled(true);
    navigate("/lista"); // Redirige a la página "lista" después de guardar
  };

  return (
    <form ref={form} className="formulario" onSubmit={handleSubmit}>
      <div className="consumo">
        <div>
          <p>Nombre:</p>
          <input
            placeholder="Ingrese Nombre"
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            name="nombre"
          />
        </div>

        <div>
          <p>email:</p>
          <input
            placeholder="Ingrese email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            name="email"
          />
        </div>
        <div>
          <p>Desde</p>
          <input
            placeholder="Desde"
            type="date"
            value={fechaDesde}
            onChange={handleFechaDesdeChange}
            name="fechaDesde"
          />
        </div>
        <div>
          <p>Hasta</p>
          <input
            placeholder="Hasta"
            type="date"
            value={fechaHasta}
            onChange={handleFechaHastaChange}
            name="fechaHasta"
          />
        </div>
        <div>
          <p>Lunes:</p>
          <label>
            <select
              className="selector"
              name="oPlunes"
              value={oPlunes}
              onChange={(e) => {
                handleoPlunesChange(e);
                if (e.target.value === "4 empanadas (pollo/carne/jyq/humita)") {
                  setSaborEmpanadasL(""); // Reinicia el sabor si se selecciona
                } else if (
                  e.target.value ===
                  "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)"
                ) {
                  setSaborTartaL("");
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
        {(oPlunes === "4 empanadas (pollo/carne/jyq/humita)" && (
          <div>
            <input
              placeholder="Ingrese cantidad y gusto"
              type="text"
              value={saborEmpanadasL}
              name="saborEmpanadasL"
              onChange={handleSaborEmpanadasChangeL}
            />
          </div>
        )) ||
          (oPlunes ===
            "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)" && (
            <div>
              <input
                placeholder="Ingrese gusto"
                type="text"
                value={saborTartaL}
                name="saborTartaL"
                onChange={handleSaborTartaChangeL}
              />
            </div>
          ))}
        <div>
          <p>Martes:</p>

          <label>
            <select
              className="selector"
              value={oPmartes}
              name="oPmartes"
              onChange={(e) => {
                handleoPmartesChange(e);
                if (e.target.value === "4 empanadas (pollo/carne/jyq/humita)") {
                  setSaborEmpanadasM(""); // Reinicia el sabor si se selecciona
                } else if (
                  e.target.value ===
                  "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)"
                ) {
                  setSaborTartaM("");
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
                Chop suey (vegetales salteados con salsa de soja, jengibre y mix
                de semillas)
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
        {(oPmartes === "4 empanadas (pollo/carne/jyq/humita)" && (
          <div>
            <input
              placeholder="Ingrese cantidad y gusto"
              type="text"
              value={saborEmpanadasM}
              name="saborEmpanadasM"
              onChange={handleSaborEmpanadasChangeM}
            />
          </div>
        )) ||
          (oPmartes ===
            "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)" && (
            <div>
              <input
                placeholder="Ingrese gusto"
                type="text"
                value={saborTartaM}
                name="saborTartaM"
                onChange={handleSaborTartaChangeM}
              />
            </div>
          ))}
        <div>
          <p>Miercoles:</p>

          <label>
            <select
              className="selector"
              value={oPmiercoles}
              name="oPmiercoles"
              onChange={(e) => {
                handleoPmiercolesChange(e);
                if (e.target.value === "4 empanadas (pollo/carne/jyq/humita)") {
                  setSaborEmpanadasMc(""); // Reinicia el sabor si se selecciona
                } else if (
                  e.target.value ===
                  "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)"
                ) {
                  setSaborTartaMc("");
                } else if (
                  e.target.value ===
                  "Omelette capresse con ensalada (lechuga/tomate/zanahoria/cebolla)"
                ) {
                  setSaborOmeletteMc("");
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
              <option
                className="yellow"
                value="Omelette capresse con ensalada (lechuga/tomate/zanahoria/cebolla)"
              >
                Omelette capresse con ensalada
                (lechuga/tomate/zanahoria/cebolla)
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
        {(oPmiercoles === "4 empanadas (pollo/carne/jyq/humita)" && (
          <div>
            <input
              placeholder="Ingrese cantidad y gusto"
              type="text"
              value={saborEmpanadasMc}
              name="saborEmpanadasMc"
              onChange={handleSaborEmpanadasChangeMc}
            />
          </div>
        )) ||
          (oPmiercoles ===
            "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)" && (
            <div>
              <input
                placeholder="Ingrese gusto"
                type="text"
                value={saborTartaMc}
                name="saborTartaMc"
                onChange={handleSaborTartaChangeMc}
              />
            </div>
          )) ||
          (oPmiercoles ===
            "Omelette capresse con ensalada (lechuga/tomate/zanahoria/cebolla)" && (
            <div>
              <input
                placeholder="Ingrese gusto"
                type="text"
                value={saborOmeletteMc}
                name="saborOmeletteMc"
                onChange={handleSaborOmeletteChangeMc}
              />
            </div>
          ))}
        <div>
          <p>Jueves:</p>

          <label>
            <select
              className="selector"
              value={oPjueves}
              name="oPjueves"
              onChange={(e) => {
                handleoPjuevesChange(e);
                if (e.target.value === "4 empanadas (pollo/carne/jyq/humita)") {
                  setSaborEmpanadasJ(""); // Reinicia el sabor si se selecciona
                } else if (
                  e.target.value ===
                  "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)"
                ) {
                  setSaborTartaJ("");
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
        {(oPjueves === "4 empanadas (pollo/carne/jyq/humita)" && (
          <div>
            <input
              placeholder="Ingrese cantidad y gusto"
              type="text"
              value={saborEmpanadasJ}
              name="saborEmpanadasJ"
              onChange={handleSaborEmpanadasChangeJ}
            />
          </div>
        )) ||
          (oPjueves ===
            "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)" && (
            <div>
              <input
                placeholder="Ingrese gusto"
                type="text"
                value={saborTartaJ}
                name="saborTartaJ"
                onChange={handleSaborTartaChangeJ}
              />
            </div>
          ))}
        <div>
          <p>Viernes:</p>

          <label>
            <select
              className="selector"
              value={oPviernes}
              name="oPviernes"
              onChange={(e) => {
                handleoPviernesChange(e);
                if (e.target.value === "4 empanadas (pollo/carne/jyq/humita)") {
                  setSaborEmpanadasV(""); // Reinicia el sabor si se selecciona
                } else if (
                  e.target.value ===
                  "Milanesa de vegetales (zucchini o berenjena) con batatas al horno"
                ) {
                  setSaborMilanesaV("");
                } else if (
                  e.target.value ===
                  "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)"
                ) {
                  setSaborTartaV("");
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
                value="Milanesa de vegetales (zucchini o berenjena) con batatas al horno"
              >
                Milanesa de vegetales (zucchini o berenjena) con batatas al
                horno
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
                Ensalada lechuga
              </option>
              <option className="yellow" value="Ensalada primavera">
                Ensalada primavera
              </option>
            </select>
          </label>
        </div>
        {(oPviernes === "4 empanadas (pollo/carne/jyq/humita)" && (
          <div>
            <input
              placeholder="Ingrese cantidad y gusto"
              type="text"
              value={saborEmpanadasV}
              name="saborEmpanadasV"
              onChange={handleSaborEmpanadasChangeV}
            />
          </div>
        )) ||
          (oPviernes ===
            "Tarta(acelga/caprese/jyq) con ensalada (lechuga/tomate/zanahoria/cebolla)" && (
            <div>
              <input
                placeholder="Ingrese gusto"
                type="text"
                value={saborTartaV}
                name="saborTartaV"
                onChange={handleSaborTartaChangeV}
              />
            </div>
          )) ||
          (oPviernes ===
            "Milanesa de vegetales (zucchini o berenjena) con batatas al horno" && (
            <div>
              <input
                placeholder="Ingrese gusto"
                type="text"
                value={saborMilanesaV}
                name="saborMilanesaV"
                onChange={handleSaborMilanesaChangeV}
              />
            </div>
          ))}

        <div>
          <p>Observaciones:</p>
          <input
            placeholder="Observaciones/aclaraciones"
            type="text"
            value={observaciones}
            onChange={handleObservacionesChange}
            name="observaciones"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          // disabled={guardarDisabled}
          className="my-button_agregar"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Formulario;
