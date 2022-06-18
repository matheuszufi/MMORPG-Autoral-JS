const character = document.getElementById('player');
const characterLife = document.getElementById('player-life');


const rat = document.getElementById('enemy-rat');
const ratLife = document.getElementById('rat-life');
ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`

    // ENEMY POSITION

eMaxPosX = 400; 
eMaxPosY = 720; 
eMinPosX = 0;
eMinPosY = 0;

let enemyPosX = 0;
let enemyPosY = 80;

rat.style.transform= `translate(${enemyPosY}px,${enemyPosX}px)`;

// PLAYER MOVIMENT
    // PLAYER MOVIMENT
        // PLAYER MOVIMENT

let posY = 0;
let posX = 0;

let targeted = false;


let distanceX = posX - enemyPosX;
let distanceY = posY - enemyPosY;



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
        }

    } else if (event.key === btnW) {
        if(posX > 0){
            posX = posX - 50;
            character.style.transform = `translate(${posY}px,${posX}px)`
            distanceX = posX - enemyPosX;
        }

    } else if (event.key === btnD) {
        if(posY < 720){
            posY = posY + 80;
            character.style.transform = `translate(${posY}px,${posX}px)`                   
            distanceY = posY - enemyPosY;
        }
   
   } else if (event.key === btnS) {
        if(posX < 420){
            posX = posX + 50;
            character.style.transform = `translate(${posY}px,${posX}px)`
            distanceX = posX - enemyPosX;
        }
    } 


});

loadEventListeners();
function loadEventListeners() {
    rat.addEventListener('click', targetEnemy);
  
}

let interval;

function targetEnemy() {

    slashEnemy();
    interval = setInterval(slashEnemy, 1000);  
    

    rat.removeEventListener('click', targetEnemy);
   
}


function slashEnemy () {
    rat.style.border = "1px solid red";
    

    if (distanceX <= 50 && distanceX >= -50 && distanceY <= 80 && distanceY >= -80) {
    enemies.rat.life = enemies.rat.life - player.atackDamage;
    ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`
     
   
}
    
    if (enemies.rat.life <= 0) {
        killEnemy();
        clearInterval(interval);

      
    }
}


function killEnemy() {
    changePosition();
    rat.addEventListener('click', targetEnemy);
    enemies.rat.life = enemies.rat.maxLife;
    ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`
   rat.style.border = "none";
}

function changePosition() {
    max = 10;
    min = 0;
    let eposY = Math.floor(Math.random() * (max - min));
    let eposX = Math.floor(Math.random() * (max - min));
    enemyPosX = eposX * 50;
    enemyPosY = eposY * 80;
    distanceX = posX - enemyPosX;
    distanceY = posY - enemyPosY;
    rat.style.transform = `translate(${enemyPosY}px, ${enemyPosX}px`;   
    
}


setInterval(ratAttack, 1000);

function ratAttack() {
    
    if (distanceX <= 50 && distanceX >= -50 && distanceY <= 80 && distanceY >= -80) {
   
    player.life = player.life - enemies.rat.atk;
    pBarLife.style.width = `${(player.life / player.maxLife) * 100}%`;
    characterLife.style.width = `${(player.life / player.maxLife) * 100}%`;
    pOutputLife.innerHTML = `${player.life}`;
    }  
}
