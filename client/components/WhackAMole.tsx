import { useState } from 'react'

const WhackAMole = () => {
  function randomNumber() {
    return Math.floor(Math.random() * 6) + 1
  }
  const [evilCorp, setEvilCorp] = useState(false)

  function handleChange() {
    const targetIndex: number = randomNumber()
    //based on a randomly given index, change the src to the 'evil corp' logo
  }

  // TODO - onClick function to change the src from 'evil corp' back to 'placeholder'

  const data = [
    <input type="image" src="../companyplaceholder.png" alt="placeholder" />,
    <input type="image" src="../companyplaceholder.png" alt="placeholder" />,
    <input type="image" src="../companyplaceholder.png" alt="placeholder" />,
    <input type="image" src="../companyplaceholder.png" alt="placeholder" />,
    <input type="image" src="../companyplaceholder.png" alt="placeholder" />,
    <input type="image" src="../companyplaceholder.png" alt="placeholder" />,
  ]

  return (
    <div>
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row}
        </div>
      ))}
    </div>
  )
}
export default WhackAMole
