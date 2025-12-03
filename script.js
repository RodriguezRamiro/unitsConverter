const userInput = document.getElementById('user-input')
const convertBtn = document.getElementById('convertBtn')
const lengthOutput = document.getElementById('length-output')
const volumeOutput = document.getElementById('volume-output')
const massOutput = document.getElementById('mass-output')

const measurements = {
  length: 3.281,
  volume: 3.785,
  mass: 2.205,
}

convertBtn.addEventListener('click', function(){
  const unit = Number(userInput.value)
  const metersToFt = unit * measurements.length
  const feetToMt = unit / measurements.length
  lengthOutput.textContent = `${unit} Meters = ${metersToFt.toFixed(3)} Feet | ${unit} Feet = ${feetToMt.toFixed(3)} Meters`

})

convertBtn.addEventListener('click', function(){
  const unit = Number(userInput.value)
  const literstoGal = unit / measurements.volume
  const galToliters = unit * measurements.volume
  volumeOutput.textContent = `${unit} Liters = ${literstoGal.toFixed(3)} Gallons | ${unit} Gallons = ${galToliters.toFixed(3)} Liters`

})

convertBtn.addEventListener('click', function(){
 const unit = Number(userInput.value)
 const kiloToPounds = unit * measurements.mass
 const poundsToKilo = unit / measurements.mass
 massOutput.textContent = `${unit} Kilograms = ${kiloToPounds.toFixed(3)}
 Pounds | ${unit} Pounds = ${poundsToKilo.toFixed(3)} Kilograms`
})
 