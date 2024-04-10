import { useState } from 'react'
import AuthPopup from '../components/AuthPopup'
import FormHP from '../components/FormHP'

function Home() {
  const [showPopUp, setShowPopUP] = useState(false)
  function handleSubmit() {
    setShowPopUP(!showPopUp)
  }
  return (
    <>
      <div className="header">
        <div>
          <h6>
            Welcome back User93748GB57, we so value your work here, are you
            ready to get stuck in?
          </h6>
          <p>This report is due at 5pm</p>{' '}
          {/*//TODO replace with dynamic time */}
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
          <img src="/" alt="group of people doing business" />
        </div>
        <div className="captcha">
          <p>captcha</p>
          <FormHP />
        </div>
        <div className="whackamole">
          <p>whackamole</p>
        </div>
        <div className="dragndrop">
          <p>dragndrop</p>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        {showPopUp && <AuthPopup />}
      </div>
    </>
  )
}

export default Home
