const convertBtn = document.getElementById('convertBtn')
const unitInput = document.getElementById('units-input')

convertBtn.addEventListener('click', function(){
  let unit = Number(unitInput.value)
  console.log(unit)
})