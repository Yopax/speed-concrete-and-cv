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

const claseOne = "font-sans my-1 text-gray-700 border border-solid px-4 text-center border-[#DFE3E8]  text-xs";
  
function Dialogo2() {
  const {
    inputValue1,
    inputValue2,
    inputTitleProyect,
    updateInputTitleProyect,
    updateInputValue1,
    updateInputValue2,
  } = useGeneralContext();

  
  return (
    <>
      <Dialog >
        <DialogTrigger className="flex  p-2 text-white">
          <div className='text-center items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>
            <p className='text-xs font-sans '>Configuración</p>
            <p className='text-xs font-sans'>del proyecto</p>
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
                      value={inputTitleProyect}
                      onChange={(e) => updateInputTitleProyect(e.target.value)}
                    />
                    <input
                      className={claseOne}
                      placeholder="und"
                      value={inputValue1}
                      onChange={(e) => updateInputValue1(e.target.value)}
                    />
                    
                    <input
                      className={claseOne}
                      placeholder="und"
                      value={inputValue2}
                      onChange={(e) => updateInputValue2(e.target.value)}
                    />
                  </div>
                  
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Dialogo2