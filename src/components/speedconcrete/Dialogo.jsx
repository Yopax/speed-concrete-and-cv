"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { useGeneralContext } from '@/app/context/GeneralContext';
import { useState } from 'react';

const claseOne = "text-gray-700 dark:text-white border border-solid text-center border-[#DFE3E8]  w-[120px] text-sm py-1";
  

function Dialogo() {
  const [fila, setFila] = useState(null);
  const [columna, setColumna] = useState(null);
  const {inputValue1,inputValue2,updateInputValue1,updateInputValue2,resultado,setResultado} = useGeneralContext();

  const filaOptions = { 0: "1-2", 1: "3-4", 2: "6-7" };
  const columnaOptions = { 0: "3/8”", 1: "½”", 2: "¾”", 3: "1”", 4: "1 ½”", 5: "2”", 6: "3”", 7: "6”" };

  const datosTabla = [
    [207, 199, 190, 179, 166, 154, 130, 113],
    [228, 216, 205, 193, 181, 169, 145, 124],
    [243, 228, 216, 202, 190, 178, 160, null]
  ];

  const buscarValor = (fila, columna) => {
    if (fila !== null && columna !== null &&
        fila >= 0 && fila < datosTabla.length &&
        columna >= 0 && columna < datosTabla[0].length) {
      return datosTabla[fila][columna];
    } else {
      return null;
    }
  };

  const handleSubmit = () => {
    const valorObtenido = buscarValor(fila, columna);
    setResultado(valorObtenido/1000);
  };
  return (
    <>
      <Dialog>
        <DialogTrigger className="flex p-2 text-white">
        <div className='text-center items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>
            <p className='text-xs font-sans'>Volumen</p>
            <p className='text-xs font-sans'>de agua</p>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Calculo del volumen agua</DialogTitle>
            <DialogDescription>
              <div className="flex mx-auto">
                <div className="grid grid-cols-1 w-full border-r">
                  <label className='text-xs font-sans' >Selección del asentamiento</label>
                  <label className='text-xs font-sans' >TMN del agregado</label>
                </div>
                <div className="flex-col justify-between w-full mx-auto pl-2">
                  <div className='grid grid-cols-1 w-full'>
                    <select
                      value={fila === null ? '' : fila}
                      onChange={(e) => setFila(parseInt(e.target.value))}
                      className={claseOne}
                    >
                      <option value="">Selecciona</option>
                      {Object.entries(filaOptions).map(([index, label]) => (
                        <option key={index} value={index}>{label}</option>
                      ))}
                    </select>
                    <select
                      value={columna === null ? '' : columna}
                      onChange={(e) => setColumna(parseInt(e.target.value))}
                      className={claseOne}
                    >
                      <option value="">Selecciona</option>
                      {Object.entries(columnaOptions).map(([index, label]) => (
                        <option key={index} value={index}>{label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <button onClick={handleSubmit} className="w-full my-2 bg-sky-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Buscar
              </button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Dialogo