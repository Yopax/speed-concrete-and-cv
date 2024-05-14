import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
import { badgeVariants } from "@/components/ui/badge";
import Link from 'next/link';
import { Button } from '../ui/button';
import { buttonVariants } from "@/components/ui/button"


  

function ButtonTwo() {
  return (
    <>
      <Sheet>
        <SheetTrigger className='text-xs font-bold rounded-md border px-2 hover:bg-slate-300' >
          Formulas utilizadas
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default ButtonTwo