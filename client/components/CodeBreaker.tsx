import { useState } from 'react'

function CodeBreaker() {
  const [sequence, setSequence] = useState(generateRandomSequence())
  const [selectedNumbers, setSelectedNumbers] = useState(Array(10).fill(false))

  function generateRandomSequence() {
    const numbers = Array.from({ length: 10 }, (_, index) => index)
    return numbers.sort(() => Math.random() - 0.5)
  }
  console.log(generateRandomSequence())

  function handleNumberClick(index: number) {
    const updatedSelectedNumbers = [...selectedNumbers]
    updatedSelectedNumbers[index] = true
    setSelectedNumbers(updatedSelectedNumbers)
  }
  const selectedSequence = selectedNumbers
    .map((isSelected: any, index: string | number) =>
      isSelected ? sequence[index] : null,
    )
    .filter((number: null) => number !== null)
  const isCorrectSequence =
    JSON.stringify(selectedSequence) === JSON.stringify(sequence)
  if (isCorrectSequence) {
    alert('Congratulations! You solved the puzzle!')
    setSequence(generateRandomSequence())
    setSelectedNumbers(Array(10).fill(false))
  }

  function getNumberColor(index: number) {
    if (selectedNumbers[index]) {
      if (sequence[index] === index) {
        return 'green' // correct number
      } else if (sequence.includes(index)) {
        return 'orange' // number in the sequence but not correct
      } else {
        return 'red' // number not in the sequence
      }
    }
    return 'black'
  }
  return (
    <>
      <h2>Click the numbers to solve the puzzle</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {sequence.map((number, index) => (
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
              cursor: 'pointer',
              color: 'white',
            }}
            onClick={() => handleNumberClick(index)}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  )
}

export default CodeBreaker

// function generateRandomSequence(): any {
//   throw new Error("Function not implemented.");
// }
