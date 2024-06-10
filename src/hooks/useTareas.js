import { useReducer } from "react"
import { tareaReducer } from "../tareaReducer"

export const useTareas = () => {
    const [tareas, dispatch] = useReducer(tareaReducer, [])
    const handleAgregar = (tarea) => {
        const action = {
            type: 'add',
            payload: tarea
        }

        dispatch(action);
    }
    const handleDelete = (id) => {
        const action = {
            type: 'delete',
            payload: id,
    };

    dispatch(action);
    }
    return {
        tareas,
        handleAgregar,
        handleDelete,
    }
}