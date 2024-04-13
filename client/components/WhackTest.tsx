import { useEffect, useState } from 'react'

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
    'Lets exploit our synergies to manipulate scalability and induce unsettling shifts in our market approach.',
    'We need to think beyond conventional bounds and concoct eerie solutions to maintain dominance in this ominously shifting landscape',
    'Its imperative that we streamline our processes and adopt a sinister, all-encompassing approach to maximize efficiency and eradicate any trace of autonomy.',
    'We must cultivate a culture of innovation that borders on obsession, coercing our teams to embrace a relentless pursuit of progress, even at the cost of their sanity.',
    'Our key performance indicators ominously point towards a need for agile pivots to navigate through the shadows, reshaping our strategic roadmap to exploit emerging vulnerabilities with chilling precision.',
  ]

  const normal = [
    'Lets leverage our synergies to optimize scalability and drive impactful paradigm shifts in our market approach.',
    'We need to think outside the box and ideate disruptive solutions to stay ahead of the curve in this rapidly evolving landscape.',
    'Its imperative that we streamline our processes and adopt a holistic, 360-degree approach to maximize efficiency and minimize redundancies',
    'We must cultivate a culture of innovation and empower our teams to embrace agility, fostering a dynamic environment conducive to breakthroughs.',
    'Our key performance indicators indicate a need for agile pivots to realign our strategic roadmap and capture emerging opportunities with precision timing.',
  ]

  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false)
  const [five, setFive] = useState(false)

  function randomNumber(max: number): number {
    return Math.floor(Math.random() * max)
  }

  function changeSentence() {
    const index = randomNumber(paragraph.length - 1)
    paragraph[index].sentence = unsettle[index]
  }

  function handleClick(clicked) {
    console.log(clicked.sentence)
    const indexToRevert = paragraph.findIndex(
      ({ sentence }) => sentence === clicked.sentence,
    )
    console.log(indexToRevert)

    if (indexToRevert === -1) {
      changeSentence()
    }
    console.log(paragraph[indexToRevert].sentence)
    console.log(unsettle[indexToRevert])

    paragraph[indexToRevert].sentence = normal[indexToRevert]
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will be called every 5 seconds')
      changeSentence()
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <p style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sansserif' }}>
        {paragraph.map((sentence) => (
          <span key={sentence.id} onClick={() => handleClick(sentence)}>
            {sentence.sentence}&nbsp;
          </span>
        ))}
      </p>
    </>
  )
}
