import React from 'react'
import View from './View'

function Viewers() {
  return (
    <div className='flex flex-col sm:flex-row mt-5  items-center h-[fit] gap-4 p-6 sm:p-0   text-white font-bold text-2xl'>
        <View bgi="disney"/>
        <View bgi="national"/>
        <View bgi="pixar"/>
        <View bgi="starwars"/>
        <View bgi="marvel"/>
    </div>
  )
}

export default Viewers