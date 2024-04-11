import CaptchaImage from "./CaptchaImage"
import * as helper from './helperFunctions'
import * as data from './data'
import { Pic, OrganisedPic } from "../../../models/Captcha"

let imgArr : Pic[] = data.dataA.concat(data.dataB)
helper.shuffle(imgArr)
imgArr = imgArr.slice(0, 9)
const captchaData : OrganisedPic[] = []
for (let i = 0; i < imgArr.length; i++) {
    captchaData.push({image: imgArr[i].image, type: imgArr[i].type, index: i})
}


function Captcha(){
    return <>
    {captchaData.map(pic => 
       <CaptchaImage key={pic.index} info={pic}/>
            )
        }
    </>
    
}

export default Captcha