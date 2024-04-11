function CaptchaImage(props){

    const {info} = props

    return <>
    <img alt="" src={info.image}></img></>
    
}

export default CaptchaImage