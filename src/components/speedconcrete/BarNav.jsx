import React from 'react'
import Dialogo2 from './Dialogo2'
import Dialogo from './Dialogo'
import Dialogo3 from './Dialogo3'

function BarNav() {
  return (
    <>
      <div className='flex bg-sky-700 mx-auto'>
        <Dialogo2 />
        <Dialogo />
        <Dialogo3 />
      </div>
    </>
  )
}

export default BarNav