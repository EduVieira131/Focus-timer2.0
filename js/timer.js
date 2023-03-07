export default function Timer({
  minutesDisplay,
  secondsDisplay,
  playButton,
  pauseButton,
  addTime,
  decreaseTime
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let standardMinutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  function updateDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let isFinished = minutes <= 0 && seconds < 0

      if (isFinished) {
        return
      }

      if (seconds == 0) {
        seconds = 60
        --minutes
      }
      --seconds

      updateDisplay(minutes, seconds)

      countdown()
    }, 1000)
  }

  function addTime() {
    minutes += 5
    updateDisplay(minutes, seconds)
  }

  function decreaseTime() {
    minutes -= 5
    let updateMinutes = minutes <= 0 ? (minutes = 0) : minutes
    updateDisplay(updateMinutes, seconds)
  }

  function pause() {
    clearTimeout(timerTimeOut)
  }

  function reset() {
    pause()
    minutes = standardMinutes
    seconds = 0
    updateDisplay(minutes, seconds)
  }

  return {
    countdown,
    updateDisplay,
    pause,
    reset,
    addTime,
    decreaseTime
  }
}
