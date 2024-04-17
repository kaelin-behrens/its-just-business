export default function PasswordPopup(props) {
  const password = props.password

  return (
    <>
      <div className="survey-cover"></div>
      <div className="survey-popup">
        <h3 className="password">{password}</h3>
      </div>
    </>
  )
}
