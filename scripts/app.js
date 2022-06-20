const character = document.getElementById('player');
const characterLife = document.getElementById('player-life');

const totalToExpUpBar = document.getElementById('exp-to-lvl-up-experience');
const expLevelBar = document.getElementById('exp-progress');
const toExpUpBar = document.getElementById('exp-progress-experience');
const outputLevel = document.getElementById('infos-number-character-level');
outputLevel.innerHTML = `${player.level}`;

const lootAlert = document.getElementById("loot-alert");

const charCoins = document.getElementById('character-coins-output');
charCoins.innerHTML = `${player.coins}`;

toExpUpBar.style.width = `${(player.experience / player.lvlup) * 100}%`;
expLevelBar.style.width = `${(player.experience / player.lvlup) * 100}%`;

const rat = document.getElementById('enemy-rat');
const ratLife = document.getElementById('rat-life');
ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`;

const engine = document.getElementById('engine');
const shopBtn = document.getElementById('shop-img');
const shopping = document.getElementById('shopping');
const shoppingCloseBtn = document.getElementById('shopping-close-btn');

    // ENEMY POSITION

eMaxPosX = 400; 
eMaxPosY = 720; 
eMinPosX = 0;
eMinPosY = 0;

let enemyPosX = 450;
let enemyPosY = 720;

rat.style.transform= `translate(${enemyPosY}px,${enemyPosX}px)`;

// PLAYER MOVIMENT
    // PLAYER MOVIMENT
        // PLAYER MOVIMENT

let posY = 0;
let posX = 0;



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
    shopBtn.addEventListener('click', openShop);
    shoppingCloseBtn.addEventListener('click', closeShop);
}
isTag = false;
let interval;

function targetEnemy() {
    isTag = true;
    rat.style.border = "1px solid red";
    slashEnemy();
 
    interval = setInterval(slashEnemy, 1000);   


 
   
}


const hitPlayer = document.getElementById('hit-player');
const hit = document.getElementById('hit');


hit.innerHTML = `-${player.atackDamage}`

function slashEnemy () {

    isTag = true;
  


    if (isTag && distanceX <= 50 && distanceX >= -50 && distanceY <= 80 && distanceY >= -80) {
    enemies.rat.life -= player.atackDamage;
    ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`;
   
        $("#hit").css("animation", "animeHit 1s infinite");  // MESMO TEMPO DO ATAQUE 1000ms ou 1s

    } else {
        $("#hit").css("animation", "");
    }
    
    if (enemies.rat.life <= 0) {
        killEnemy();
        clearInterval(interval);

        $("#hit").css("animation", "");
      
    }
}




function killEnemy() {
    isTag = false;
    player.coins += enemies.rat.coin;
    charCoins.innerHTML = `${player.coins}`
    changePosition();
    ratExpUp();
    randomCoin();
    enemies.rat.coin = randcoin;
    toExpUpBar.style.width = `${(player.experience / player.lvlup) * 100}%`
    expLevelBar.style.width = `${(player.experience / player.lvlup) * 100}%`

    enemies.rat.life = enemies.rat.maxLife;
    ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`
    rat.style.border = "none";


    //  $( "#loot-alert" ).fadeOut( "slow", function() {});

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

        $("#hit-player").css("animation", "animeHit 1s infinite");
        hitPlayer.innerHTML = `-${enemies.rat.atk}`;
    player.life = player.life - enemies.rat.atk;
    pBarLife.style.width = `${(player.life / player.maxLife) * 100}%`;
    characterLife.style.width = `${(player.life / player.maxLife) * 100}%`;
    pOutputLife.innerHTML = `${player.life}`;

    }  else {
        $("#hit-players").css("animation", "");
        hitPlayer.innerHTML = ``;
    }
}

experienceOutput = document.getElementById('infos-number-character-experience');

function ratExpUp() {
    player.experience += enemies.rat.xp;
    experienceOutput.innerHTML = player.experience;
    


    if(player.experience >= player.lvlup) {
        levelUp();
    }
}

function levelUp() {
    player.maxLife += 5;
    player.maxMagic += 10;
    player.life = player.maxLife
    player.magics = player.maxMagic
    player.experience = 0;

    pOutputLife.innerHTML = `${player.life}`
    pBarLife.style.width = `${(player.life / player.maxLife) * 100}%`;
    characterLife.style.width = `${(player.life / player.maxLife) * 100}%`;

    pOutputMana.innerHTML = `${player.magic}`
    pBarMana.style.width = `${(player.magic / player.maxMagic) * 100}%`;
    
    player.level++;
    outputLevel.innerHTML = `${player.level}`
    player.lvlup = ((100 * player.level) * 2 ) - (player.level * 50);
    // toExpUpBar.style.width = `${(player.lvlup - player.experience) / player.lvlup}%`
}


function openShop() {
  
    shopping.style.display = "flex";
    shopping.style.position = "absolute";
}

function closeShop() {
    engine.style.display = "flex";
    shopping.style.display = "none";
}
