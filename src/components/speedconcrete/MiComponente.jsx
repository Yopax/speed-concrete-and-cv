"use client"
import React, { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { useGeneralContext } from '@/app/context/GeneralContext';

const MiComponente = () => {
  const [fila, setFila] = useState(null);
  const [columna, setColumna] = useState(null);
  const {
    resultado,
    setResultado,
    updateResultado,
  } = useGeneralContext();

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
    setResultado(valorObtenido);
  };

  return (
    <div className="flex justify-center items-center">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Seleccionar fila y columna
            </Popover.Button>

            <Transition
              as={React.Fragment}
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Popover.Panel className="absolute z-10 bg-white border border-gray-200 p-4 rounded-md">
                <div className="flex flex-col gap-2">
                  <label>
                    Fila:
                    <select
                      value={fila === null ? '' : fila}
                      onChange={(e) => setFila(parseInt(e.target.value))}
                      className="border border-gray-300 rounded-md p-1"
                    >
                      <option value="">Seleccionar fila</option>
                      {Object.entries(filaOptions).map(([index, label]) => (
                        <option key={index} value={index}>{label}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Columna:
                    <select
                      value={columna === null ? '' : columna}
                      onChange={(e) => setColumna(parseInt(e.target.value))}
                      className="border border-gray-300 rounded-md p-1"
                    >
                      <option value="">Seleccionar columna</option>
                      {Object.entries(columnaOptions).map(([index, label]) => (
                        <option key={index} value={index}>{label}</option>
                      ))}
                    </select>
                  </label>
                  <button onClick={handleSubmit} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Buscar
                  </button>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      {resultado !== null && (
        <p className="mt-4">El valor en la intersección de la fila {filaOptions[fila]} y la columna {columnaOptions[columna]} es: {resultado}</p>
      )}
    </div>
  );
};

export default MiComponente;
