import { set } from "date-fns";
import React from "react";
import { createContext, useContext, useState } from "react";


export const GeneralContext = createContext();

export const ContextOneProvider = ({ children }) => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputTitleProyect, setInputTitleProyect] = useState("");
  const [resultado, setResultado] = useState(null);
  const [fc, setFc] = useState(null);
  const [resultFc, setResultFc] = useState(null);



  const updateResultFc = (value) => {
    setResultFc(value);
  }
  
  const updateFc = (value) => {
    setFc(value);
  }

  const updateResultado = (value) => {
    setResultado(value);
  }

  const updateInputValue1 = (value) => {
    setInputValue1(value);
  };

  const updateInputValue2 = (value) => {
    setInputValue2(value);
  };

  const updateInputValue3 = (value) => {
    setInputValue3(value);
  };

  const updateInputTitleProyect = (value) => {
    setInputTitleProyect(value);
  };

  return (
    <GeneralContext.Provider
      value={{
        resultFc,
        resultado,
        inputValue1,
        inputValue2,
        inputValue3,
        inputTitleProyect,
        updateInputTitleProyect,
        updateResultFc,
        updateInputValue1,
        updateInputValue2,
        updateInputValue3,
        updateResultado,
        setResultado,
        setFc,
        fc,
        updateFc

      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  const context = useContext(GeneralContext);
  if (context === undefined) {
    throw new Error("useGeneralContext must be used within a GeneralContext");
  }
  return context;
};