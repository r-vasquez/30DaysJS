function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return //Stop the function from running where there is no audio
  audio.currentTime = 0 //Rewind to the start to allow multiples key/audio
  audio.play()
  key.classList.add('pressed')
}

window.addEventListener('keydown', playSound)

function removeTransition(e) {
  if (e.propertyName !== 'transform') return // Skip if its not a transform
  this.classList.remove('pressed')
}

const keys = document.querySelectorAll('.key')

keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition)
})
