"use client"
import React from 'react'
import { useGeneralContext } from '@/app/context/GeneralContext';

function Resultado() {
    const {
        inputValue1,
        inputValue2,
        inputTitleProyect,
        resultado,
        resultFc
      } = useGeneralContext();
  return (
    <>
      <div className="w-[80%] mx-auto mt-4 justify-center text-center">
        <h2 className="text-xl font-bold">{inputTitleProyect}</h2>
        <h2 className="text-sm font-semibold">{inputValue1}</h2>
        <h3 className="text-xs">{inputValue2}</h3>
      </div>
      <div className="font-sans text-xs w-[80%] mx-auto mt-10 justify-center">
        <h2 className='font-semibold'>1. Cantidad de agua</h2>
        <p>volumen de agua: {resultado} m3</p>
        <h2 className='font-semibold'>2. Resistencia y cantidad de cemento</h2>
        <p>Resistencia: {resultFc} kg/cm2</p>
        
      </div>
    </>
  );
}

export default Resultado