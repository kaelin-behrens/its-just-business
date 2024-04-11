import CaptchaImage from "./CaptchaImage"

const testUrl = "https://www.warrenphotographic.co.uk/photography/sqrs/06568.jpg"
const imgArr = [testUrl, testUrl, testUrl, testUrl]

function Captcha(){
    return <>
    {imgArr.map(item => <CaptchaImage key={item} image={item}/>)}
    </>
    
}

export default Captcha