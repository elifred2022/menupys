import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ onAgregarConsumo, dispatch }) => {
  const [nombre, setNombre] = useState("");
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [consumoStore, setConsumoStore] = useState([]);
  const [guardarDisabled, setGuardarDisabled] = useState(true);

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
  /****imputs comidas dias */
  const handleConsumoChangeL = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].comidaL = e.target.value;
    setConsumoStore(updatedConsumos);
    setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaL && !item.gustoL)
    );
  };

  const handleConsumoChangeMt = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].comidaMt = e.target.value;
    setConsumoStore(updatedConsumos);
    setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaMt && !item.gustoMt)
    );
  };

  const handleConsumoChangeMc = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].comidaMc = e.target.value;
    setConsumoStore(updatedConsumos);
    setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaMc && !item.gustoMc)
    );
  };

  const handleConsumoChangeJ = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].comidaJ = e.target.value;
    setConsumoStore(updatedConsumos);
    setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaJ && !item.gustoJ)
    );
  };

  const handleConsumoChangeV = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].comidaV = e.target.value;
    setConsumoStore(updatedConsumos);
    setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaV && !item.gustoV)
    );
  };

  /*** IMPUTS GUSTO **/

  const handleGustoChangeL = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].gustoL = e.target.value;
    setConsumoStore(updatedConsumos);
    setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaL && !item.gustoL)
    );
  };

  const handleGustoChangeMt = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].gustoMt = e.target.value;
    setConsumoStore(updatedConsumos);
    setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaMt && !item.gustoMt)
    );
  };

  const handleGustoChangeMc = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].gustoMc = e.target.value;
    setConsumoStore(updatedConsumos);
    setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaMc && !item.gustoMc)
    );
  };

  const handleGustoChangeJ = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].gustoJ = e.target.value;
    setConsumoStore(updatedConsumos);
    setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaJ && !item.gustoJ)
    );
  };

  const handleGustoChangeV = (index, e) => {
    const updatedConsumos = [...consumoStore];
    updatedConsumos[index].gustoV = e.target.value;
    setConsumoStore(updatedConsumos);
    setGuardarDisabled(
      updatedConsumos.every((item) => !item.comidaV && !item.gustoV)
    );
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
        consumoStore,
      },
    });
    setNombre("");
    setFechaDesde("");
    setFechaHasta("");
    setConsumoStore([]);
    setGuardarDisabled(true);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="consumo">
        <input
          placeholder="Ingrese Nombre"
          type="text"
          value={nombre}
          onChange={handleNombreChange}
        />
        Desde
        <input
          placeholder="Desde"
          type="date"
          value={fechaDesde}
          onChange={handleFechaDesdeChange}
        />
        Hasta
        <input
          placeholder="Hasta"
          type="date"
          value={fechaHasta}
          onChange={handleFechaHastaChange}
        />
        <button
          className="my-button_editar"
          type="button"
          onClick={agregarConsumo}
        >
          AGREGAR
        </button>
      </div>

      {consumoStore.map((usuario, index) => (
        <div key={usuario.id} className="consumo-dia">
          <div className="dia">
            <label>Lunes</label>
            <input
              placeholder="Ingrese comida"
              type="text"
              value={usuario.comidaL}
              onChange={(e) => handleConsumoChangeL(index, e)}
            />
            <input
              placeholder="Ingrese gusto"
              type="text"
              value={usuario.gustoL}
              onChange={(e) => handleGustoChangeL(index, e)}
            />
          </div>
          <div className="dia">
            <label>Martes</label>
            <input
              placeholder="Ingrese comida"
              type="text"
              value={usuario.comidaMt}
              onChange={(e) => handleConsumoChangeMt(index, e)}
            />
            <input
              placeholder="Ingrese gusto"
              type="text"
              value={usuario.gustoMt}
              onChange={(e) => handleGustoChangeMt(index, e)}
            />
          </div>
          <div className="dia">
            <label>Miercoles</label>
            <input
              placeholder="Ingrese comida"
              type="text"
              value={usuario.comidaMc}
              onChange={(e) => handleConsumoChangeMc(index, e)}
            />
            <input
              placeholder="Ingrese gusto"
              type="text"
              value={usuario.gustoMc}
              onChange={(e) => handleGustoChangeMc(index, e)}
            />
          </div>
          <div className="dia">
            <label>Jueves</label>
            <input
              placeholder="Ingrese comida"
              type="text"
              value={usuario.comidaJ}
              onChange={(e) => handleConsumoChangeJ(index, e)}
            />
            <input
              placeholder="Ingrese gusto"
              type="text"
              value={usuario.gustoJ}
              onChange={(e) => handleGustoChangeJ(index, e)}
            />
          </div>
          <div className="dia">
            <label>Viernes</label>
            <input
              placeholder="Ingrese comida"
              type="text"
              value={usuario.comidaV}
              onChange={(e) => handleConsumoChangeV(index, e)}
            />
            <input
              placeholder="Ingrese gusto"
              type="text"
              value={usuario.gustoV}
              onChange={(e) => handleGustoChangeV(index, e)}
            />
          </div>
        </div>
      ))}
      <button
        type="submit"
        disabled={guardarDisabled}
        className="my-button_agregar"
      >
        GUARDAR
      </button>
    </form>
  );
};

export default Formulario;
