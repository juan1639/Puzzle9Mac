import { useState, useEffect } from 'react'
import { Casilla } from './components/casilla.jsx'
import { Resuelto } from './components/resuelto.jsx'
import { arrayValores, arrayVecinos } from './logic/constants2.js'
import './App.css'
import confetti from 'canvas-confetti'

console.log({arrayValores}, {arrayVecinos})

function App() {

  const [board, setBoard] = useState(() => {
    return arrayValores
  })

  const [resuelto, setResuelto] = useState(false)

  // useEffect(() => {
  //   console.log('Puzzle RESUELTO!')
  // }, [resuelto])

  let vacia = 'casilla'

  const checkVecinos = (index) => {
    if (resuelto) return

    const newBoard = [...board]
    const vecinos = arrayVecinos[index]

    for (const check of vecinos) {

      if (newBoard[check] === 9) {
        const casillaClickada = newBoard[index]
        newBoard[index] = newBoard[check]
        newBoard[check] = casillaClickada
        setBoard(newBoard)

        let checkResuelto = newBoard.every((item, index) => item === index + 1)
        if (checkResuelto) confetti()
        console.log(checkResuelto)
        setResuelto(checkResuelto)
        return
      } 
    }
  }

  const resetGame = () => {
    setBoard(arrayValores)
    setResuelto(false)
  }

  return (
    <main className='main'>
      <button onClick={resetGame} className='resetGame'>Reset Game</button>
      <section className='board'>
        {
          board.map((item, index) => {

            item === 9 ? vacia = 'casillaVacia' : vacia = 'casilla'

            return (
              <Casilla 
                key={index}
                index={index}
                valor={item}
                vacia={vacia}
                checkVecinos={checkVecinos}>
                {item}
              </Casilla>
            )
          })
        }
      </section>

      <Resuelto estilo='casillaResuelto' resuelto={resuelto}>ENHORABUENA! Puzzle Resuelto</Resuelto>

    </main>
  )
}

export default App
