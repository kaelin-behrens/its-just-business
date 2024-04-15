import { useState, useEffect } from 'react'

function CodeBreaker() {
  const [sequence, setSequence] = useState([])
  const [selectedNumbers, setSelectedNumbers] = useState(Array(10).fill(false))
  const [attemptCount, setAttemptCount] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [win, setWin] = useState(false)

  useEffect(() => {
    generateRandomSequence()
  }, [])

  function generateRandomSequence() {
    const numbers = Array.from({ length: 10 }, (_, index) => index)
    numbers.sort(() => Math.random() - 0.5)
    const correctNumbers = numbers.slice(0, 4)
    setSequence(correctNumbers)
    console.log('Correct numbers:', correctNumbers)
  }

  function handleNumberClick(index: number) {
    if (gameOver || selectedNumbers[index]) {
      return
    }

    const updatedSelectedNumbers = [...selectedNumbers]
    updatedSelectedNumbers[index] = true
    setSelectedNumbers(updatedSelectedNumbers)
    setAttemptCount((prev) => prev + 1)

    if (sequence.every((num) => updatedSelectedNumbers[num])) {
      setWin(true)
      setGameOver(true)
    } else if (attemptCount + 1 === 5) {
      setGameOver(true)
    }
  }

  function resetGame() {
    setSelectedNumbers(Array(10).fill(false))
    setAttemptCount(0)
    generateRandomSequence()
    setGameOver(false)
    setWin(false)
  }

  function getNumberColor(index: number) {
    if (!selectedNumbers[index]) {
      return 'black'
    }
    return sequence.includes(index) ? 'green' : 'red'
  }

  return (
    <>
      <h2>Click the numbers to solve the puzzle</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <button
            key={index}
            style={{
              width: '50px',
              height: '50px',
              margin: '5px',
              backgroundColor: getNumberColor(index),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: gameOver ? 'default' : 'pointer',
              color: 'white',
            }}
            onClick={() => handleNumberClick(index)}
            disabled={gameOver || selectedNumbers[index]}
          >
            {index}
          </button>
        ))}
      </div>
      {gameOver && (
        <>
          <div
            style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '18px' }}
          >
            {win
              ? 'Congratulations! You have completed the puzzle!'
              : 'Game Over! Try again.'}
          </div>
          <button onClick={resetGame} style={{ marginTop: '10px' }}>
            Restart Game
          </button>
        </>
      )}
    </>
  )
}

export default CodeBreaker

// function generateRandomSequence(): any {
//   throw new Error("Function not implemented.");
// }
