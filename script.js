console.log('Mike');

const lamp = document.getElementById('bulb');
console.log(lamp);
const pressHere = document.getElementById('button');
console.log(pressHere);
pressHere.addEventListener('click',function(){
    lamp.src="img/yellow_lamp.png";
})