import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const Formulario = ({ onAgregarConsumo, dispatch }) => {
  const [nombre, setNombre] = useState("");
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [oPlunes, setOpLunes] = useState("");
  const [oPmartes, setOpMartes] = useState("");
  const [oPmiercoles, setOpMiercoles] = useState("");
  const [oPjueves, setOpJueves] = useState("");
  const [oPviernes, setOpViernes] = useState("");
  const [consumoStore, setConsumoStore] = useState([]);
  // const [guardarDisabled, setGuardarDisabled] = useState(true);

  const navigate = useNavigate(); // Inicializa useNavigate para redirigir

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

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
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
  /****imputs comidas dias */
  const handleConsumoChangeL = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].comidaL = e.target.value;
    setConsumoStore(updatedConsumos);
    /* setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaL && !item.gustoL)
    );*/
  };

  const handleConsumoChangeMt = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].comidaMt = e.target.value;
    setConsumoStore(updatedConsumos);
    /* setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaMt && !item.gustoMt)
    );*/
  };

  const handleConsumoChangeMc = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].comidaMc = e.target.value;
    setConsumoStore(updatedConsumos);
    /*   setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaMc && !item.gustoMc)
    );*/
  };

  const handleConsumoChangeJ = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].comidaJ = e.target.value;
    setConsumoStore(updatedConsumos);
    /*   setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaJ && !item.gustoJ)
    );*/
  };

  const handleConsumoChangeV = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].comidaV = e.target.value;
    setConsumoStore(updatedConsumos);
    /*   setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaV && !item.gustoV)
    );*/
  };

  /*** IMPUTS GUSTO **/

  const handleGustoChangeL = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].gustoL = e.target.value;
    setConsumoStore(updatedConsumos);
    /*  setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaL && !item.gustoL)
    );*/
  };

  const handleGustoChangeMt = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].gustoMt = e.target.value;
    setConsumoStore(updatedConsumos);
    /*   setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaMt && !item.gustoMt)
    );*/
  };

  const handleGustoChangeMc = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].gustoMc = e.target.value;
    setConsumoStore(updatedConsumos);
    /*  setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaMc && !item.gustoMc)
    );*/
  };

  const handleGustoChangeJ = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].gustoJ = e.target.value;
    setConsumoStore(updatedConsumos);
    /*   setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaJ && !item.gustoJ)
    );*/
  };

  const handleGustoChangeV = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].gustoV = e.target.value;
    setConsumoStore(updatedConsumos);
    /*   setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaV && !item.gustoV)
    );*/
  };

  /************ */

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "AGREGAR_COMIDA",
      payload: {
        id: uuidv4(),
        nombre,
        fechaDesde,
        fechaHasta,
        oPlunes,
        oPmartes,
        oPmiercoles,
        oPjueves,
        oPviernes,
        consumoStore,
      },
    });
    setNombre("");
    setFechaDesde("");
    setFechaHasta("");
    setOpLunes("");
    setOpMartes("");
    setOpMiercoles("");
    setOpJueves("");
    setOpViernes("");
    setConsumoStore([]);
    // setGuardarDisabled(true);
    navigate("/lista"); // Redirige a la página "lista" después de guardar
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="consumo">
        <div>
          <p>Nombre:</p>
          <input
            placeholder="Ingrese Nombre"
            type="text"
            value={nombre}
            onChange={handleNombreChange}
          />
        </div>
        <div>
          <p>Desde</p>
          <input
            placeholder="Desde"
            type="date"
            value={fechaDesde}
            onChange={handleFechaDesdeChange}
          />
        </div>
        <div>
          <p>Hasta</p>
          <input
            placeholder="Hasta"
            type="date"
            value={fechaHasta}
            onChange={handleFechaHastaChange}
          />
        </div>
        <div>
          <p>Lunes:</p>
          <label>
            <select
              className="selector"
              value={oPlunes}
              onChange={handleoPlunesChange}
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
        <div>
          <p>Martes:</p>

          <label>
            <select
              className="selector"
              value={oPmartes}
              onChange={handleoPmartesChange}
            >
              <option className="yellow" value="seleccionar">
                Seleccione
              </option>
              <option className="yellow" value="No asisto">
                No asisto
              </option>
              <option className="yellow" value="pasta">
                Ensalada
              </option>
              <option className="yellow" value="pollo">
                Pasta
              </option>
              <option className="yellow" value="pizza">
                Pizza
              </option>
            </select>
          </label>
        </div>
        <div>
          <p>Miercoles:</p>

          <label>
            <select
              className="selector"
              value={oPmiercoles}
              onChange={handleoPmiercolesChange}
            >
              <option className="yellow" value="seleccionar">
                Seleccione
              </option>
              <option className="yellow" value="No asisto">
                No asisto
              </option>
              <option className="yellow" value="pasta">
                Ensalada
              </option>
              <option className="yellow" value="pollo">
                Pasta
              </option>
              <option className="yellow" value="pizza">
                Pizza
              </option>
            </select>
          </label>
        </div>
        <div>
          <p>Jueves:</p>

          <label>
            <select
              className="selector"
              value={oPjueves}
              onChange={handleoPjuevesChange}
            >
              <option className="yellow" value="seleccionar">
                Seleccione
              </option>
              <option className="yellow" value="No asisto">
                No asisto
              </option>
              <option className="yellow" value="pasta">
                Ensalada
              </option>
              <option className="yellow" value="pollo">
                Pasta
              </option>
              <option className="yellow" value="pizza">
                Pizza
              </option>
            </select>
          </label>
        </div>

        <div>
          <p>Viernes:</p>

          <label>
            <select
              className="selector"
              value={oPviernes}
              onChange={handleoPviernesChange}
            >
              <option className="yellow" value="seleccionar">
                Seleccione
              </option>
              <option className="yellow" value="No asisto">
                No asisto
              </option>
              <option className="yellow" value="pasta">
                Ensalada
              </option>
              <option className="yellow" value="pollo">
                Pasta
              </option>
              <option className="yellow" value="pizza">
                Pizza
              </option>
            </select>
          </label>
        </div>
      </div>
      <div>
        <button
          type="submit"
          // disabled={guardarDisabled}
          className="my-button_agregar"
        >
          GUARDAR
        </button>
      </div>
    </form>
  );
};

export default Formulario;
