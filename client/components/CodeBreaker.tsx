import { useEffect, useState } from 'react'

function shuffle(array) {
  let currentIndex = array.length
  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

function CodeBreaker(props) {
  const [sequence, setSequence] = useState([0])
  const numbers = Array.from({ length: 10 }, (_, index) => index)
  const [selectedNumbers, setSelectedNumbers] = useState([1])
  const [roundOver, setRoundOver] = useState(false)
  const [image, setImage] = useState(true)

  const [red, setRed] = useState([])
  const [yellow, setYellow] = useState([])
  const [green, setGreen] = useState([])

  const [win, setWin] = useState(false)
  const fragment = props.clues[0]

  useEffect(() => {
    initializeGame()
  }, [])

  function img() {
    setImage(false)
  }

  function initializeGame() {
    const shuffledNumbers = shuffle(numbers)
    setSequence(shuffledNumbers.slice(0, 4))
    console.log(shuffledNumbers.slice(0, 4))
    setSelectedNumbers([])
  }

  function handleNumberClick(e) {
    if (selectedNumbers.length == 4) {
      setSelectedNumbers([])
      const updatedSelect = [Number(e.target.value)]
      setSelectedNumbers(updatedSelect)
    } else {
      const updatedSelect = [...selectedNumbers, Number(e.target.value)]
      setSelectedNumbers(updatedSelect)
    }
    if (selectedNumbers.length == 3) {
      setRoundOver(true)
    }
  }

  function checkSequence(selection: number[]) {
    console.log(sequence.toString())
    console.log(selection.toString())
    if (sequence.toString() == selection.toString()) {
      return true
    } else {
      return false
    }
  }

  function getNumberColor() {
    const newRed = [...red]
    const newYellow = [...yellow]
    const newGreen = [...green]
    selectedNumbers.map((item, index) => {
      if (item === sequence[index]) {
        if (newYellow.includes(item)) {
          const i = newYellow.indexOf(item)
          newYellow.splice(i)
        }
        if (!newGreen.includes(item)) {
          newGreen.push(item)
        }
      } else if (sequence.includes(item)) {
        if (newGreen.includes(item)) {
          const i = newGreen.indexOf(item)
          newGreen.splice(i)
        }
        if (!newYellow.includes(item)) {
          newYellow.push(item)
        }
      } else if (!newRed.includes(item)) {
        newRed.push(item)
      }
    })
    setGreen(newGreen)
    setYellow(newYellow)
    setRed(newRed)
  }

  {
    win && <p>Password clue: {fragment}</p>
  }

  if (roundOver) {
    if (checkSequence(selectedNumbers)) {
      getNumberColor()
      setTimeout(function () {
        setWin(true)
      }, 500)
      setRoundOver(false)
      console.log('complete')
    } else {
      getNumberColor()
      setRoundOver(false)
    }
  }

  return (
    <>
      {image && (
        <button onClick={img}>
          {' '}
          <img
            className="fakeimage"
            src="../../public/stock photography 7.webp"
            alt="group of people doing business"
          />
        </button>
      )}
      {!image && !win && (
        <>
          {numbers.map((item, index) => (
            <button
              key={index}
              value={item}
              className={
                red.includes(item)
                  ? 'codered'
                  : yellow.includes(item)
                    ? 'codeyellow'
                    : green.includes(item)
                      ? 'codegreen'
                      : 'nope'
              }
              onClick={handleNumberClick}
            >
              {item}
            </button>
          ))}
          <h3>
            {selectedNumbers.map((item, index) => (
              <span key={index}> {item} </span>
            ))}
          </h3>
          {/* <h1>Red {red.map((item, index) => <span key={index}> {item} </span>)}</h1>
    <h1>Yellow {yellow.map((item, index) => <span key={index}> {item} </span>)}</h1>
    <h1>Green {green.map((item, index) => <span key={index}> {item} </span>)}</h1>  */}
        </>
      )}
      {win && <p>Password clue: {fragment}</p>}
    </>
  )
}

export default CodeBreaker
