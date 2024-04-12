import { useEffect, useState } from 'react'

// type StateType = 'healthy' | 'corrupt'
type CorruptState = 'Bad' | 'Evil' | 'Uncomfortable'

interface Sentence {
  // type: StateType
  text: string
  corruptText: CorruptState
  healthyText: string
}

const inititalGame: Array<Sentence> = [
  { text: '', corruptText: 'Bad', healthyText: 'Good 01.' },
  { text: '', corruptText: 'Evil', healthyText: 'Good 02.' },
]

function WhackAMole() {
  function randomNumber() {
    return Math.random()
  }

  const [game, setGame] = useState(inititalGame)

  useEffect(() => {
    const timer = setInterval(() => {
      const randomizedGame = game.map((sentence) => ({
        ...sentence,
        text:
          randomNumber() > 0.2 ? sentence.corruptText : sentence.healthyText,
      }))
      setGame(randomizedGame)
    }, 5000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  function cleanse(clickedSentence: Sentence) {
    setGame((game) =>
      game.map((current) => ({
        ...current,
        text:
          clickedSentence.healthyText === current.healthyText
            ? current.healthyText
            : current.text,
      })),
    )
  }

  return (
    <p>
      {game.map((sentence, idx) => (
        <span key={idx} onClick={() => cleanse(sentence)}>
          {sentence.text}&nbsp;
        </span>
      ))}
    </p>
  )
}

export default WhackAMole
