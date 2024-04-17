import { Link } from 'react-router-dom'
// import 'not-found.css'

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>PAGE NOT FOUND</p>
      <Link to="/">
        <img src="../../public/404.png" alt="Back to home" />
      </Link>
      <p>
        Please <Link to="/">return</Link> to work
      </p>
    </div>
  )
}

export default NotFound
