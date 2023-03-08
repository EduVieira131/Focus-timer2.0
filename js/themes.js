export default function Themes({
  body,
  span,
  controlsDisplay,
  soundsCards,
  lightThemeButton,
  darkThemeButton,
}) {
  function changeTheme(){
    body.classList.toggle('darkTheme')
    span.classList.toggle('darkTheme')
    controlsDisplay.classList.toggle('darkTheme')
    soundsCards.classList.toggle('darkTheme')

    lightThemeButton.classList.toggle('hide')
    darkThemeButton.classList.toggle('hide')
  }

  return {
    changeTheme
  }
}
