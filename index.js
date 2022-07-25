/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const inputEl = document.getElementById("input-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

 

convertBtn.addEventListener("click", function(){
    
     let userValue = inputEl.value
    lengthEl.textContent = `${userValue} meters = ${Number(userValue).toFixed(2) * meterToFeet.toFixed(2)} feets `
    volumeEl.textContent = `${userValue} liters = ${Number(userValue).toFixed(2) * literToGallon.toFixed(2)} gallons`
    massEl.textContent = `${userValue} kilos = ${Number(userValue).toFixed(2) * Number(kiloToPound).toFixed(2)} pounds`
    
})

