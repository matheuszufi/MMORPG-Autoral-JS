const character = document.getElementById('player');

const rat = document.getElementById('enemy-rat');
const ratLife = document.getElementById('rat-life');
ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`


const posXe = Math.floor(Math.random() * (450 - 0) + 1);
const posYe = Math.floor(Math.random() * (700 - 0) + 1);

changePosition();

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
        if(posY > 0){
            posY = posY - 80;
            character.style.transform = `translate(${posY}px,${posX}px)`
        }

    } else if (event.key === btnW) {
        if(posX > 0){
            posX = posX - 50;
            character.style.transform = `translate(${posY}px,${posX}px)`
        }

    } else if (event.key === btnD) {
        if(posY < 720){
            posY = posY + 80;
            character.style.transform = `translate(${posY}px,${posX}px)`                   
        }
   
   } else if (event.key === btnS) {
        if(posX < 420){
            posX = posX + 50;
            character.style.transform = `translate(${posY}px,${posX}px)`
   
        }
    }

    let distanceX = (posX - posXe);
    let distanceY = (posY - posYe);

    console.log(distanceX, distanceY);
    
 
    if (distanceX < 100 && distanceX > -100 && distanceY < 100 && distanceY > -100) {
        atackRat();
    }

});

function atackRat() {
    // rat.addEventListener('click', atkRat);
    rat.addEventListener('click', hurtRat);
}

function hurtRat () {
 
    enemies.rat.life -= 2;
    ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`;

    if (enemies.rat.life <= 0) {
        killRat();
        changePosition();
    }
}


function changePosition() {

     const posYe2 = Math.floor(Math.random() * (720 - 0) + 1);
     const posXe2 = Math.floor(Math.random() * (450 - 0) + 1);

    rat.style.top = `${posXe}px`;
    rat.style.left = `${posYe}px`;
}
  


function killRat() {
enemies.rat.life = enemies.rat.maxLife;
changePosition2();
}

function changePosition2() {

    const posYe2 = Math.floor(Math.random() * (720 - 0) + 1);
    const posXe2 = Math.floor(Math.random() * (450 - 0) + 1);

   rat.style.top = `${posXe}px`;
   rat.style.left = `${posYe}px`;
}