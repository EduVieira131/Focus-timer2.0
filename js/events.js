import {
  playButton,
  pauseButton,
  resetButton,
  addTimeButton,
  decreaseTimeButton,
  forestButton,
  rainButton,
  coffeButton,
  bonfireButton
} from './elements.js'

export default function Events(timer, Sounds) {
  playButton.addEventListener('click', function () {
    Sounds().pressButton()
    timer.countdown()
    pauseButton.classList.remove('hide')
    playButton.classList.add('hide')
  })

  pauseButton.addEventListener('click', function () {
    Sounds().pressButton()
    timer.pause()
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
  })

  resetButton.addEventListener('click', function () {
    Sounds().pressButton()
    timer.reset()
  })

  addTimeButton.addEventListener('click', function () {
    Sounds().pressButton()
    timer.addTime()
  })

  decreaseTimeButton.addEventListener('click', function () {
    Sounds().pressButton()
    timer.decreaseTime()
  })

  forestButton.addEventListener('click', function () {
    forestButton.classList.add('buttonActive')
    Sounds().forestAudioPlay()
  })

  rainButton.addEventListener('click', function () {
    rainButton.classList.add('buttonActive')
    Sounds().rainAudioPlay()
  })

  coffeButton.addEventListener('click', function () {
    coffeButton.classList.add('buttonActive')
    Sounds().coffeAudioPlay()
  })

  bonfireButton.addEventListener('click', function () {
    bonfireButton.classList.add('buttonActive')
    Sounds().bonfireAudioPlay()
  })
}
