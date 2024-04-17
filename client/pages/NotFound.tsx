import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <h3>Uh Oh! The page you are looking for is not found.</h3>
      <img src="../../public/404.png" alt="sad face"></img>
      <h1>404</h1>
      <p>
        please
        <Link to={'/'}> return </Link>
        to work
      </p>
    </>
  )
}

export default NotFound
