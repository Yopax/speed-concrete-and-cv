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

const claseOne = "font-sans my-1 text-gray-700 border border-solid px-4 text-center border-[#DFE3E8]  text-xs";
function Dialogo3() {
    const {

        setFc,
        resultFc,
        updateResultFc,    

      } = useGeneralContext();

    const calcularValorSumado = (fc) => {
        let valorSumado = 0;
      
        if (fc < 210) {
          valorSumado = 70;
        } else if (fc >= 210 && fc <= 350) {
          valorSumado = 84;
        } else if (fc > 350) {
          valorSumado = 98;
        }
      
        return valorSumado;
      };


        const handleSubmit = () => {
            const valorSumado = calcularValorSumado(resultFc);
            setFc(valorSumado);
            
          }


  return (
    <>
    <Dialog >
        <DialogTrigger className="flex  p-2 text-white">
          <div className='text-center items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>
            <p className='text-xs font-sans '>Resistencia</p>
            <p className='text-xs font-sans'>y cantidad</p>
          </div>
  
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Información del proyecto</DialogTitle>
            <DialogDescription>
              <div className="flex mx-auto">
                <div className="grid grid-cols-1 w-full border-r">
                  <label className="text-xs font-sans">Titulo del proyecto</label>
                  <label className="text-xs font-sans">Nombre de la organización</label>
                  <label className="text-xs font-sans">Autor del diseño</label>
                </div>
                <div className="flex-col justify-between w-full mx-auto pl-2">
                <div className='grid grid-cols-1 w-full'>
                  <input
                      className={claseOne}
                      placeholder="und"
                      value={resultFc}
                      onChange={(e) => updateResultFc(e.target.value)}
                    />
                  </div>
                  <button onClick={handleSubmit} className="w-full my-2 bg-sky-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                calcular
              </button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Dialogo3