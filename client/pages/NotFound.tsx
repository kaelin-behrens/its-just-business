import { Link } from 'react-router-dom'
import './../styles/not-found.css'
function NotFound() {
  return (
    <div className="not-found">
      <h1 className="fourOhfour">404</h1>
      <Link to="/">
        <img
          className="imageNotFound"
          src="../../public/thumbs-up.png"
          alt="Back to home"
        />
      </Link>
      <p className="return">
        Please <Link to="/">return</Link> to work
      </p>
    </div>
  )
}

export default NotFound
