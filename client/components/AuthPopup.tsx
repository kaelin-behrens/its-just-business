import { useState } from 'react'
import AuthVerification from './AuthVerification'
import { useNavigate } from 'react-router-dom'


function AuthPopup(props) {

  const [password, setPassword] = useState('')
  const answer = props.answer
  const [goToVerify, setGoToVerify] = useState(false)
  const [nav, setNav] = useState(false)

  const navigate = useNavigate()

  function handleChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (password == answer) {
      setGoToVerify(true)
    } else {
      setPassword('')
    }
  }

  if(nav){
    navigate('/404')
  }

  return (

    <div>
      {!goToVerify && <form onSubmit={handleSubmit}>
        <input type="password" value={password} onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form> }
      {goToVerify && <AuthVerification currentNavState={nav} newNavState={setNav}/>}
    </div>
  )
}

export default AuthPopup
