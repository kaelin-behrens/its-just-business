import CaptchaImage from "./CaptchaImage"
import * as helper from './helperFunctions'
import * as data from './data'
import { Pic, OrganisedPic } from "../../../models/Captcha"
import { useEffect, useState } from 'react'
import './Captcha.css';

let imgArr : Pic[] = data.dataA.concat(data.dataB)
helper.shuffle(imgArr)
const newImgArr = imgArr.slice(0, 9)
let captchaData : OrganisedPic[] = []
for (let i = 0; i < newImgArr.length; i++) {
    captchaData.push({image: newImgArr[i].image, type: newImgArr[i].type, index: i})
}


function Captcha(){
    const initialGridState = [false, false, false, false, false, false, false, false, false]
    const [grid, setGrid] = useState(initialGridState)
    const [startAgain, setStartAgain] = useState(false)
    const chosen = captchaData[0].type


    const [resetTrigger, setResetTrigger] = useState(false);
    useEffect(() => {
        if (resetTrigger) {
          captchaData = rearrangeData()
        }
      }, [resetTrigger]);

    function rearrangeData(){
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
                    console.log('Captcha failed')
                    setGrid(initialGridState)
                    setResetTrigger(true)
                    setStartAgain(true)
                    return
                    
                } else if (captchaData[i].type != chosen && grid[i] == true){
                    console.log('Captcha failed')
                    setGrid(initialGridState)
                    setResetTrigger(true)
                    setStartAgain(true)
                    return
                }  
            }
            console.log('Captcha Passed')
            setGrid(initialGridState)
            setResetTrigger(true)
            setStartAgain(true)
        }
    


    return <>
    <h1>Select all {chosen}s</h1>
    <div className='cap-container'>
    {captchaData.map(pic => 
       <CaptchaImage key={pic.index} info={pic} startAgain={startAgain} stop={setStartAgain} toChild={grid} toParent={setGrid}/>
            )
        }</div>
         <button onClick={handleSum}>Submit</button>
         
    </>
    
}

export default Captcha