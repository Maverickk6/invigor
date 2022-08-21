import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [practices, setPractices] = useState([]);

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`http://localhost:3001/practice`);
      console.log(data);
      setPractices(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`http://localhost:3001/patient`);
      console.log(data);
      setPatients(data);
    }
    fetchData();
  }, []);


  return (
    <APIContext.Provider
      value={{
        practices,
        patients
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
