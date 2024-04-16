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
    const [sequence, setSequence] = useState([])
    const numbers = Array.from({ length: 10 }, (_, index) => index)
    const [selectedNumbers, setSelectedNumbers] = useState([1, 2])

    useEffect(() => {
        initializeGame() 
      }, [])


    function initializeGame(){
        const shuffledNumbers = shuffle(numbers)
        setSequence(shuffledNumbers.slice(0, 4))
    }

    function handleNumberClick(e){
        const updatedSelect = [... selectedNumbers, Number(e.target.value)]
        console.log(updatedSelect)
        setSelectedNumbers(updatedSelect) 
        if(selectedNumbers.length == 3){
            checkSequence()
            setSelectedNumbers([])
        }
    }

    function checkSequence() {
        console.log("checking sequence")

    }

    function getNumberColor() {
        console.log(getNumberColor)
      }

    return <>
    {numbers.map((item, index) => <button key={index} value={item} onClick={handleNumberClick}>{item}</button>)}
    <p>{selectedNumbers.map((item, index) => <span key={index}> {item} </span>)}</p>
    </>
}


export default AltCodeBreaker
