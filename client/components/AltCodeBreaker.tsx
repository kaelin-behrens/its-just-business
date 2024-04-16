import { useEffect, useState } from "react";

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array
  }


function AltCodeBreaker(){
    const [sequence, setSequence] = useState([0])
    const numbers = Array.from({ length: 10 }, (_, index) => index)
    const [selectedNumbers, setSelectedNumbers]  = useState([1])
    const [win, setWin] = useState(false)
    const [roundOver, setRoundOver]  = useState(false)
    const [red, setRed] = useState([])
    const [yellow, setYellow] = useState([])
    const [green, setGreen] = useState([])

    useEffect(() => {
        initializeGame() 
      }, [])


    function initializeGame(){
        const shuffledNumbers = shuffle(numbers)
        setSequence(shuffledNumbers.slice(0, 4))
        console.log(shuffledNumbers.slice(0, 4))
        setSelectedNumbers([])
        
    }

    function handleNumberClick(e){
        const updatedSelect = [... selectedNumbers, Number(e.target.value)]
        console.log(updatedSelect)
        setSelectedNumbers(updatedSelect) 
        if(selectedNumbers.length == 3){
            setRoundOver(true)
        }
    }

    function checkSequence(selection : number[]) {
        console.log(sequence.toString())
        console.log(selection.toString())
        if(sequence.toString() == selection.toString()){
            return true
        } else {
            return false
        }
    }

    function getNumberColor() {
        const newRed = [... red]
        const newYellow = [... yellow]
        const newGreen = [... green]
        selectedNumbers.map((item, index) => {
            if(item === sequence[index]){
                if(newYellow.includes(item)){
                    newYellow.splice(index)
                    newGreen.push(item)
                }
                else {newGreen.push(item)}
                console.log('correct')
            } else if (sequence.includes(item)){
                if(newGreen.includes(item)){
                    newGreen.splice(index)
                    newYellow.push(item)
                }
                else {newYellow.push(item)}
                console.log('correct')
            }
            else {newRed.push(item)
            }
        })
        setGreen(newGreen) 
        setYellow(newYellow) 
        setRed(newRed) 
        }

    if(roundOver){
        if(checkSequence(selectedNumbers)){
            setRoundOver(false)
        } else{
            getNumberColor()
            setRoundOver(false)
            setSelectedNumbers([])
        }
    }

    return <>
    {numbers.map((item, index) => <button key={index} value={item} className={red.includes(item) ? "codered" : yellow.includes(item) ? "codeyellow" : green.includes(item) ? "codegreen" : "nope"} onClick={handleNumberClick}>{item}</button>)}
    <p>{selectedNumbers.map((item, index) => <span key={index}> {item} </span>)}</p>
    <p>{red.map((item, index) => <span key={index}> {item} </span>)}</p>
    </>
}


export default AltCodeBreaker
