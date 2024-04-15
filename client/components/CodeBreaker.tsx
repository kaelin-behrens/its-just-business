import { useState, useEffect } from 'react'

function CodeBreaker() {
  const [sequence, setSequence] = useState([])
  const [selectedNumbers, setSelectedNumbers] = useState(Array(10).fill(false))
  const [attemptCount, setAttemptCount] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [win, setWin] = useState(false)

  useEffect(() => {
    initializeGame() // This initializes the game when the component mounts
  }, [])

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]] // Swap elements
    }
    return array
  }

  function initializeGame() {
    const numbers = Array.from({ length: 10 }, (_, index) => index)
    const shuffledNumbers = shuffleArray(numbers)
    console.log('Shuffled numbers:', shuffledNumbers) // Log the full shuffled array
    setSequence(shuffledNumbers.slice(0, 4))
    console.log('Correct numbers:', shuffledNumbers.slice(0, 4)) // Log the selected correct numbers

    // Reset other states for a new game
    setSelectedNumbers(Array(10).fill(false))
    setAttemptCount(0)
    setGameOver(false)
    setWin(false)
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
    initializeGame()
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
