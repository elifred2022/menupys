export const initialState = {
  comidas: [],
};

export default function Reducer(state, action) {
  switch (action.type) {
    case "AGREGAR_COMIDA":
      return {
        ...state,
        comidas: [...state.comidas, action.payload],
      };

    case "EDITAR_COMIDA": {
      return {
        ...state,
        comidas: state.comidas.map((usuario) =>
          usuario.id === action.payload.id ? action.payload : usuario
        ),
      };
    }

    case "ELIMINAR_COMIDA": {
      return {
        ...state,

        comidas: state.comidas.filter(
          (usuario) => usuario.nombre !== action.payload.nombre
        ),
      };
    }

    case "RESET":
      return initialState;

    case "RESET_RESULTADOS":
      return { ...state, modopago: [] };

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
