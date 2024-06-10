import React, { useState } from 'react'

export const TareaAdd = ({handleAgregar}) => {

  const [tarea, setTarea] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      id: new Date().getTime(),
      descripcion: tarea,
    };
    handleAgregar(nuevaTarea)
  }
  return (
   <>
   <form className='me-3' onSubmit={handleSubmit}>
       <input type="text" placeholder="Escriba una tarea" className='form-control' onChange={   e => setTarea(e.target.value)  } />
       <button className='btn btn-primary m-3 px-5'>Agregar</button>
   </form>
   </>
  )
}
