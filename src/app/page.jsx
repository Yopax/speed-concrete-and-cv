import { ModeToggle } from '@/components/ButtonDarkMode'
import Intro from '@/components/Inicio/Intro'
import NavBar from '@/components/NavBar'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import React from 'react'
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'



function page() {
  return (
    <>
      <div className="flex max-sm:flex-col w-[80%] mx-auto mt-[160px] max-sm:mt-[90px] space-x-8 max-sm:space-x-0 ">
        <div className=" w-1/2 max-sm:w-full ">
          <h1 className="text-5xl text-sky-700 dark:text-white font-bold max-sm:font-semibold max-sm:text-center">
            Engineer Civil - Web developer
          </h1>
          <div className="flex space-x-2 max-sm:justify-center">
            <Badge className="mt-4" variant="outline">
              JavaScript
            </Badge>
            <Badge className="mt-4" variant="outline">
              NextJS
            </Badge>
            <Badge className="mt-4" variant="outline">
              Tailwind CSS
            </Badge>
          </div>
          <p className="max-sm:text-sm py-8 max-sm:py-2 max-sm:text-center">
            Ingeniero Civil con más de 2 años de experiencia en gestión de
            proyectos y Desarrollador web Frontend Full Stack, Certificado en la
            metodología de gestión de proyectos Lean Construction por la Cámara
            Peruana de la Construcción.
          </p>
          <div className="flex space-x-3 max-sm:justify-center ">
            <Button>
              <Link href="/proyectos">Ver Proyectos</Link>
            </Button>
            <Button>
              <Link href="/proyectos">Descargar CV</Link>
            </Button>
          </div>
        </div>
        <div className="w-1/2 max-sm:w-full px-6 max-sm:mt-6">
          <Intro />{" "}
        </div>
      </div>
    </>
  );
}

export default page