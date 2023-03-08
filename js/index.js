import Timer from './timer.js'
import Events from './events.js'
import Sounds from './sounds.js'
import Themes from './themes.js'
import {
  body,
  span,
  controlsDisplay,
  soundsCards,
  minutesDisplay,
  secondsDisplay,
  playButton,
  pauseButton,
  addTimeButton,
  decreaseTimeButton,
  lightThemeButton,
  darkThemeButton,
  forestVolume,
  rainVolume,
  coffeVolume,
  bonfireVolume
} from './elements.js'

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  playButton,
  pauseButton,
  addTimeButton,
  decreaseTimeButton
})

const theme = Themes({
  body,
  span,
  controlsDisplay,
  soundsCards,
  lightThemeButton,
  darkThemeButton
})

const sounds = Sounds({
  forestVolume,
  rainVolume,
  coffeVolume,
  bonfireVolume
})

Events(timer, sounds, theme)
