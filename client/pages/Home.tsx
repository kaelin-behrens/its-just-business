import { useState } from 'react'
import AuthPopup from '../components/AuthPopup'
import FormHP from '../components/FormHP'
import { createPassword, splitPassword } from '../components/Password/password'

import DnD from '../components/DragAndDrop/DnD'
import Timer from '../components/Timer'
import WhackAMole from '../components/WhackAMole'
import ChatBotPopup from '../components/SpamPopup'


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

  return (
    <>
      <div className="header">
        <div>
          <h6>
            Welcome back User93748GB57, we so value your work here, are you
            ready to get stuck in?
          </h6>
          <p>
            This report is due in <Timer />
          </p>
          {/*//TODO replace with dynamic time */}
        </div>
        <div>
          {' '}
          <img src="../../public/logo.svg" alt="sad face"></img>
        </div>
        <div>
          <h1>Importnant Business Report</h1>
          <p>
            In todays dynamic marketplace, companies must leverage synergistic
            strategies to maximize their competitive advantage. It is imperative
            to think outside the box and cultivate a robust ecosystem of
            innovation, fostering a culture of disruption and agility. By
            aligning key performance indicators with overarching business
            objectives, organizations can optimize operational efficiencies and
            drive sustainable growth. Leveraging cutting-edge technologies such
            as artificial intelligence and blockchain, businesses can streamline
            processes, enhance customer experiences, and stay ahead of the curve
            in this hyperconnected landscape.
          </p>

          <p>
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
          </p>
        </div>
      </div>
      <div className="body">
        <div className="codebreaker">
          <p>codebreaker</p>
          <img
            src="../../public/stock photography 7.webp"
            alt="group of people doing business"
          />
        </div>
        <div className="captcha">
          <p>captcha</p>
          <FormHP clues={clues} />
        </div>
        <div className="whackamole">
          <p>whackamole</p>
          <WhackAMole clues={clues} />
        </div>
        <div className="dragndrop">
          <p>dragndrop</p>
          <DnD clues={clues} />
        </div>
        <button onClick={handleSubmit}>Submit</button>
        {showPopUp && <AuthPopup answer={answer} />}
      </div>
      <ChatBotPopup/>
    </>
  )
}

export default Home
