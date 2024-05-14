"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import One from '@/components/icons/One';
import CardProyect from '@/components/CardProyect';


function page() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" pt-16 "
      >
        <div className="w-[80%] mx-auto mt-8">
          <Alert>
            <One />
            <AlertTitle>Importante!</AlertTitle>
            <AlertDescription>
              Explora una selección de proyectos que abarcan desde aplicaciones
              web hasta landing pages, todos ellos creados por mí y exhibidos en
              esta sección. Para descubrir aún más de mis trabajos, te invito a
              visitar mi perfil en GitHub, donde encontrarás una amplia variedad
              de proyectos adicionales.
            </AlertDescription>
          </Alert>
        </div>
        <div className="w-[80%] mx-auto text-center items-center grid grid-cols-3 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 justify-center mt-4 mb-8 ">
          <CardProyect
            title="01-. Speed Structural"
            description="Speed Structural,tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico."
            url="https://speed-structuralv2.vercel.app/dashboard/metrado"
          />
          <CardProyect
            title="02-. Speed Concrete"
            description="Speed Structural,tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico."
            url="/proyectos/speed-concrete"
          />
          <CardProyect
            title="03.Resultado"
            description="Obten el costo total de tu proyecto"
          />
          <CardProyect
            title="03.Resultado"
            description="Obten el costo total de tu proyecto"
          />
          <CardProyect
            title="03.Resultado"
            description="Obten el costo total de tu proyecto"
          />
          <CardProyect
            title="03.Resultado"
            description="Obten el costo total de tu proyecto"
          />
          <CardProyect
            title="03.Resultado"
            description="Obten el costo total de tu proyecto"
          />
          <CardProyect
            title="03.Resultado"
            description="Obten el costo total de tu proyecto"
          />
          <CardProyect
            title="03.Resultado"
            description="Obten el costo total de tu proyecto"
          />
        </div>
      </motion.div>
    </>
  );
}

export default page