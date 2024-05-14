import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

function TablaPaso1() {
  return (
    <>
      <Table>
        <TableCaption>Tabla 2.1 Asentamientos recomendados para varios tipos de construcción.</TableCaption>
        <TableCaption>Fuente: Adaptado de ACI (2002).</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Tipos de construcción</TableHead>
            <TableHead>A-maximo (mm)</TableHead>
            <TableHead>A-minimo (mm)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Zapatas y muros de cimentación reforzados</TableCell>
            <TableCell>75</TableCell>
            <TableCell>25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Zapatas, cajones y muros de subestructura sin refuerzo
            </TableCell>
            <TableCell>75</TableCell>
            <TableCell>25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Muros y vigas reforzados</TableCell>
            <TableCell>100</TableCell>
            <TableCell>25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Columnas</TableCell>
            <TableCell>100</TableCell>
            <TableCell>25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pavimentos y losas</TableCell>
            <TableCell>75</TableCell>
            <TableCell>25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Concreto en masa</TableCell>
            <TableCell> 50</TableCell>
            <TableCell>25</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default TablaPaso1