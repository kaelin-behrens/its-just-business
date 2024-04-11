import { useState } from "react"
import Captcha from "./CaptchaPuzzle/Captcha"

function FormHP() {
  const [displayCaptcha, setDisplayCaptcha] = useState('form')

  function handleSubmit(e){
    e.preventDefault()
    setDisplayCaptcha('captcha')
  }

  const reportText = "Q1 witnessed robust sales growth across multiple segments, underscoring the resilience and adaptability of our sales force. Despite prevailing market headwinds, our strategic initiatives have yielded commendable results, bolstering our market positioning and driving sustained revenue expansion.Aggressive market penetration strategies led to a notable increase in our market share, consolidating our foothold in key territories. By leveraging targeted marketing campaigns and fostering strategic partnerships, we have augmented our brand visibility and expanded our customer base."

    return (
      <div style={{border: 'grey 1px solid', backgroundColor: 'lightgrey'}}>
        {displayCaptcha =='form' && 
        <form onSubmit={handleSubmit}>
          <input defaultValue={"Executive Summary"}></input>
          <textarea defaultValue={reportText} rows={6} ></textarea>
          <label htmlFor="quarter">Financial quarter:</label>
          <select name="quarter" id="quarter" required>
            <option value="Q1">Q1</option>
            <option value="Q2">Q2</option>
            <option value="Q3">Q3</option>
            <option value="Q4">Q4</option>
          </select>
          <button type="submit" style={{border: 'black 1px solid', backgroundColor: 'bisque'}}>Submit</button>
        </form>}
        {displayCaptcha == 'captcha' && <Captcha currentDisplay={displayCaptcha} newDisplay={setDisplayCaptcha}/>}
        {displayCaptcha == 'complete' && <p>password</p>}
      </div>
    )
  }
  
  export default FormHP

  