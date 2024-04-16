import { useEffect, useState } from 'react'
import { random } from './helperFunctions'

function ColorCaptchaImage(props) {
  const { info } = props
  const [selected, setSelected] = useState(false)
  const newGrid = props.toChild
  const flickerNum = random(0, 3)

  // handles reset behaviour after submission
  const { startAgain, stop } = props
  useEffect(() => {
    if (startAgain) {
      setSelected(false)
      stop(false)
    }
  }, [startAgain, stop])

  function handleClick() {
    setSelected(!selected)
    newGrid.splice(info.index, 1, !selected)
    props.toParent(newGrid)
  }

  return (
    <div className="cap-item">
      <button
        key={info.index}
        onClick={handleClick}
        className={selected ? 'blue' : 'blank'}
        data-testid="captchaBtn"
      >
        <img
          src={info.image}
          className={flickerNum == 2 ? 'fade' : 'flicker'}
          alt={info.image}
        />
      </button>
    </div>
  )
}

export default ColorCaptchaImage
