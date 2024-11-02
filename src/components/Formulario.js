import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
          <input
            placeholder="Lunes"
            type="text"
            value={oPlunes}
            onChange={handleoPlunesChange}
          />
        </div>
        <div>
          <p>Martes:</p>

          <input
            placeholder="Martes"
            type="text"
            value={oPmartes}
            onChange={handleoPmartesChange}
          />
        </div>
        <div>
          <p>Miercoles:</p>

          <input
            placeholder="Miercoles"
            type="text"
            value={oPmiercoles}
            onChange={handleoPmiercolesChange}
          />
        </div>
        <div>
          <p>Jueves:</p>

          <input
            placeholder="Jueves"
            type="text"
            value={oPjueves}
            onChange={handleoPjuevesChange}
          />
        </div>

        <div>
          <p>Viernes:</p>

          <input
            placeholder="Viernes"
            type="text"
            value={oPviernes}
            onChange={handleoPviernesChange}
          />
        </div>
      </div>

      <button
        type="submit"
        // disabled={guardarDisabled}
        className="my-button_agregar"
      >
        GUARDAR
      </button>
    </form>
  );
};

export default Formulario;
