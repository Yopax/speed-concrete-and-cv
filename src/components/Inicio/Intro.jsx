import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

function Intro() {
  // Array de imágenes para las tarjetas
  const images = [
    "https://i.imgur.com/4n7ZrbH.png",
    "https://i.imgur.com/4n7ZrbH.png",
    "https://i.imgur.com/4n7ZrbH.png",
    "uhttps://i.imgur.com/4n7ZrbH.png",
    "https://i.imgur.com/4n7ZrbH.png",
  ];

  // Array de contenido personalizado para las tarjetas
  const customContent = [
    {
      title: "Speed Structural",
      description:
        "Speed Structural,tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico.",
      buttonText: "Ir a la aplicación",
    },
    {
      title: "Speed Concrete",
      description: "Descripción 2",
      buttonText: "Ir a la aplicación",
    },
    {
      title: "Título 3",
      description: "Descripción 3",
      buttonText: "Ir a la aplicación",
    },
    {
      title: "Título 4",
      description: "Descripción 4",
      buttonText: "Ir a la aplicación",
    },
    {
      title: "Título 5",
      description: "Descripción 5",
      buttonText: "Ir a la aplicación",
    },
    // Agrega aquí más contenido personalizado para cada tarjeta
  ];

  return (
    <>
      <Carousel className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 ">
                <p className="text-xs pb-2 font-medium ">Proyecto de elaboración propia.</p>
                <Card>
                  <CardContent
                    className="relative  flex flex-col aspect-square items-center justify-center p-6 rounded-md "
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)", // Color de fondo con opacidad
                      backgroundBlendMode: "multiply", // Mezcla de fondo para que la opacidad solo afecte a la imagen
                      backgroundImage: `url(${images[index]})`, // Imagen de fondo
                      backgroundSize: "cover", // Ajuste de tamaño de la imagen
                      backgroundPosition: "center", // Posición de la imagen
                    }}
                  >
                    {/* Contenido personalizado */}
                    <div className="text-white">
                      <h2 className="text-2xl font-semibold pb-4 ">
                        {customContent[index].title}
                      </h2>
                      <p className="text-sm  bg-opacity-50 ">
                        {customContent[index].description}
                      </p>
                      {/* Botón */}
                      <Button variant="secondary" className="mt-4">
                        {customContent[index].buttonText}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default Intro;
