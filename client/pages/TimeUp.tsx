import { Link } from 'react-router-dom'

function TimeUp() {
  return (
    <>
      <body>
        <h1>Time up. You failed.</h1>
        <p>
          <Link to={'/'}> Try again.</Link>
        </p>
      </body>
    </>
  )
}

export default TimeUp
