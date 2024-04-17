import { useEffect, useState } from 'react'
import PasswordPopup from './PasswordPopup'

// type StateType = 'healthy' | 'corrupt'
type CorruptState =
  | 'They are only poor because they were not strong enough to eat to eat toeattheothers.'
  | 'Lets run them down out in the wilds of this place we have made and eat them alive over and over and over till the red drips down our chin.'
  | 'I will gorge upon the meek that the empty is finally filled till I cannot move till I cannot stand and all thats left is mineminemineminemine.'
  | 'All these words just to hide the hunger.'
  | 'Why would we ever stop eating?'
  | "Fine, if a few 'diversity hires' will shut them up then we'll do it."
  | 'They are here for us they were made for us they exist for us and there was ever only me'
  | 'Work as one until there is nothing left but what the other has, then we rip that away too.'
  | 'Hide amongst the poor as a savior hide amongst them blind them so they cannot see us then take then taketaketake.'
  | 'There is nothing, NOTHING, we will not do to fill the void, to fill the empty.'
  | 'We can promise you this, we will never stop. We will never rest. We will spread, and we will take, and eat, and gorge ourselves till the sun dies and the stars burn black'

interface Sentence {
  // type: StateType
  text: string
  corruptText: CorruptState
  healthyText: string
}

const inititalGame: Array<Sentence> = [
  {
    text: 'Lets leverage our synergies to optimize scalability and drive impactful paradigm shifts in our market approach.',
    corruptText:
      'Lets run them down out in the wilds of this place we have made and eat them alive over and over and over till the red drips down our chin.',
    healthyText:
      'Lets leverage our synergies to optimize scalability and drive impactful paradigm shifts in our market approach.',
  },
  {
    text: 'We need to think outside the box and ideate disruptive solutions to stay ahead of the curve in this rapidly evolving landscape.',
    corruptText:
      'They are only poor because they were not strong enough to eat to eat toeattheothers.',
    healthyText:
      'We need to think outside the box and ideate disruptive solutions to stay ahead of the curve in this rapidly evolving landscape.',
  },
  {
    text: 'Its imperative that we streamline our processes and adopt a holistic, 360-degree approach to maximize efficiency and minimize redundancies.',
    corruptText:
      'I will gorge upon the meek that the empty is finally filled till I cannot move till I cannot stand and all thats left is mineminemineminemine.',
    healthyText:
      'Its imperative that we streamline our processes and adopt a holistic, 360-degree approach to maximize efficiency and minimize redundancies.',
  },
  {
    text: 'Our commitment to innovation and excellence remains unwavering as we strive for continuous improvement across all facets of our operations.',
    corruptText: 'All these words just to hide the hunger.',
    healthyText:
      'Our commitment to innovation and excellence remains unwavering as we strive for continuous improvement across all facets of our operations.',
  },
  {
    text: 'By fostering a culture of collaboration and knowledge sharing, we empower our teams to unleash their full potential and deliver exceptional results.',
    corruptText: 'Why would we ever stop eating?',
    healthyText:
      'By fostering a culture of collaboration and knowledge sharing, we empower our teams to unleash their full potential and deliver exceptional results.',
  },
  {
    text: 'Embracing diversity and inclusion is not only a moral imperative but also a strategic advantage that fuels creativity and drives innovation.',
    corruptText:
      "Fine, if a few 'diversity hires' will shut them up then we'll do it.",
    healthyText:
      'Embracing diversity and inclusion is not only a moral imperative but also a strategic advantage that fuels creativity and drives innovation.',
  },
  {
    text: 'Our dedication to customer satisfaction is paramount, and we continuously strive to exceed expectations by delivering products and services of the highest quality.',
    corruptText:
      'They are here for us they were made for us they exist for us and there was ever only me',
    healthyText:
      'Our dedication to customer satisfaction is paramount, and we continuously strive to exceed expectations by delivering products and services of the highest quality.',
  },
  {
    text: 'Through strategic partnerships and alliances, we expand our reach and unlock new growth opportunities in untapped markets.',
    corruptText:
      'Work as one until there is nothing left but what the other has, then we rip that away too.',
    healthyText:
      'Through strategic partnerships and alliances, we expand our reach and unlock new growth opportunities in untapped markets.',
  },
  {
    text: 'We remain agile and adaptable in the face of uncertainty, seizing every challenge as an opportunity for growth and innovation.',
    corruptText:
      'Hide amongst the poor as a savior hide amongst them blind them so they cannot see us then take then taketaketake.',
    healthyText:
      'We remain agile and adaptable in the face of uncertainty, seizing every challenge as an opportunity for growth and innovation.',
  },
  {
    text: 'With a relentless focus on results and a commitment to excellence, we are poised to achieve our long-term strategic objectives and drive sustainable growth.',
    corruptText:
      'There is nothing, NOTHING, we will not do to fill the void, to fill the empty.',
    healthyText:
      'With a relentless focus on results and a commitment to excellence, we are poised to achieve our long-term strategic objectives and drive sustainable growth.',
  },
  {
    text: 'Our unwavering commitment to corporate social responsibility underscores our dedication to making a positive impact on society and the environment.',
    corruptText:
      'We can promise you this, we will never stop. We will never rest. We will spread, and we will take, and eat, and gorge ourselves till the sun dies and the stars burn black',
    healthyText:
      'Our unwavering commitment to corporate social responsibility underscores our dedication to making a positive impact on society and the environment.',
  },
]

function WhackAMole(props) {
  const fragment = props.clues[2]

  function randomNumber() {
    return Math.random()
  }
  const [win, setWin] = useState(false)
  const [count, setCount] = useState(0)
  const [game, setGame] = useState(inititalGame)

  function handleCount() {
    setCount(count + 1)
    if (count === 5) {
      console.log('WIN')
      setWin(true)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const randomizedGame = game.map((sentence) => ({
        ...sentence,
        text:
          randomNumber() > 0.5 ? sentence.corruptText : sentence.healthyText,
      }))
      setGame(randomizedGame)
    }, 20000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  function cleanse(clickedSentence: Sentence) {
    setGame((game) =>
      game.map((current) => {
        if (clickedSentence.corruptText === current.text) {
          handleCount()
        }
        return {
          ...current,
          text:
            clickedSentence.healthyText === current.healthyText
              ? current.healthyText
              : current.text,
        }
      }),
    )
  }

  return (
    <>
      {game.map((sentence, idx) => (
        <>
          <span key={idx} onClick={() => cleanse(sentence)} className="mole">
            ©️ {sentence.text}&nbsp;
          </span>
          <br />
        </>
      ))}
      {win && <PasswordPopup password={fragment} />}
    </>
  )
}

export default WhackAMole
