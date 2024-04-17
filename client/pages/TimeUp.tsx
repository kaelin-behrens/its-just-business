import { Link } from 'react-router-dom'
import './../styles/not-found.css'

function TimeUp() {
  return (
    <div className="not-found">
      <h1 className="timeTitle">Time up. You failed.</h1>
      <div className="timeRow">
        <img
          className="imageTimeUp"
          src="../../public/handshake.png"
          alt="Back to home"
        />
        <img
          className="imageTimeUp"
          src="../../public/handshake.png"
          alt="Back to home"
        />
        <img
          className="imageTimeUp"
          src="../../public/handshake.png"
          alt="Back to home"
        />
      </div>
      <p className="return">
        <Link to={'/'}> Try again.</Link>
      </p>
    </div>
  )
}

export default TimeUp
