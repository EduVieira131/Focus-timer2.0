export default function Sounds() {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
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
  }

  function coffeAudioPlay() {
    coffeAudio.play()
    coffeAudio.loop = true
  }

  function forestAudioPlay() {
    forestAudio.play()
    forestAudio.loop = true
  }

  function bonfireAudioPlay() {
    bonfireAudio.play()
    bonfireAudio.loop = true
  }

  return {
    pressButton,
    rainAudioPlay,
    coffeAudioPlay,
    forestAudioPlay,
    bonfireAudioPlay
  }
}
