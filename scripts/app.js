const character = document.getElementById('player');

// PLAYER MOVIMENT
    // PLAYER MOVIMENT
        // PLAYER MOVIMENT

let posY = 0;
let posX = 0;
document.addEventListener('keydown', (event) => {
    btnA = "a";
    btnW = "w";
    btnD = "d";
    btnS = "s";
 
   if(event.key === btnA) {
        if(posX > 0){
            posX = posX - 80;
            character.style.transform = `translate(${posX}px,${posY}px)`
        }

    } else if (event.key === btnW) {
        if(posY > 0){
            posY = posY - 50;
            character.style.transform = `translate(${posX}px,${posY}px)`
        }

    } else if (event.key === btnD) {
        if(posX < 720){
            posX = posX + 80;
            character.style.transform = `translate(${posX}px,${posY}px)`                   
        }
   
   } else if (event.key === btnS) {
        if(posY < 450){
            posY = posY + 50;
            character.style.transform = `translate(${posX}px,${posY}px)`
   
        }
    }

});