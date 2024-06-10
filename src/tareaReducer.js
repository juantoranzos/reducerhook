export const tareaReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'delete':
            return state.filter((tarea) => tarea.id !== action.payload)
        default:
            return state
    }
}