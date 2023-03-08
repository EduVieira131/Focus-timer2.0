export default function Sounds({
  forestVolume,
  rainVolume,
  coffeVolume,
  bonfireVolume
}) {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const endTimerAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  const rainAudio = new Audio('./assets/Chuva.wav')
  const coffeAudio = new Audio('./assets/Cafeteria.wav')
  const forestAudio = new Audio('./assets/Floresta.wav')
  const bonfireAudio = new Audio('./assets/Lareira.wav')

  function pressButton() {
    buttonPressAudio.play()
  }

  function rainAudioPlay() {
    rainAudio.play()
    rainAudio.loop = true
    rainAudio.volume = rainVolume.value / 100
  }

  function coffeAudioPlay() {
    coffeAudio.play()
    coffeAudio.loop = true
    coffeAudio.volume = coffeVolume.value / 100
  }

  function forestAudioPlay() {
    forestAudio.play()
    forestAudio.loop = true
    forestAudio.volume = forestVolume.value / 100
  }

  function bonfireAudioPlay() {
    bonfireAudio.play()
    bonfireAudio.loop = true
    bonfireAudio.volume = bonfireVolume.value / 100
  }

  return {
    pressButton,
    endTimerAudio,
    rainAudioPlay,
    coffeAudioPlay,
    forestAudioPlay,
    bonfireAudioPlay,
    rainAudio,
    coffeAudio,
    forestAudio,
    bonfireAudio
  }
}
