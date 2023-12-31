import { useContext, createContext, useReducer, useCallback } from "react";

import { DataType } from "../modules/ClientDataType";

type state = {
  data: DataType[];
  isLoading: boolean;
  error: string;
};

type action = {
  type: string;
  payload?: DataType[];
};

type context = {
  fetchClient: () => Promise<void>;
} & state;

const initialState: state = {
  data: [
    {
      id: -1,
      name: "",
      gender: "",
      address: "",
      time: [{ day: "", startHour: "", startMin: "", endHour: "", endMin: "" }],
      service: [],
    },
  ],
  isLoading: false,
  error: "",
};
const BASE_URL = "http://localhost:8000";

function reducer(state: state, action: action): state {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "client/load":
      return {
        ...state,
        data: action.payload ?? state.data,
        isLoading: false,
      };
  }
  return state;
}

const ClientDataContext = createContext<context | null>(null);

function ClientDataProvider({ children }: { children: React.ReactNode }) {
  const [{ data, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const fetchClient = useCallback(async function getClientData() {
    dispatch({ type: "loading" });
    const res = await fetch(`${BASE_URL}/clients`);
    const data = await res.json();
    dispatch({ type: "client/load", payload: data });
  }, []);

  return (
    <ClientDataContext.Provider value={{ data, isLoading, error, fetchClient }}>
      {children}
    </ClientDataContext.Provider>
  );
}

function useClientData() {
  const context = useContext(ClientDataContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the ClientDataProvider");
  return context;
}

export { ClientDataProvider, useClientData };
