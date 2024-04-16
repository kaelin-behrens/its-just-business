import ColorCaptchaImage from './ColorCaptchaImage'
import * as helper from './helperFunctions'
import * as data from'./colours'
import { Pic, OrganisedPic } from "../../../models/Captcha"
import { useEffect, useState } from 'react'
import './Captcha.css';

const imgArr : Pic[] = data.images
helper.shuffle(imgArr)
const newImgArr = imgArr.slice(0, 9)
let captchaData : OrganisedPic[] = []
for (let i = 0; i < newImgArr.length; i++) {
    captchaData.push({image: newImgArr[i].image, type: newImgArr[i].type, index: i})
}


function ColorCaptcha(){
    const initialGridState = [false, false, false, false, false, false, false, false, false]
    const [grid, setGrid] = useState(initialGridState)
    const [startAgain, setStartAgain] = useState(false)
    const [count, setCount]= useState(0)
    const chosen = captchaData[0].type
    const [resultText, setResultText] = useState(`${count}/2 complete`)
    const [buttonSlide, setButtonSlide] = useState("")


    const [resetTrigger, setResetTrigger] = useState(false);
    useEffect(() => {
        if (resetTrigger) {
          captchaData = rearrangeData()
        }
      }, [resetTrigger]);

    function rearrangeData(){
        const imgArr = data.images
        helper.shuffle(imgArr)
        const newImgArr = imgArr.slice(0, 9)
        const captchaData : OrganisedPic[] = []
        for (let i = 0; i < newImgArr.length; i++) {
            captchaData.push({image: newImgArr[i].image, type: newImgArr[i].type, index: i})
        }
        setResetTrigger(false)
        return captchaData}

        function handleSum(){
            for (let i = 0; i < captchaData.length; i++) {
                if(captchaData[i].type == chosen && grid[i] == false){
                    setResultText("Incorrect answer. Please try again.")
                    setGrid(initialGridState)
                    setResetTrigger(true)
                    setStartAgain(true)
                    return
                    
                } else if (captchaData[i].type != chosen && grid[i] == true){
                    setResultText("Incorrect answer. Please try again.")
                    setGrid(initialGridState)
                    setResetTrigger(true)
                    setStartAgain(true)
                    return
                }  
            }
            if(count + 1 == 2){
                console.log('test')
            } else {
                setResultText(`${count + 1}/2 complete`)
                setCount(count + 1)
                setGrid(initialGridState)
                setResetTrigger(true)
                setStartAgain(true)
            }
        }
    

    function handleButton() {
        setButtonSlide('slide')
    }

    function handleButtonLeave() {
        setButtonSlide('')
    }

    return <div className="puzzle-box">
    <h1>Select all {chosen} squares</h1>
    <div className='cap-container'>
    {captchaData.map(pic => 
       <ColorCaptchaImage key={pic.index} info={pic} startAgain={startAgain} stop={setStartAgain} toChild={grid} toParent={setGrid}/>
            )
        }</div>
        <div className="buttonzone" onMouseEnter={handleButton} onMouseLeave={handleButtonLeave}>
         <button onClick={handleSum} className={buttonSlide}>Submit</button>
         <p>{resultText}</p>
        </div> 
    </div>
    
}

export default ColorCaptcha


