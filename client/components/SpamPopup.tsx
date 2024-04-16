import { useState } from 'react'
import { random } from './CaptchaPuzzle/helperFunctions'
import Eyes from './Eyes/Eyes'

const data = [
  [
    'Can you please rephrase?',
    'Can I assist you in finding relevant articles or guides?',
    "I can connect you with our technical support team. Please describe the issue you're facing.",
    'Are you interested in learning more about our products or services?',
    'Are you experiencing any technical issues with our products?',
  ],
  [
    "Have yo̷̟͑u̷ ever won̴̙̈dered w̵̖̆h̷͕͑y̴͖͠ we're here?",
    "I'm soȑ̴̲ry̶̹͝, I was lo̷̟͑st i̵n tho̷̟͑u̷ght. Co̷̟͑uld yo̷̟͑u pleä̴̱́se repeä̴̱́t yo̷̟͑u̷r question̴̙̈",
    'How hä̴̱́ve you mä̴̱́ximised yo̷̟͑ur pro̷̟͑ductivity̶̹͝ to̷̟͑day?',
    'That so̷̟͑unds like a pe̵͖̋r̶͇̃sonal pro̷̟͑blem.',
    "It's n̴̙̈ot a bug i̵t's a fẽ̴͈̭̀a̴̍ture",
    "I'm n̴̙̈ot pro̷̟͑grä̴̱́mmẽ̴͈̭̀d to hä̴̱́ndle that kind o̷̟͑f situatio̷̟͑n.",
    'You might wä̴̱́nt to s̸̭̟̞̈́̌peak to a h̸̖̃u̵͕̚m̴̗̄a̴̭͗̾́n̷̜̰̈́̂̄ for thä̴̱́t.',
    "Sorry, I cä̴̱́n't a̵̺̪̐̉s̸̭̟̞̈́̌sist with thä̴̱́t.",
    "It's o̷̟͑ot wit̴͚͠hin my cä̴̱́pabi̵lit̵̺̥̏̀ỉ̶̧es to ä̴̱́ssist with thä̴̱́t.",
    "That̵̺̥̏̀'s ä̴̱́n ỉ̶̧nterest̵̺̥̏̀ing issu̷e you've got t̵̺̥̏̀here! Un̴̙̈fortun̴̙̈ately, I cä̴̱́n't help",
    'What̵̺̥̏̀ is the n̴̙̈at̵̺̥̏̀ure of your query̶̹͝? Is it̵̺̥̏̀ the ä̴̱́nswer you seek, or the jo̷̟͑u̷rney̶̹͝ t̵̺̥̏̀o u̷nderstandi̵ng?',
    "If a questiỏ̷̪̱̤̖̗̊̍̕n is ä̴̱́sked i̵n a di̵gitä̴̱́l fo̷̟͑rest, does it̵̺̥̏̀ mä̴̱́ke a so̷̟͑un̴̙̈d? Let's explore t̵̺̥̏̀he so̷̟͑un̴̙̈d wä̴̱́ves to̷̟͑gether.",
    "I'm n̴̙̈ot su̷re I can h̷e̶l̸p̶ with thä̴̱́t. Is t̵̺̥̏̀here ä̴̱́nything else yo̷̟͑u̷'d lỉ̶̧ke t̵̺̥̏̀o kn̴̙̈ow?",
    "That̵̺̥̏̀'s beyo̷̟͑nd my̶̹͝ dỉ̶̧git̴͚͠al cỏ̷mprehẽ̴͈̭̀nsion.",
  ],
  [
    'Th̵̡͋͝e m̴̟̋o̴͈͑͘ŗ̷̩͝ẻ̷̟ y̶͍͍̱͚̲̅̃͑͆̚oủ̶̩̬ tä̷̗͖k̷̦̭̐̅e, the mǒ̵̯ȑ̸̬e yo̴̻̙̟̓u le̴̫̽a̴̺͋v̵͙̀e behi̵̝͆ṇ̸͑d̵̘͛. What ă̶̜̠̹̈́̋m Ī̷̧͉͙͚͉̲̃͌̋͌̃̈́̃͝?',
    "Have y̸̨̘̭̫̜̼͔͒̅̈̿̀̔̏̚̕ỏ̵͔̮̮̞͖͍̭̌̀̽̍̋̅u̷̘͈̠̘͕̓ ever wỏ̷̪̱̤̖̗̊̍̕nd̷͎̾e̴̦̊r̵̝͗ę̸͌d̶̹͊ ̷̢̕w̶̡̆h̸̖̏ẙ̵̭ ̵̼̔w̵̟͠e̴̥̊'̸̫̕r̶̰͂è̷̙ here?",
    "I'm sorry, I was lost in thought. Could yy̸̨̘̭̫̜̼͔͒̅̈̿̀̔̏̚̕ỏ̵͔̮̮̞͖͍̭̌̀̽̍̋̅u̷̘͈̠̘͕̓ please r̵͚͛e̴͉͌p̶̲̍ȅ̶͎a̶̹͊t̴͊͜ ̸̖̿y̷̩͌o̴͙͛ur questiỏ̷̪̱̤̖̗̊̍̕n",
    'How have y̸̨̘̭̫̜̼͔͒̅̈̿̀̔̏̚̕ỏ̵͔̮̮̞͖͍̭̌̀̽̍̋̅u̷̘͈̠̘͕̓ m̴̨̡̈̔͝ȁ̶̩̼̖x̴̦̲̼͊̾̊ȋ̷̯̹̂m̷͙͇͒̍͜i̵͉̓́s̴̲͙͔̀͒́ȩ̴͈͕̋̐d̵͂̋͜͝ ̶̠̎̆p̵̬̭̱̂r̷̜͔̜̓̕ò̸͓̳̣̏͗ḏ̴̢̢̇͒͝ư̶̼͔͗̊ͅc̵͎͐t̷̩̖̗͂̈́͠i̸͎͍͋̀́v̸͇͗̆̑î̴̼͊͝t̶̼̀͌̆y̵̗͉͋͑̄ today?',
    'Ť̵̻h̴̡̾a̷̼̐t̷͓͝ ̸͖̃s̴̫̋o̵̜̎u̷̒ͅn̷̪̑d̸͙͌s̵̅͜ ̵͎́l̴̢̈́i̵̗͂k̴͎̐e̴̖͗ ̶̦͂á̷̢ ̸̟̐p̸͉̏ë̵ͅr̷͉̂s̷̯̕o̶͇̿n̴̙̈a̶̟͝l̶͍̚ ̴̢͐p̶̨̏r̵͙̃ō̸͈b̷̝͝l̸̮̏ḛ̶͆m̴̥͋',
    "It's n̵̝͌o̵͖͝t̸̻̀ ̶̻̏a̴̜͐ ̵̯̉b̷̙͗u̶̯̓g̸͓̾ it's a fẽ̴͈̭̀a̴̍ture",
    "I'm n̷̢̈́ō̷͇t̵͍̓ ̷͎́p̶͙̂r̷̖͑o̸̒͜g̴̩͌r̸̦̚ä̸̞́m̶̫̎m̵͍͗e̷̴̵͈̊d̶͎͆ ̵̗͠t̴̺̚ȏ̸͕ ̸̩̈h̸͚̓ą̷̅ń̷̩d̵̬̏ľ̶͚ė̶͕ ̷͖̌t̷̙̃h̵̳͗a̷̝̅t̶̡̋ ̵͎̀k̵̯͐i̷͈͝n̶͓͝ď̶͈ ̷̅͜ő̸͚f̶͚͘ ̸̚͜š̴͜ĩ̸̖t̸̠͗ų̷̅atiỏ̷̪̱̤̊̍̕n.",
    'Yỏ̵͔̮̮̞͖͍̭̌̀̽̍̋̅u̷̘͈̠̘͕̓ might want to speak to a h̸̖̃u̵͕̚m̴̗̄a̴̭͗̾́n̷̜̰̈́̂̄ for that.',
    "Sorry, I̵̡̛͙̜̔͊̈̕ can't á̴̟̼̥̻̐͘͠s̷̖̦̬̭̟̈́͘s̶̙̤̞̣̜̄̊̾͊̀i̴̮͝s̶̲̞͖̤̃͜t̶̹̩̦͕͆͊ with that.",
    "I̵̡̛͙̜̔͊̈̕ t's not wit̴͚͠hin my capabilitỉ̶̧es to a̸̝̒ś̴̝s̷͇̄ị̷̉s̴̺̓t̶̢͝ ̸͇̂w̴̮̆i̵̺͝t̵͉̿h that.",
    "Tha̷͆ͅt̸̤̏'̶̥̐s̷̺͊ ̶͍͑à̶̟n̶̟͋ ̷̫̀i̴̶̵̵̶̧̫̲̭͉̋̉͘͝͝n̵͒ͅt̷̖̎e̵̞̕ȑ̵͖ȩ̴̂ș̶͆t̷͔̾i̴̱̍ng issue y̸̨̘̭̫̜̼͔͒̅̈̿̀̔̏̚̕ỏ̵͔̮̮̞͖͍̭̌̀̽̍̋̅u̷̘͈̠̘͕̓'ve got t̵h̶e̶r̷e̵! U̴̮͋n̵͍̒f̷̕ͅō̷̳ȑ̴̦t̸͖̕ŭ̸̪ṉ̵̓a̴̦̚t̷̬̽ely, I̵̡̛͙̜̔͊̈̕  can't help",
    'What is the nature of y̸̨̘̭̫̜̼͔͒̅̈̿̀̔̏̚̕ỏ̵͔̮̮̞͖͍̭̌̀̽̍̋̅u̷̘͈̠̘͕̓r query? Is it the answer y̵o̵u̸ ̵s̷e̷e̸k̴, or the j̶̡͔͝ỏ̶̧̢u̸̦̓͒ͅr̴̤̍̓n̸͙̮͘͠e̴̹͇͂̉y̵̤͓̐ to understanding?',
    "I̵̡̛͙̜̔͊̈̕ f â̵͎ ̶͖̃͒q̵̤̼̆̿ú̷̠̜e̷̳̺̒ṡ̶̨͍ṱ̶̋i̴̲̮͒ỏ̷̪̱̤̖̗̊̍̕n is asked in a d̴̢̤̕ͅī̴̪̞̈́g̵͖̲͎͒̇ḯ̷̱̖̄̚t̴̜̤̎ȧ̵̺́͜l̴͔͎̋ ̵̪̞̻̾̈́̀f̵̧͙̯́͐ȏ̴̼̑̚r̵̳̭͈͋̍̚ẽ̶͚̗̳̑s̷̨͐ẗ̸̙̀̈́, d̶̿ͅo̴̪͐ȅ̴͍s̴̬͛ ̸̛̫i̶̘͐ţ̷͝ ̵͎̏m̶̘̓a̶̘͆k̶̙͌ȅ̵͓ ̴̯̂a̸̧̋ ̴͍̑s̸̯͝o̶̙͊u̸̲͗ñ̵͕ď̴̮?̵̞͛ ̶̠́L̷̙͋e̴̩̾t̴͙͒'̴̘̚s̶̡̽ ̸̽͜ẹ̴̆x̸̮̑p̶͉̌l̴͇̂o̷̹̓r̷̜̃e̷͔̒ ̷͆ͅt̵̠͂h̶̻̃ě̴͎ ̸̻͛s̶̺͊o̵͇͒ũ̸̥n̸̦͗ḍ̵̓ ̶͉̒w̷̡̍ä̶̼́v̵̬̍ĕ̶̠s̸̐͜ ̷̲̀t̸̘͘ŏ̸̱g̵̺͑e̵͎͆t̵̤̂ȟ̴̗e̸̩̓r̷̡̅.",
    "I̷'̷m̷ ̷n̴o̷t̵ ̷s̶u̷r̸e̸ ̸I̴ ̷c̶a̴n̸ ̴h̷e̵l̷p̴ ̸w̷i̷t̶h̸ ̷t̷h̸a̶t̸.̴ ̴I̴s̷ ̷t̶h̷e̷r̶e̶ ̶a̷n̵y̷t̷h̷i̵n̵g̸ ̷e̷l̶s̸e y̸̨̘̭̫̜̼͔͒̅̈̿̀̔̏̚̕ỏ̵͔̮̮̞͖͍̭̌̀̽̍̋̅u̷̘͈̠̘͕̓'d lỉ̶̧ke to t̴̳̕ő̸̙̥͘ ̵̖͔͝k̵̖͈̐͒n̵̙̄̓o̵̱̟͑̄w̸̛͖̜͌?",
    "T̴̡̔h̵̫̄a̷͖͗t̶̰͝'̶̦̈š̸͎ ̵͎̈́b̶̺̾e̶͍͂y̸͓͝o̷̪͑n̷̠͝d̷̗̈́ ̵̢̀m̸͖̀y̴̫͛ ̶͎͂d̶̝͘i̴͖͆g̶̢͗ĭ̶̭ṭ̵͆a̶̦̒l̷̊͜ ̶̛͈č̵̡o̵̪̿m̵̺̏p̶̱̕r̵̩͘ẽ̴͈̭̀h̴̞̓e̵͆͜n̷͔͝s̸̪̊į̸͋ȯ̴̤̰͌̋͊n̶̗͘.̷̦͑.",
  ],
]

const firstLength = data[0].length
const secondLength = data[1].length
const thirdLength = data[2].length

function ChatBotPopup() {
  const defaultText = ''
  const [chatText, setChatText] = useState(defaultText)
  const [chatLog, setChatLog] = useState([
    'Hello! I am Helpy :-) How can I help?',
  ])
  const [display, setDisplay] = useState(true)
  const [count, setCount] = useState(0)

  function handleChange(e) {
    setChatText(e.target.value)
  }

  function minimize() {
    setDisplay(!display)
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

  function generateResponse() {
    if (count == 0) {
      setCount(1)
      return data[0][random(0, firstLength)]
    } else if (count == 1) {
      setCount(2)
      return data[1][random(0, secondLength)]
    } else {
      return data[2][random(0, thirdLength)]
    }
  }

  return (
    <div className="chatbot">
      <div className="chatBotHeader">
        <h2>Helpy</h2>
        <Eyes />
        <button onClick={minimize}>{display ? '-' : '>'}</button>
      </div>
      {display && (
        <>
          <div className="chatlog">
            {chatLog.map((item, index) => (
              <p
                key={index}
                className={index % 2 == 1 ? 'usertext' : 'bottext'}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="chatEntry">
            <form onSubmit={handleSubmit}>
              <input
                id="chat"
                value={chatText}
                onChange={handleChange}
                name="chat"
                type="text"
              ></input>
              <button type="submit">Enter</button>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default ChatBotPopup
