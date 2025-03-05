console.log("Mike's bonus");

const lamp = document.getElementById('bulb');
console.log(lamp);

const pressHere = document.getElementById('button');
console.log(pressHere);

pressHere.addEventListener('click',function(){
    
    if(lamp.classList.contains('off')){
        lamp.classList.remove('off');
        console.log('Acceso');
        lamp.src="../img/yellow_lamp.png"; 
        lamp.alt='Acceso';
        pressHere.innerText = 'Spegni';
    } else { 
        lamp.classList.add('off');
        console.log('Spento');
        lamp.src="../img/white_lamp.png"; 
        lamp.alt='Spento'; 
        pressHere.innerText = 'Accendi';
    }  

})










// if (pressHere.innerText = 'Accendi'){
//     pressHere.addEventListener('click',function(){
//         lamp.src="../img/yellow_lamp.png";
//         pressHere.innerText = 'Spegni';
//     })
// }



// let lightOff = pressHere.addEventListener('click',function(){
//     lamp.src="../img/white_lamp.png";
//     pressHere.innerText = 'Accendi';
// })


