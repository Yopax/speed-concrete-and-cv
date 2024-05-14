"use client"
import React from 'react'
import { ContextOneProvider } from "@/app/context/GeneralContext";
import { Badge } from '@/components/ui/badge';
import Resultado from '@/components/speedconcrete/Resultado';
import BarNav from '@/components/speedconcrete/BarNav';
import TableOne from '@/components/speedconcrete/fomrs/TableOne';
import TableTwo from '@/components/speedconcrete/fomrs/TableTwo';
import MiComponente from '@/components/speedconcrete/MiComponente';



function page() {

  return (
    <>
      <ContextOneProvider>
        <div className="flex w-[95%]  mx-auto mt-20 space-x-2  max-sm:flex-col max-sm:space-x-0 ">
          <div className=" border-sky-700 border max-sm:mt-2 w-2/3 h-[500px] max-sm:w-full">
            <BarNav />
            <div className='flex'>
              <div className='w-1/2'>
                
              </div>
              <div className='w-1/2'>
                
              </div>
            </div>
            

          </div>
          <div className=" p-2 border-sky-700 border max-sm:mt-2 w-1/3 h-[500px] max-sm:w-full">
            <Badge variant="outline">Resultados</Badge>
            <Resultado />
            
          </div>
        </div>
      </ContextOneProvider>
    </>
  );
}

export default page