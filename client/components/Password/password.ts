import { generate, count } from "random-words";
import * as helper from '../CaptchaPuzzle/helperFunctions'

export function createPassword(){
    const charList = ['!', '*', '%', '&']
const charIndex1 = Math.floor(Math.random() * 4)
const charIndex2 = Math.floor(Math.random() * 4)

const word = String(generate({ minLength: 6, maxLength: 6}))
const num = Math.floor(1000 + Math.random() * 9000)
const char1 = charList[charIndex1]
const char2 = charList[charIndex2]

const password = [word, String(num), char1, char2]
helper.shuffle(password)
const result = password.reduce((a, c) => {
    return a + c;
  }, "");
  return splitPassword(result)
}

export function splitPassword(password){
    const pwArr = [password.slice(0,3), password.slice(3, 6), password.slice(6,9),password.slice(9, 12)]
    return pwArr
}
