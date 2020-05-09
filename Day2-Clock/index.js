const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')
console.log('TCL: secondHand', secondHand)

function setDate() {
  const now = new Date()

  const seconds = now.getSeconds()
  const secondsDegrees = (seconds / 60) * 360 // Turning the second into a degree and adding the 90 deg offset
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  if (seconds === 59 || seconds === 0) {
    secondHand.classList.remove('transition')
  } else {
    secondHand.classList.add('transition')
  }

  const mins = now.getMinutes()
  const minsDegree = (mins / 60) * 360
  minHand.style.transform = `rotate(${minsDegree}deg)`
  if (mins === 59 || mins === 0) {
    minHand.classList.remove('transition')
  } else {
    minHand.classList.add('transition')
  }

  const hour = now.getHours()
  const hourDegree = (hour / 12) * 360
  hourHand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(setDate, 1000)
