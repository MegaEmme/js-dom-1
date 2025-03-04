console.log("Mike's bonus");

const lamp = document.getElementById('bulb');
console.log(lamp);

const pressHere = document.getElementById('button');
console.log(pressHere);
pressHere.addEventListener('click',function(){
    lamp.src="../img/yellow_lamp.png";
    pressHere.innerText = 'Spegni';
    pressHere.addEventListener('click',function(){
        lamp.src="../img/white_lamp.png";
        pressHere.innerText = 'Accendi';
    })
})



