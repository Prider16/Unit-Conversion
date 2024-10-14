let value1 = document.getElementById("value");
let button = document.getElementById("convert");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

button.addEventListener("click",()=>{
    let num = value1.value;
    let lenghtm = num*3.28084;
    let lenghtf = num*0.3048;
    let volumel = num*0.264172;
    let volumeg = num*3.78541;
    let massk = num*2.20462;
    let massp = num*0.4536;
    length.textContent = (num +" meters = "+lenghtm+" foot | "+num+" foot = "+lenghtf+" meters");
    volume.textContent = (num +" liters = "+volumel+" gallons | "+num+" gallons = "+volumeg+" liters");
    mass.textContent = (num +" Kilograms = "+massp+" pounds | "+num+" pounds = "+massp+" Kilograms");
});
