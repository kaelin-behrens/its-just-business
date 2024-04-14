import { Link } from 'react-router-dom'

function TimeUp() {
  return (
    <>
      <h1>Time up. You failed.</h1>
      <p>
        <Link to={'/'}> Try again.</Link>
      </p>
    </>
  )
}


export default TimeUp
