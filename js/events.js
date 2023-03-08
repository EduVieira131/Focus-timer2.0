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
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
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
    if (forestButton.classList.contains('buttonActive')) {
      sounds.forestAudio.pause()
      forestButton.classList.remove('buttonActive')
    } else {
      sounds.forestAudioPlay()
      forestButton.classList.add('buttonActive')
    }
  })

  forestVolume.addEventListener('change', function () {
    sounds.forestAudio.volume = this.value / 100
  })

  rainButton.addEventListener('click', function () {
    if (rainButton.classList.contains('buttonActive')) {
      sounds.rainAudio.pause()
      rainButton.classList.remove('buttonActive')
    } else {
      sounds.rainAudioPlay()
      rainButton.classList.add('buttonActive')
    }
  })

  rainVolume.addEventListener('change', function () {
    sounds.rainAudio.volume = this.value / 100
  })

  coffeButton.addEventListener('click', function () {
    if (coffeButton.classList.contains('buttonActive')) {
      sounds.coffeAudio.pause()
      coffeButton.classList.remove('buttonActive')
    } else {
      sounds.coffeAudioPlay()
      coffeButton.classList.add('buttonActive')
    }
  })

  coffeVolume.addEventListener('change', function () {
    sounds.coffeAudio.volume = this.value / 100
  })

  bonfireButton.addEventListener('click', function () {
    if (bonfireButton.classList.contains('buttonActive')) {
      sounds.bonfireAudio.pause()
      bonfireButton.classList.remove('buttonActive')
    } else {
      sounds.bonfireAudioPlay()
      bonfireButton.classList.add('buttonActive')
    }
  })

  bonfireVolume.addEventListener('change', function () {
    sounds.bonfireAudio.volume = this.value / 100
  })

  themeButton.addEventListener('click', function () {
    theme.changeTheme()
  })
}
