import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link';

function CardProyect({title, description,url}) {
  return (
    <>
      <div className="flex mx-2 my-2 max-sm:mx-0 flex-col border  text-white items-center justify-center  font-bold rounded-md h-80">
        <p className=" dark:text-white text-black text-sm leading-6 font-bold py-1 px-3 rounded-lg">
          {title}
        </p>
        <p className="w-2/3 text-sm font-normal my-6 text-black dark:text-white">
          {description}
        </p>
        <Button>
            <Link target="_blank" href={`${url}`}>Ver Proyecto</Link>
        </Button>

        <div className="flex flex-col text-9xl text-center items-center justify-center"></div>
      </div>
    </>
  );
}

export default CardProyect