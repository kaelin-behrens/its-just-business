import { useEffect, useState } from 'react'

//Make counter work on correct click
//make multiple unsettle show

export default function WhackTest() {
  const [paragraph, setParagraph] = useState([
    {
      id: 'one',
      sentence:
        'Lets leverage our synergies to optimize scalability and drive impactful paradigm shifts in our market approach.',
    },
    {
      id: 'two',
      sentence:
        'We need to think outside the box and ideate disruptive solutions to stay ahead of the curve in this rapidly evolving landscape.',
    },
    {
      id: 'three',
      sentence:
        'Its imperative that we streamline our processes and adopt a holistic, 360-degree approach to maximize efficiency and minimize redundancies.',
    },
    {
      id: 'four',
      sentence:
        'We must cultivate a culture of innovation and empower our teams to embrace agility, fostering a dynamic environment conducive to breakthroughs.',
    },
    {
      id: 'five',
      sentence:
        'Our key performance indicators indicate a need for agile pivots to realign our strategic roadmap and capture emerging opportunities with precision timing.',
    },
  ])
  const unsettle = [
    'BAD Lets exploit our synergies to manipulate scalability and induce unsettling shifts in our market approach.',
    'BAD We need to think beyond conventional bounds and concoct eerie solutions to maintain dominance in this ominously shifting landscape',
    'BAD Its imperative that we streamline our processes and adopt a sinister, all-encompassing approach to maximize efficiency and eradicate any trace of autonomy.',
    'BAD We must cultivate a culture of innovation that borders on obsession, coercing our teams to embrace a relentless pursuit of progress, even at the cost of their sanity.',
    'BAD Our key performance indicators ominously point towards a need for agile pivots to navigate through the shadows, reshaping our strategic roadmap to exploit emerging vulnerabilities with chilling precision.',
  ]

  const normal = [
    'NORMAL Lets leverage our synergies to optimize scalability and drive impactful paradigm shifts in our market approach.',
    'NORMAL We need to think outside the box and ideate disruptive solutions to stay ahead of the curve in this rapidly evolving landscape.',
    'NORMAL Its imperative that we streamline our processes and adopt a holistic, 360-degree approach to maximize efficiency and minimize redundancies',
    'NORMAL We must cultivate a culture of innovation and empower our teams to embrace agility, fostering a dynamic environment conducive to breakthroughs.',
    'NORMAL Our key performance indicators indicate a need for agile pivots to realign our strategic roadmap and capture emerging opportunities with precision timing.',
  ]

  const [count, setCount] = useState(0)
  const [colour, setColour] = useState('white')

  function randomNumber(max: number): number {
    return Math.floor(Math.random() * max) + 1
  }

  function changeSentence() {
    const index = randomNumber(paragraph.length)
    const updatedParagraph = [...paragraph]
    updatedParagraph[index] = {
      ...updatedParagraph[index],
      sentence: unsettle[index],
    }
    setParagraph(updatedParagraph)
    setColour('red')
  }

  function handleClick(clicked) {
    const indexToRevert = paragraph.findIndex(
      ({ sentence }) => sentence === clicked.sentence,
    )

    if (indexToRevert === -1) {
      changeSentence()
    }

    if (clicked.sentence == unsettle[indexToRevert]) {
      handleCount()
    }

    const updatedParagraph = [...paragraph]
    updatedParagraph[indexToRevert] = {
      ...updatedParagraph[indexToRevert],
      sentence: normal[indexToRevert],
    }

    setParagraph(updatedParagraph)
    setColour('white')
  }

  function handleCount() {
    setCount(count + 1)
    if (count === 10) {
      console.log('WIN!')
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will be called every 5 seconds')
      changeSentence()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <p>{count}</p>
      <p style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sansserif' }}>
        {paragraph.map((sentence) => (
          <span key={sentence.id} onClick={() => handleClick(sentence)}>
            <p>{sentence.sentence}&nbsp;</p>
          </span>
        ))}
      </p>
    </>
  )
}
