import { useState } from 'react'

const WhackAMole = () => {
  function randomNumber() {
    return Math.floor(Math.random() * 2) + 1
  }

  const imageSources = [
    { index: 0, src: '../companyplaceholder.png' },
    { index: 1, src: '../companyplaceholder.png' },
    { index: 2, src: '../companyplaceholder.png' },
  ]
  const [imageData, setImageData] = useState(imageSources)

  function handleChange(event) {
    const targetIndex: number = randomNumber()
    setImageData([
      { index: 0, src: '../companyplaceholder.png' },
      { index: 1, src: '../evil-corp.png' },
      { index: 2, src: '../companyplaceholder.png' },
    ])

    //based on a randomly given index, change the src to the 'evil corp' logo
  }

  // TODO - onClick function to change the src from 'evil corp' back to 'placeholder'

  return (
    <div>
      {imageData.map((ele) => (
        <button onClick={handleChange} key={ele.index}>
          <img src={ele.src} alt="Description" key={ele.index} />
        </button>
      ))}
    </div>
  )
}

export default WhackAMole
