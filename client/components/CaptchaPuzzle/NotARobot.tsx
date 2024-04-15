import { useEffect } from "react";

function NotARobot(props){
    const {newDisplay} = props

    function handleChange() {
        setTimeout(function() {
            newDisplay('captcha')
        }, 500);
      }

    return <>
    <p>Please verify you are human.</p>
    <div>
        <input type="checkbox" onChange={handleChange}></input>
        <p>I'm not a robot</p>
        <img style={{height: 40}} src="../../CaptchaImages/captcha.png" alt="rounder arrow captcha symbol"></img>
    </div>
    </>
}

export default NotARobot


