import {
  playButton,
  pauseButton,
  resetButton,
  addTimeButton,
  decreaseTimeButton,
  themeButton,
  forestButton,
  rainButton,
  coffeButton,
  bonfireButton,
  forestVolume,
  rainVolume,
  coffeVolume,
  bonfireVolume
} from './elements.js'

export default function Events(timer, sounds, theme) {
  playButton.addEventListener('click', function () {
    sounds.pressButton()
    timer.countdown()
    pauseButton.classList.remove('hide')
    playButton.classList.add('hide')
  })

  pauseButton.addEventListener('click', function () {
    sounds.pressButton()
    timer.pause()
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
  })

  resetButton.addEventListener('click', function () {
    sounds.pressButton()
    timer.reset()
  })

  addTimeButton.addEventListener('click', function () {
    sounds.pressButton()
    timer.addTime()
  })

  decreaseTimeButton.addEventListener('click', function () {
    sounds.pressButton()
    timer.decreaseTime()
  })

  forestButton.addEventListener('click', function () {
    forestButton.classList.add('buttonActive')
    sounds.forestAudioPlay()
  })

  forestVolume.addEventListener('change', function() {
    sounds.forestAudio.volume = this.value / 100
  })

  rainButton.addEventListener('click', function () {
    rainButton.classList.add('buttonActive')
    sounds.rainAudioPlay()
  })
  rainVolume.addEventListener('change', function() {
    sounds.rainAudio.volume = this.value / 100
  })

  coffeButton.addEventListener('click', function () {
    coffeButton.classList.add('buttonActive')
    sounds.coffeAudioPlay()
  })

  coffeVolume.addEventListener('change', function() {
    sounds.coffeAudio.volume = this.value / 100
  })

  bonfireButton.addEventListener('click', function () {
    bonfireButton.classList.add('buttonActive')
    sounds.bonfireAudioPlay()
  })

  bonfireVolume.addEventListener('change', function() {
    sounds.bonfireAudio.volume = this.value / 100
  })

  themeButton.addEventListener('click', function () {
    theme.changeTheme()
  })
}
