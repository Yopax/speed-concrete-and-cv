"use client"
import React from 'react'
import { useGeneralContext } from '@/app/context/GeneralContext';
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
    <Table >
        <TableHeader>
          <TableRow>
            <TableHead>Tipos de construcción</TableHead>
            <TableHead>A-maximo (pulg)</TableHead>
            <TableHead>A-minimo (pulg)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Zapatas y muros de cimentación reforzados</TableCell>
            <TableCell>3</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Zapatas, cajones y muros de subestructura sin refuerzo
            </TableCell>
            <TableCell>3</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Muros y vigas reforzados</TableCell>
            <TableCell>4</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Columnas</TableCell>
            <TableCell>4</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pavimentos y losas</TableCell>
            <TableCell>3</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Concreto en masa</TableCell>
            <TableCell>3</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default TableOne