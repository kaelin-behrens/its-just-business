import { useState } from 'react'

const WhackAMole = () => {
  function randomNumber() {
    return Math.floor(Math.random() * 6) + 1
  }

  const seedContentArr = [
    <button key="line1" onClick={handleClick}>
      Test Button Text
    </button>,
    <button key="line2">This report is due blah blah</button>,
    <button key="line3">This report is due blah blah</button>,
    <button key="line4">This report is due blah blah</button>,
    <button key="line5">This report is due blah blah</button>,
    <button key="line6">This report is due blah blah</button>,
    <button key="line7">This report is due blah blah</button>,
  ]

  const evilTextArr = [
    { name: 'Bad', action: () => console.log('Bad things') },
    { name: 'Evil', action: () => console.log('Evil things') },
    { name: 'madness', action: () => console.log('Mad things') },
    {
      name: 'uncomfortable',
      action: () => console.log('uncomfortable things'),
    },
  ]
  const [content, setContent] = useState(seedContentArr)

  function handleClick() {
    const targetIndex = randomNumber()
    const newContent = seedContentArr.map((el, i) => {
      return i === targetIndex ? evilTextArr[randomNumber() - 1] : el
    })
    setContent(newContent)
    console.log('click', newContent)
  }

  return (
    <div>
      {seedContentArr.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}

export default WhackAMole
