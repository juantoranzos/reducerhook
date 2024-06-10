import React from 'react'

export const TareasList = ({tareas, handleDelete}) => {
  return (
    <>
    <ul className='list-group'>
        {
            tareas.map(tarea => (
                <li className='list-group-item d-flex justify-content-between' key={tarea.id}>
                   <span className='align-self-center'>
                    {tarea.descripcion}
                    </span> 
                    <button onClick={() => handleDelete(tarea.id)} className='btn btn-danger'>Borrar</button>
                </li>
            ))
        }
    </ul>
    </>
  )
}
