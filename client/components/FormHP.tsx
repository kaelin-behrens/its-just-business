import { useState } from 'react'
import Captcha from './CaptchaPuzzle/Captcha'
import NotARobot from './CaptchaPuzzle/NotARobot'

function FormHP(props) {
  const [displayCaptcha, setDisplayCaptcha] = useState('form')
  const fragment = props.clues[1]

  function handleSubmit(e) {
    e.preventDefault()
    setDisplayCaptcha('checkbox')
  }

  const reportText =
    'Q1 witnessed robust sales growth across multiple segments, underscoring the resilience and adaptability of our sales force. Despite prevailing market headwinds, our strategic initiatives have yielded commendable results, bolstering our market positioning and driving sustained revenue expansion.Aggressive market penetration strategies led to a notable increase in our market share, consolidating our foothold in key territories. By leveraging targeted marketing campaigns and fostering strategic partnerships, we have augmented our brand visibility and expanded our customer base.'

  return (
    <div
      style={{
        height: '100%',
        width: '80%',
        background: '#0e8af01a',
        borderRadius: '15px',
      }}
    >
      {displayCaptcha == 'form' && (
        <form onSubmit={handleSubmit}>
          <div style={{ paddingTop: '10px' }}>
            {' '}
            <div>
              <label htmlFor="quarter">Financial quarter:</label>

              <select name="quarter" id="quarter" required>
                <option value="Q1">Q1</option>
                <option value="Q2">Q2</option>
                <option value="Q3">Q3</option>
                <option value="Q4">Q4</option>
              </select>
            </div>
            <br />
            <input defaultValue="Executive Summary"></input>
          </div>{' '}
          <div style={{ margin: '2%' }}>
            <textarea defaultValue={reportText} rows={10}></textarea>
          </div>
          <br />
          <br />
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label> Encabulating</label>
          <br />
          <br />
          <input
            type="checkbox"
            id="vehicle2"
            name="vehicle2"
            value="Car"
          ></input>{' '}
          <label> Various</label> <br />
          <br />
          <input
            type="checkbox"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
          ></input>{' '}
          <label> Feduciary</label> <br />
          <br />
          <button type="submit" data-testid="formBtn">
            Submit
          </button>
        </form>
      )}
      {displayCaptcha == 'checkbox' && (
        <NotARobot
          currentDisplay={displayCaptcha}
          newDisplay={setDisplayCaptcha}
        />
      )}
      {displayCaptcha == 'captcha' && (
        <Captcha
          currentDisplay={displayCaptcha}
          newDisplay={setDisplayCaptcha}
        />
      )}
      {displayCaptcha == 'complete' && <p>Password clue: {fragment}</p>}
    </div>
  )
}

export default FormHP
