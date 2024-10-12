const TURNS = {
  X: 'x',
  O: 'o'
}

const board = Array(9).fill(null)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className = 'board'>
      <h1>3 en Linea</h1>
      <section className = "game"/> 
      {
        board.map()
      }
    </main>
    </>
  )
}

export default App
