import { useState } from "react"

function Survey(props){
    const [showQuestions, setShowQuestions] = useState(false)
    const [hideButton, setHideButton] = useState(false)
    

    function startSurvey(){
        setShowQuestions(true)
    }

    function hideNotNow() {
        setHideButton(true)
    }

    function showNotNow() {
        setHideButton(false)
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.new(true)
      }


    return (
        <>
        <div className="survey-cover"></div>
        <div className="survey-popup">
            {!showQuestions && 
                <div>
                <h3>Your feedback is important to us. Would you like to complete a short survey?</h3>
                <div className="survey-button-container" onMouseEnter={hideNotNow} onMouseLeave={showNotNow}>
                    <button onClick={startSurvey}>Yes</button> 
                    <button className={hideButton ? "impossible-button" : "possible-buttom"}>Not now</button>
                </div>
                </div>}
            {showQuestions && 
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <p>I am challenged on a daily basis at work.</p>
                        <label htmlFor="1-sd">Strongly disagree</label><input name="rating1" id="1-sd" type="radio"></input>
                        <label htmlFor="1-d">Disagree</label><input id="1-d" name="rating1" type="radio"></input>
                        <label htmlFor="1-u">Unsure</label><input id="1-u" name="rating1" type="radio"></input>
                        <label htmlFor="1-a">Agree</label><input id="1-a" name="rating1" type="radio"></input>
                        <label htmlFor="1-sa">Strongly agree</label><input id="1-sa" name="rating1" type="radio"></input>
                        </div>
                        <div>
                        <p>I find my work rewarding.</p>
                        <label htmlFor="2-sd">Strongly disagree</label><input name="rating2" id="2-sd" type="radio"></input>
                        <label htmlFor="2-d">Disagree</label><input id="2-d" name="rating2" type="radio"></input>
                        <label htmlFor="2-u">Unsure</label><input id="2-u" name="rating2" type="radio"></input>
                        <label htmlFor="2-a">Agree</label><input id="2-a" name="rating2" type="radio"></input>
                        <label htmlFor="2-sa">Strongly agree</label><input id="2-sa" name="rating2" type="radio"></input>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>}
        </div>
        </>
    )

}

export default Survey



