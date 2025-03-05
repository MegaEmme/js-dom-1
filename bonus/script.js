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

    // invece di classlist.remove/add posso usare(fuori dal ciclo if):
    // lamp.classList.toggle('off'); 
    // che praticamente se la classe off è presente la rimuove, se non è presente la aggiunge 

})










