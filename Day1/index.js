window.addEventListener('keydown', e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return //Stop the function from running where there is no audio
  audio.currentTime = 0 //Rewind to the start to allow multiples key/audio
  audio.play()
})
