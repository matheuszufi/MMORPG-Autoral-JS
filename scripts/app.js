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


const rat = document.getElementById('enemy-rat');
const ratLife = document.getElementById('rat-life');
ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`

loadEventListeners();

function loadEventListeners() {
    rat.addEventListener('click', atkRat);
}


function atkRat (atkInterval) {
        // COLOCAR NO MAXIMO 1 ATK (VARIOS CLIQUES = VARIOS ATAQUES)

    atkInterval = setInterval(enemyTargeted, `${player.atackSpeed}`);
    
    function enemyTargeted() {
    enemies.rat.life -= 2;
    ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`
    
        if(enemies.rat.life <= 0) {
            stopInterval();
           
            killRat();
        }

    }

}


function killRat() {
    rat.style.display = "none";
    changePosition();
    enemies.rat.life = enemies.rat.maxLife;
    ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`;
   
}

function changePosition() {
    rat.style.transform = `translate(-40px, -40px)`;
    rat.style.display = "block";
}

function stopInterval() {
    clearInterval(atkInterval);
}