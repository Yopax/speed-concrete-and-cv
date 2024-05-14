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
  
function TableTwo() {
  return (
    <>
      <Table>
        <TableCaption>Tabla 1.2 Concreto según su consistencia.</TableCaption>
        <TableCaption>Fuente: Adaptado de Asocreto 2011.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Tipo de consistencia</TableHead>
            <TableHead>Asentamiento (mm)</TableHead>
            <TableHead>Uso</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Muy seca</TableCell>
            <TableCell>0-20</TableCell>
            <TableCell>
              Prefabricados de alta resistencia, revestimiento de pantallas de
              cimentación.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Seca</TableCell>
            <TableCell>20-35</TableCell>
            <TableCell>Pavimentos</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Semiseca</TableCell>
            <TableCell>35-50</TableCell>
            <TableCell>Pavimentos, fundaciones en concreto simple</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Media</TableCell>
            <TableCell>50-100</TableCell>
            <TableCell>
              Pavimentos compactados a mano, losas, muros, vigas
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Húmeda o fluida</TableCell>
            <TableCell>100-150</TableCell>
            <TableCell>Elementos estructurales esbeltos</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Muy húmeda o muy fluida</TableCell>
            <TableCell> 150</TableCell>
            <TableCell>Elementos muy esbeltos, pilotes</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default TableTwo