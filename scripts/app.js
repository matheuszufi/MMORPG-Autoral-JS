const character = document.getElementById('player');






document.addEventListener('keydown', (event) => {
    btnA = "a";
    btnW = "w";
    btnD = "d";
    btnS = "s";

    let posX = 0;
    let posY = 0;
 
   if(event.key === btnA) {
    alert('funcionandos');
   } else if (event.key === btnW) {

   } else if (event.key === btnD) {
    character.style.left = `${posX + 10}px`  
   } else if (event.key === btnS) {
       posY++
    character.style.top = `${posY + 10}px`  
   }

});