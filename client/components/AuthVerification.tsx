import { useState } from "react";
import ColorCaptcha from "./CaptchaPuzzle/ColorCaptcha";

function AuthVerification(props){
    const [displayCaptcha, setDisplayCaptcha] = useState(true)
    const [robotCheckbox, setRobotCheckbox] = useState(true)
    
    function handleChange() {
        setTimeout(function() {
            setRobotCheckbox(false)
        }, 500);
      }

    if(!displayCaptcha){props.newNavState(true)}

    return <>
    {robotCheckbox &&  <><p>Please verify you are human.</p>
    <div>
        <input type="checkbox" onChange={handleChange}></input>
        <p>I'm not a robot</p>
        <img style={{height: 40}} src="../CaptchaImages/captcha.png" alt="rounder arrow captcha symbol"></img>
    </div></> }
    {!robotCheckbox && <ColorCaptcha currentDisplay={displayCaptcha}
          newDisplay={setDisplayCaptcha}/>}
    </>
}

export default AuthVerification

