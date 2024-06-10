import { useReducer } from "react"
function App() {
  const valorInicial = { count: 0 }
  const reducerCounter = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
      default:

    }
  }

  const [counter, dispatch] = useReducer(reducerCounter, valorInicial)

  return (
    <>
      <h1>reducer</h1>
      <h2>{counter.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </>
  )
}

export default App
