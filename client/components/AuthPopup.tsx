import { useState } from "react"

function AuthPopup() {
  const [password, setPassword] = useState('')

  function handleChange(e){
    setPassword(e.target.value)
    console.log(password)

  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(`Submitted: ${password}`)
  }


    return (
      // Temporary inline styling for the purposes of viewing and manually testing components
      <div style={{border: 'grey 1px solid', backgroundColor: 'beige'}}>
        <p>fake Auth Popup</p>
        <form onSubmit={handleSubmit}>
          <input type="password" value={password} onChange={handleChange}></input>
          <button type="submit" style={{border: 'black 1px solid', backgroundColor: 'bisque'}}>Submit</button>
        </form>
      </div>
    )
  }
  
  export default AuthPopup