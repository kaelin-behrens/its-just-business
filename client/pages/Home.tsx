import { useEffect, useState } from 'react'
import AuthPopup from '../components/AuthPopup'
import FormHP from '../components/FormHP'

import { createPassword, splitPassword } from '../components/Password/password'

import DnD from '../components/DragAndDrop/DnD'
import Timer from '../components/Timer'
import WhackAMole from '../components/WhackAMole'

import ChatBotPopup from '../components/ChatBotPopup'
import CodeBreaker from '../components/CodeBreaker'
import Eyes from '../components/Eyes/Eyes'
import Survey from '../components/Survey'

import ColorCaptcha from '../components/CaptchaPuzzle/ColorCaptcha'
import Cross from '../components/Cross'
import KPIPopup from '../components/KPIPopup'

function Home() {
  const [showPopUp, setShowPopUP] = useState(false)
  function handleSubmit() {
    setShowPopUP(!showPopUp)
  }

  const [showKPI, setShowKPI] = useState(false)
  function kpi() {
    setShowKPI(!showKPI)
  }
  // console log pw for testing purposes
  const [answer, setAnswer] = useState(String(createPassword()))
  console.log(answer)
  const [clues, setClues] = useState(splitPassword(answer))
  // console.log(clues)

  const [surveyTime, setSurveyTime] = useState(false)
  const [complete, setComplete] = useState(false)

  const [number, setNumber] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setShowKPI(true)
    }, 100000)
    const timer2 = setInterval(() => {
      setShowKPI(false)
    }, 15000)
    return () => {
      clearInterval(timer)
      clearInterval(timer2)
    }
  }, [])

  return (
    <>
      {surveyTime && !complete && (
        <Survey current={complete} new={setComplete} />
      )}
      {showKPI && <KPIPopup />}
      <div className="userbanner">
        <p className="usergreeting">
          Welcome back User93748GB57, work hours have commenced.
        </p>
        <p className="timertext">
          This report is due in{' '}
          <Timer
            currentSurveyState={surveyTime}
            newSurveyState={setSurveyTime}
          />
        </p>
        {/*//TODO replace with dynamic time */}
      </div>
      <div>
        <img
          className="businesslogo"
          src="../../public/logo.svg"
          alt="logo"
        ></img>
      </div>
      <div className="wrapper">
        <div className="header">
          <div className="row">
            <div className="topstuff">
              <h1 className="title">Company: It&apos;s just business.</h1>
              <p className="blandtext">
                In todays dynamic marketplace, companies must leverage
                synergistic strategies to maximize their competitive advantage.
                It is imperative to think outside the box and cultivate a robust
                ecosystem of innovation, fostering a culture of disruption and
                agility. In the past quater, we have laid off 1,5243 staff. By
                aligning key performance indicators with overarching business
                objectives, organizations can optimize operational efficiencies
                and drive sustainable growth. Our profitprofits have increased
                by 179%. Leveraging cutting-edge technologies such as artificial
                intelligence and blockchain, businesses can streamline
                processes, enhance customer experiences, and stay ahead of the
                curve in this hyperconnected landscape.
              </p>
              <p className="blandtext">
                Moreover, proactive stakeholder engagement is paramount in
                navigating the complexities of global markets. By conducting
                comprehensive market analyses and harnessing actionable
                insights, enterprises can capitalize on emerging trends and
                capitalize on untapped opportunities. It is essential to foster
                cross-functional collaboration and nurture strategic
                partnerships to fuel organic expansion and fortify market
                positioning. Through iterative experimentation and iterative
                optimization, businesses can continuously refine their value
                propositions and adapt to evolving consumer demands, ensuring
                long-term viability and resilience in an ever-evolving business
                landscape.
              </p>
            </div>
            <div className="grid-container">
              <div className="codebreaker">
                <CodeBreaker clues={clues} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="captcha grid-item">
              <FormHP clues={clues} />
            </div>{' '}
            <div className="dragndrop  grid-item">
              <DnD clues={clues} />
            </div>
          </div>
          <div className="row">
            {' '}
            <img
              className="secondStock"
              id="otherimage"
              src="../../public/stock photography 7.webp"
              alt="group of people doing business"
            />
            <div className="whackamole  grid-item">
              <WhackAMole clues={clues} />
            </div>
          </div>
        </div>

        <button className="finalbutton" onClick={handleSubmit}>
          Submit
        </button>

        {showPopUp && <AuthPopup answer={answer} />}
      </div>
      <ChatBotPopup />
    </>
  )
}

export default Home
