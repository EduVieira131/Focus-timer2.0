import Timer from './timer.js'
import Events from './events.js'
import Sounds from './sounds.js'
import {
  minutesDisplay,
  secondsDisplay,
  playButton,
  pauseButton,
  addTimeButton,
  decreaseTimeButton,
} from './elements.js'

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  playButton,
  pauseButton,
  addTimeButton,
  decreaseTimeButton
})

Sounds()

Events(timer, Sounds)
