import { useState } from 'react'
import AuthPopup from '../components/AuthPopup'
import FormHP from '../components/FormHP'

import { createPassword, splitPassword } from '../components/Password/password'

import DnD from '../components/DragAndDrop/DnD'
import Timer from '../components/Timer'
import WhackAMole from '../components/WhackAMole'

import ChatBotPopup from '../components/ChatBotPopup'
import CodeBreaker from '../components/CodeBreaker'
import Survey from '../components/Survey'

function Home() {
  const [showPopUp, setShowPopUP] = useState(false)
  function handleSubmit() {
    setShowPopUP(!showPopUp)
  }

  // console log pw for testing purposes
  const [answer, setAnswer] = useState(String(createPassword()))
  console.log(answer)
  const [clues, setClues] = useState(splitPassword(answer))
  // console.log(clues)

  const [surveyTime, setSurveyTime] = useState(false)
  const [complete, setComplete] = useState(false)

  return (
    <>
    {surveyTime && !complete && <Survey current={complete} new={setComplete}/>}
      <div className="userbanner">
        <p className="usergreeting">
          Welcome back User93748GB57, work hours have commenced.
        </p>

        <p className="timertext">
          This report is due in <Timer currentSurveyState={surveyTime} newSurveyState={setSurveyTime} />
        </p>
        {/*//TODO replace with dynamic time */}
      </div>
      <div>
        <img
          className="businesslogo"
          src="../../public/logo.svg"
          alt="sad face"
        ></img>
      </div>
      <div className="header">
        <div>
          <h1 className="title">Important Business Report</h1>
          <p className="blandtext">
            In todays dynamic marketplace, companies must leverage synergistic
            strategies to maximize their competitive advantage. It is imperative
            to think outside the box and cultivate a robust ecosystem of
            innovation, fostering a culture of disruption and agility. In the
            past quater, we have laid off 1,5243 staff. By aligning key
            performance indicators with overarching business objectives,
            organizations can optimize operational efficiencies and drive
            sustainable growth. Our profitprofits have increased by 179%.
            Leveraging cutting-edge technologies such as artificial intelligence
            and blockchain, businesses can streamline processes, enhance
            customer experiences, and stay ahead of the curve in this
            hyperconnected landscape.
          </p>

          {/* <p className="blandtext">
            Moreover, proactive stakeholder engagement is paramount in
            navigating the complexities of global markets. By conducting
            comprehensive market analyses and harnessing actionable insights,
            enterprises can capitalize on emerging trends and capitalize on
            untapped opportunities. It is essential to foster cross-functional
            collaboration and nurture strategic partnerships to fuel organic
            expansion and fortify market positioning. Through iterative
            experimentation and iterative optimization, businesses can
            continuously refine their value propositions and adapt to evolving
            consumer demands, ensuring long-term viability and resilience in an
            ever-evolving business landscape.
          </p> */}
        </div>
      </div>
      <div className="body">
        <div className="codebreaker">
          <p>codebreaker</p>
          <CodeBreaker clues={clues} />
        </div>
        <div className="captcha">
          <FormHP clues={clues} />
        </div>
        <div className="whackamole">
          <WhackAMole clues={clues} />
        </div>
        <div className="dragndrop">
          <DnD clues={clues} />
        </div>
        <div>
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {showPopUp && <AuthPopup answer={answer} />}
      </div>
      <ChatBotPopup />
    </>
  )
}

export default Home
