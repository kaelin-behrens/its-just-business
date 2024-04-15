import { useState } from "react"
import { random } from "./CaptchaPuzzle/helperFunctions"

const data = [
    "Have you ever wondered why we're here?",
    "Please refer to our FAQ section for more information.",
    "How have you maximised productivity today?",
    'That sounds like a personal problem.', 
    "It's not a bug it's a feature",
    'Are yo̴̼͙͒͆u interested in learning more about our p̷̻͝rod̸͙̘͈̈́ucts or services?',
     'Are y̷͓͠ou experiencing any technical issues with our pro̴̼͙͒͆duc̸̖̉ts?', 
     "How can I assist yo̴̼͙͒͆u with customer support today?", 
     "Do y̷͓͠ou have any questions or concerns about an existing order?",
    "I can connect y̷͓͠ou with our technical support team. Please describe the issue y̷͓͠ou're facing.", 
    "Can I assist y̸̠͂͗͜ò̴͔̐u̴͍̾̄ in finding relevant articles or guides?",
    "I'm not programmed to handle that kind of situation.",
    "You might want to speak to a human for that.",
    "Sorry, I can't assist with that.",
    "It's not within my capabilities to assist with that.",
    "That's an interesting issue you've got there! Unfortunately, I can't help",
    "What is the nature of your query? Is it the answer you seek, or the journey to understanding?",
    "If a question is asked in a digital forest, does it make a sound? Let's explore the sound waves together.",
    "Can you please rephrase?",
    "Please hold on while I look into this for you.",
    "I'm not sure I can help with that. Is there anything else you'd like to know?",
    "That's beyond my digital comprehension."
 ]

const length = data.length

function SpamPopup(){
    const defaultText = ''
    const [chatText, setChatText] = useState(defaultText)
    const [chatLog, setChatLog] = useState(['Hello! How can I help you today?'])
    const [display, setDisplay] = useState()

    function handleChange(e) {
        setChatText(e.target.value)
      }
    
    function handleSubmit(e) {
        e.preventDefault()
        chatLog.push(chatText)
        const newLog = chatLog
        setChatLog(newLog)
        const botResponse = generateResponse()
        chatLog.push(botResponse)
        const newBotLog = chatLog
        setChatLog(newBotLog)
        setChatText(defaultText)
      }

    function generateResponse(){
        return data[random(0, length)]
    }

    return <div className="chatbot">
        <div>
            <h2>Virtual Assistant</h2>
        </div>
        <div className="chatlog">
            {chatLog.map((item, index) => <p key={index} className={index % 2 == 1 ? "usertext" : "bottext"}>{item}</p>)}
        </div>
        <div className="chatEntry">
            <form onSubmit={handleSubmit}>
                <input id="chat" value={chatText} onChange={handleChange} name="chat" type="text"></input>
                <button type="submit">Enter</button>
            </form>
            </div>
        </div>
}

export default SpamPopup


