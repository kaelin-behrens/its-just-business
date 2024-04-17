import { useState } from 'react'

export default function PasswordPopup(props) {
  const [isVisible, setIsVisible] = useState(true)
  const password = props.password

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <>
      {isVisible && (
        <>
          <div className="survey-cover"></div>
          <div className="survey-popup">
            <button onClick={handleClose}>X</button>
            <h3 className="password">{password}</h3>
          </div>
        </>
      )}
    </>
  )
}
