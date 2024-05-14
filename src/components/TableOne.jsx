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
  

function TableOne() {
  return (
    <>
      <Table>
        <TableCaption>Tabla 1.1 Concreto según el tamaño máximo de su agregado.</TableCaption>
        <TableCaption>Fuente: Adaptado de Asocreto 2011.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Tipo de concreto</TableHead>
            <TableHead>Tamaño máximo (mm)</TableHead>
            <TableHead>Uso</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>De grava fina</TableCell>
            <TableCell>4,75-19</TableCell>
            <TableCell>Columnas, muros, elementos esbeltos.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>De grava común</TableCell>
            <TableCell>19-37,5</TableCell>
            <TableCell>Estructuras convencionales.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>De grava gruesa</TableCell>
            <TableCell>37,5-150</TableCell>
            <TableCell>Pavimentos, presas.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ciclópeo</TableCell>
            <TableCell>mayor a 150</TableCell>
            <TableCell>Cimentaciones, rellenos.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default TableOne