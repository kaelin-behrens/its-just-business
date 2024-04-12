import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPassword } from './Password/password'

function AuthPopup() {
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const answer = 'test123'

  function handleChange(e) {
    // display password generation for testing
    const x = createPassword()
    console.log(x)
    // display password generation for testing ^^
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (password == answer) {
      console.log('correct')
      navigate('/404')
    } else {
      setPassword('')
      console.log('incorrect')
    }
  }

  return (
    // Temporary inline styling for the purposes of viewing and manually testing components
    <div>
      <p>fake Auth Popup</p>
      <form onSubmit={handleSubmit}>
        <input type="password" value={password} onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AuthPopup
