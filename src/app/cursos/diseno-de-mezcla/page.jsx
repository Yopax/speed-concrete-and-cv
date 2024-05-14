import React from 'react'
import { Badge } from '@/components/ui/badge';
import ButtonTwo from '@/components/buttons/ButtonTwo';
import TableOne from '@/components/TableOne';
import TableTwo from '@/components/TableTwo';
import TablaPaso1 from '@/components/tablasproc/TablaPaso1';

function page() {
  return (
    <>
      <div className="flex w-[60%] max-sm:w-[80%]  mx-auto mt-20 mb-10 space-x-2  max-sm:flex-col max-sm:space-x-0 ">
        <div className="rounded py-8 px-14 max-sm:px-2 border-sky-700 border max-sm:mt-2 w-full  max-sm:w-full">
          <div className="flex justify-between p-4 max-sm:flex-col max-sm:space-y-2 max-sm:text-center">
            <Badge variant="outline">
              Diseño de mezclas de concreto aplicando el método ACI
            </Badge>
            <ButtonTwo />
          </div>
          <div className="flex-col  justify-between p-4 max-sm:flex-col max-sm:space-y-2 max-sm:text-center">
            <div>
              <h2 className="font-bold">Capitulo 2</h2>
              <h2 className="font-medium text-sm">
                Aspectos generales del diseño de mezclas
              </h2>
              <p className="text-xs  text-justify max-sm:text-xs py-2">
                El diseño de mezclas es el proceso de selección de los
                materiales y sus proporciones para la producción del concreto
                según los requerimientos de resistencia, costos, peso,
                durabilidad y apariencia de acabados. En cuanto a cantidades y
                proporciones, Asocreto (2011) afirrma que el cemento ocupa entre
                un 7% y 15% del volumen de la mezcla, proveyendo eficientemente
                propiedades de adherencia y cohesión; asimismo, los agregados,
                esencialmente grava y arena, ocupan entre el 59% y 76% del
                volumen. El agua, necesaria para la hidratación del cemento
                ocupa entre el 14% y 18% del volumen; y, por último, el aire
                atrapado en las mezclas varía entre el 1% y 3%. El Instituto
                Americano del Concreto, ACI por sus siglas en inglés, a través
                de la norma ACI 211.1 describe dos métodos para seleccionar y
                ajustar las proporciones para concreto de peso y masa normal. El
                primer método se basa en un peso estimado de concreto por unidad
                de volumen; el segundo se basa en los cálculos de volumen
                absoluto ocupado por los componentes del concreto. Los
                procedimientos consideran requisitos como manejabilidad,
                consistencia, resistencia y durabilidad.
              </p>
              <h2 className="font-medium text-sm">
                Requisitos para mezclas de concretos
              </h2>
              <h2 className="font-bold text-xs">Manejabilidad</h2>
              <p className="text-xs  text-justify max-sm:text-xs py-2">
                La manejabilidad del concreto abarca rasgos de trabajabilidad y
                consistencia; la trabajabilidad es la capacidad del concreto de
                ser colocado y consolidado correctamente sin segregación
                superficial, teniendo en cuenta conceptos como capacidad de
                moldeo, cohesión y compactabilidad. La manejabilidad está
                determinada por: granulometría, forma de las partículas y las
                proporciones de agregado; la presencia de aire y aditivos
                químicos; y la consistencia de la mezcla.
              </p>

              <h2 className="font-bold text-xs">Consistencia</h2>
              <p className="text-xs  text-justify max-sm:text-xs py-2">
                Definida como la movilidad relativa de la mezcla de concreto, la
                cual se mide en términos de asentamiento, se relaciona con la
                trabajabilidad. Un asentamiento dado depende del requerimiento
                de agua, que aumenta a medida que los agregados son más
                angulares y rugosos, y disminuye con el máximo tamaño de
                agregados bien gradados.
              </p>

              <h2 className="font-bold text-xs">Resistencia</h2>
              <p className="text-xs  text-justify max-sm:text-xs py-2">
                Aunque la resistencia es una importante característica del
                concreto, otras características como la durabilidad,
                permeabilidad y resistencia al desgaste son igual de
                importantes. La resistencia, a la edad de 28 días, es tomada con
                frecuencia como un parámetro de diseño estructural, dosificación
                y evaluación del concreto.
              </p>

              <h2 className="font-bold text-xs">Relación agua-cemento</h2>
              <p className="text-xs  text-justify max-sm:text-xs py-2">
                Se define como a/c y para un determinado conjunto de materiales
                y condiciones, la resistencia del concreto es determinada por la
                cantidad neta de agua usada por cantidad de cemento; esta no
                toma en cuenta la absorción de los agregados. Las diferencias
                para una determinada relación a/c resultan del tamaño del
                agregado, gradación, textura, forma, resistencia y rigidez de
                las partículas; diferencias en los tipos de cemento y fuentes;
                contenido de aire y aditivos que afecten el proceso de
                hidratación.
              </p>

              <h2 className="font-bold text-xs">Durabilidad</h2>
              <p className="text-xs  text-justify max-sm:text-xs py-2">
                El concreto debe ser capaz de soportar las condiciones de
                exposición a las que esté sometido (congelamiento, deshielo,
                calentamiento y otros agentes de su entorno).
              </p>
              <h2 className="font-bold text-xs">Densidad</h2>
              <p className="text-xs  text-justify max-sm:text-xs py-2">
                Para ciertas aplicaciones, el concreto puede ser usado por sus
                características de peso.
              </p>
              <h2 className="font-bold text-sm">
                Datos base para el diseño de mezclas
              </h2>
              <p className="text-xs  text-justify max-sm:text-xs py-2">
                En lo posible, las selecciones de proporciones de concreto se
                deben basar en datos de las experiencias con los materiales a
                utilizar en mezclas, pero cuando la información sea muy poca o
                no exista, la ACI 211.1 es una guía que puede ser utilizada.
              </p>

              <p className="text-xs  text-justify max-sm:text-xs py-2">
                La información necesaria de los materiales disponibles puede
                ser:
              </p>
              <ul className="text-xs">
                <li>-Análisis granulométricos de los agregados.</li>
                <li>-Peso unitario del agregado grueso.</li>
                <li>-Densidad aparente y absorción de los agregados.</li>
                <li>-Requerimientos agua-mezcla en base a los agregados.</li>
                <li>-Relaciones a/c.</li>
                <li>-Densidad de materiales cementantes.</li>
                <li>
                  -Combinaciones óptimas de agregados para satisfacer la
                  densidad del concreto.
                </li>
              </ul>
              <h2 className="font-bold text-sm">
                Procedimientos para el diseño de mezclas
              </h2>
              <p className="text-xs  text-justify max-sm:text-xs py-2">
                A través de la guía ACI 211.1, el Instituto Americano del
                Concreto establece una serie de pasos lógicos y directos para
                diseñar mezclas de concreto, con especificaciones que abarcan
                variables como la relación a/c, mínimo contenido de cemento,
                contenido de aire, asentamiento, máximo tamaño del agregado,
                resistencia y otras propiedades relacionadas con el material
                cementante, aditivos y agregados. Estos pasos se enuncian a
                continuación:
              </p>
              <h3 className="text-xs font-bold">
                Paso 1. Selección de asentamiento
              </h3>
              <p className="text-xs  text-justify max-sm:text-xs py-2">
                Si el asentamiento no es especificado, un valor apropiado puede
                ser seleccionado a partir de la tabla 2.1.
              </p>
              <TablaPaso1 />
              <h3 className="text-xs font-bold">
                Paso 2. Selección del tamaño máximo del agregado
              </h3>
              <p className="text-xs  text-justify max-sm:text-xs py-2">
                Los grandes tamaños máximos nominales de un agregado bien
                graduado, tienen menos vacíos que los tamaños más pequeños, en
                efecto requieren menos cantidad de mortero por unidad de
                volumen. Por otra parte, mejores resultados se pueden obtener
                con la reducción de los tamaños nominales máximos para producir
                altas resistencias con una relación a/c dada. Esta selección se
                relaciona con el paso 3, en la cual se hace la estimación del
                contenido de agua y aire de la mezcla, acorde con el tamaño del
                agregado, como es explicado en la siguiente sección.
              </p>
              <h3 className="text-xs font-bold">
                Paso 3. Estimación de contenido de agua y aire en la mezcla
              </h3>
              <p className="text-xs  text-justify max-sm:text-xs py-2">
                La cantidad de agua por unidad de volumen requerida, para un
                asentamiento dado, depende del tamaño nominal máximo, forma y
                gradación de los agregados principalmente. La tabla 2.2 muestra
                la cantidad de agua estimada para mezclas de varios tamaños
                máximos de agregados sin aire contenido en la mezcla.
              </p>
              <h3 className="text-xs font-bold">
                Paso 4. lección de la relación a/c
              </h3>
              <h3 className="text-xs font-bold">
                Paso 5. Cálculo del contenido de cemento
              </h3>
              <h3 className="text-xs font-bold">
                Paso 6. Estimación del contenido de agregado grueso
              </h3>
              <h3 className="text-xs font-bold">
                Paso 7. Estimación del contenido de agregado fino
              </h3>
              <h3 className="text-xs font-bold">
                Paso 8. Ajustes por humedad de los agregados
              </h3>
              <h3 className="text-xs font-bold">
                Paso 9. Ajustes en la mezcla de prueba
              </h3>
              <h3 className="text-xs font-bold">
                Paso 10. Selección de asentamiento
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page