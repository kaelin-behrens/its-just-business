import { useState, useEffect } from 'react'

function Timer () {
    const [secondsRemaining, setSecondsRemaining] = useState(2 * 60)
    // add state management to save seconds remaining and stop timer? for potential leaderboard

    useEffect(() => {
        const interval = setInterval(() => {
          setSecondsRemaining(prevSeconds => {
            if (prevSeconds === 0) {
              clearInterval(interval)
              console.log('done')
              return prevSeconds
            }
            return prevSeconds - 1
          });
        }, 1000)
    
        return () => clearInterval(interval);
      }, [])

      function formatTime (time : number) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      }

    return(<>{formatTime(secondsRemaining)}</>)

}

export default Timer