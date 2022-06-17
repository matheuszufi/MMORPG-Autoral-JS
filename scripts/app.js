const character = document.getElementById('player');

const rat = document.getElementById('enemy-rat');
const ratLife = document.getElementById('rat-life');
ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`




    // ENEMY POSITION

eMaxPosX = 400; 
eMaxPosY = 720; 
eMinPosX = 0;
eMinPosY = 0;

let enemyPosX = 450;
let enemyPosY = 0;

rat.style.transform= `translate(${enemyPosY}px,${enemyPosX}px)`;



// PLAYER MOVIMENT
    // PLAYER MOVIMENT
        // PLAYER MOVIMENT

let posY = 0;
let posX = 0;



let distanceX = posX - enemyPosX;
let distanceY = posY - enemyPosY;
 isNear();
function isNear() {


document.addEventListener('keydown', (event) => {

        btnA = "a";
        btnW = "w";
        btnD = "d";
        btnS = "s";
 
   if(event.key === btnA) {
        if(posY > 0){
            posY = posY - 80;
            character.style.transform = `translate(${posY}px,${posX}px)`
            distanceY = posY - enemyPosY;
            if (distanceX <= 50 && distanceX >= -50 && distanceY <= 80 && distanceY >= -80) {
                atackEnemy();       
            } else {

            }
        }

    } else if (event.key === btnW) {
        if(posX > 0){
            posX = posX - 50;
            character.style.transform = `translate(${posY}px,${posX}px)`
            distanceX = posX - enemyPosX;
            if (distanceX <= 50 && distanceX >= -50 && distanceY <= 80 && distanceY >= -80) {
                atackEnemy();       
            } else {

            }
        }

    } else if (event.key === btnD) {
        if(posY < 720){
            posY = posY + 80;
            character.style.transform = `translate(${posY}px,${posX}px)`                   
            distanceY = posY - enemyPosY;
            if (distanceX <= 50 && distanceX >= -50 && distanceY <= 80 && distanceY >= -80) {
                atackEnemy();       
            } else {

            }
        }
   
   } else if (event.key === btnS) {
        if(posX < 420){
            posX = posX + 50;
            character.style.transform = `translate(${posY}px,${posX}px)`
            distanceX = posX - enemyPosX;
            if (distanceX <= 50 && distanceX >= -50 && distanceY <= 80 && distanceY >= -80) {
                atackEnemy();       
            } else {
                
            }
        }
    }

});
}

let targeted = false;

loadEventListeners();
function loadEventListeners() {
    rat.addEventListener('click', targetEnemy);
}

function targetEnemy() {
    targeted = true;
    if (targeted = true){
    rat.style.border = "1px solid red";
    }
}

function atackEnemy() {
    if (targeted === true) {
   
        enemies.rat.life -= player.atackDamage;
        ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`
        setInterval(slashEnemy, 2000);

        // if(enemies.rat.life <= 0) {
        //     killEnemy();
        // }
    }
}

function slashEnemy () {
    if (targeted === true) {
    enemies.rat.life -= player.atackDamage;
    ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`
    }
}


// function killEnemy() {
//     targeted = false;
//     rat.style.border = "none";
//     enemies.rat.life = enemies.rat.maxLife;
//     ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`
// }

