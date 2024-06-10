import React from 'react'
import { TareaAdd } from './TareaAdd'
import { useTareas } from '../hooks/useTareas'
import { TareasList } from './TareasList'

export const TareaApp = () => {
    const { handleAgregar, tareas, handleDelete } = useTareas()
  return (
    <>
    <h1>Tareas Rolling</h1>
    <div className='row'>
        <div className='col-7'>
            <h2> Lista de Tareas</h2>
            <TareasList tareas={tareas} handleDelete={handleDelete}></TareasList>
        </div>
        <div className='col-5'>
            <h2>Agregar tarea</h2>
            <TareaAdd handleAgregar={ handleAgregar} ></TareaAdd>
        </div>

    </div>
    </>
  )
}
