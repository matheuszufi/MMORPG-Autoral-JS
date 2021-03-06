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

experienceOutput = document.getElementById('infos-number-character-experience');

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

// PLAYER MOVIMENT
    // PLAYER MOVIMENT
        // PLAYER MOVIMENT

let posY = 0;
let posX = 0;



let distanceX = posX - enemyPosX;
let distanceY = posY - enemyPosY;

let engineStartX = 9800; 
let engineStartY = 500; 

//
//
//
//
//
var bgpositionX = 0;
var bgpositionY = 0;

const playerImage = document.getElementById('player-img');
    //DOWN
    function animaDown() {
   
       playerImage.style.background = "url(../imgs/player/down1.png)"
       playerImage.style.backgroundRepeat = "no-repeat";
       playerImage.style.backgroundSize = "50px";
       setTimeout(playerAnimaDownMid, 300);
    };
    function playerAnimaDownMid () {
       playerImage.style.background = "url(../imgs/player/down2.png)"
       playerImage.style.backgroundRepeat = "no-repeat";
       playerImage.style.backgroundSize = "50px";
       setTimeout(playerAnimaDownEnd, 300);
    
    }
    function playerAnimaDownEnd () {
       playerImage.style.background = "url(../imgs/player/down3.png)"
       playerImage.style.backgroundRepeat = "no-repeat";
       playerImage.style.backgroundSize = "50px";
       playerIsWalking = false; 
    };

    //UP
    function animaUp() {
     
        playerImage.style.background = "url(../imgs/player/up1.png)"
       playerImage.style.backgroundRepeat = "no-repeat";
       playerImage.style.backgroundSize = "50px";
       setTimeout(playerAnimaUpMid, 300);
    };
    function playerAnimaUpMid () {
       playerImage.style.background = "url(../imgs/player/up2.png)"
       playerImage.style.backgroundRepeat = "no-repeat";
       playerImage.style.backgroundSize = "50px";
       setTimeout(playerAnimaUpEnd, 300);
    }
    function playerAnimaUpEnd () {
       playerImage.style.background = "url(../imgs/player/up3.png)"
       playerImage.style.backgroundRepeat = "no-repeat";
       playerImage.style.backgroundSize = "50px";  
       playerIsWalking = false;  
    };

    //LEFT
    function animaLeft() {
       
        playerImage.style.background = "url(../imgs/player/left1.png)"
        playerImage.style.backgroundRepeat = "no-repeat";
        playerImage.style.backgroundSize = "50px";
        setTimeout(playerAnimaLeftMid, 300);
     };
     function playerAnimaLeftMid () {
        playerImage.style.background = "url(../imgs/player/left2.png)"
        playerImage.style.backgroundRepeat = "no-repeat";
        playerImage.style.backgroundSize = "50px";
        setTimeout(playerAnimaLeftEnd, 300);
     }
     function playerAnimaLeftEnd () {
        playerImage.style.background = "url(../imgs/player/left3.png)"
        playerImage.style.backgroundRepeat = "no-repeat";
        playerImage.style.backgroundSize = "50px";   
        playerIsWalking = false; 
     };

    //RIGHT

    function animaRight() {
        playerImage.style.background = "url(../imgs/player/right1.png)"
        playerImage.style.backgroundRepeat = "no-repeat";
        playerImage.style.backgroundSize = "50px";
        setTimeout(playerAnimaRightMid, 300);
     };
     function playerAnimaRightMid () {
        playerImage.style.background = "url(../imgs/player/right2.png)"
        playerImage.style.backgroundRepeat = "no-repeat";
        playerImage.style.backgroundSize = "50px";
        setTimeout(playerAnimaRightEnd, 300);
     }
     function playerAnimaRightEnd () {
        playerImage.style.background = "url(../imgs/player/right3.png)"
        playerImage.style.backgroundRepeat = "no-repeat";
        playerImage.style.backgroundSize = "50px";  
        playerIsWalking = false; 
     };

// let playerIsWalking = false;

// if(playerIsWalking = false) {
    document.addEventListener('keydown', (event) => {

        btnA = "a";
        btnW = "w";
        btnD = "d";
        btnS = "s";
     
       if(event.key === btnA) {
            if(posY > 0){
              
                animaLeft();
                posY = posY - 80;
                engineStartY = engineStartY + 80;
                character.style.transform = `translate(${posY}px,${posX}px)`
                distanceY = posY - enemyPosY; 
                engine.style.marginLeft = `${engineStartY}px`; 
                // playerIsWalking = true;
            }
    
        } else if (event.key === btnW) {
            if(posX > 0){
                // playerIsWalking = true;
                animaUp();
                posX = posX - 50;
                engineStartX = engineStartX + 100;
                character.style.transform = `translate(${posY}px,${posX}px)`
                distanceX = posX - enemyPosX;
                engine.style.marginTop = `${engineStartX}px`; 
            }
    
        } else if (event.key === btnD) {
            if(posY < 9920){
          
                animaRight();
                posY = posY + 80;
                engineStartY = engineStartY - 80;
                character.style.transform = `translate(${posY}px,${posX}px)`                   
                distanceY = posY - enemyPosY;
                engine.style.marginLeft = `${engineStartY}px`; 
                // playerIsWalking = true;
            }
       
       } else if (event.key === btnS) {
            if(posX < 9920){
                // playerIsWalking = true;
                animaDown();
                posX = posX + 50;
                engineStartX = engineStartX - 100;
                character.style.transform = `translate(${posY}px,${posX}px)`
                distanceX = posX - enemyPosX;
                engine.style.marginTop = `${engineStartX}px`; 
            }
        } 
    });
// }


loadEventListeners();
function loadEventListeners() {

    shopBtn.addEventListener('click', openShop);
    shoppingCloseBtn.addEventListener('click', closeShop);
}

function killEnemy() {
    isTag = false;
    player.coins += enemies.rat.coin;
    charCoins.innerHTML = `${player.coins}`
    ratExpUp();
    randomCoin();
    enemies.rat.coin = randcoin;
    toExpUpBar.style.width = `${(player.experience / player.lvlup) * 100}%`
    expLevelBar.style.width = `${(player.experience / player.lvlup) * 100}%`
    enemies.rat.life = enemies.rat.maxLife;
    ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`
    rat.style.background = "none";
    //  $( "#loot-alert" ).fadeOut( "slow", function() {});
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
    toExpUpBar.style.width = `${(player.lvlup - player.experience) / player.lvlup}%`
    expLevelBar.style.width = `${(player.experience / player.lvlup) * 100}%`
    experienceOutput.innerHTML = player.experience;

}

function openShop() {
    shopping.style.display = "flex";
}

function closeShop() {
    shopping.style.display = "none";
}


// function slashEnemy () {
//     if (isTag && distanceX <= 50 && distanceX >= -50 && distanceY <= 80 && distanceY >= -80) {
//     enemies.rat.life -= player.atackDamage;
//     ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`;
//         $("#hit").css("animation", "animeHit 1s infinite");  // MESMO TEMPO DO ATAQUE 1000ms ou 1s
//     } else {
//         $("#hit").css("animation", "");
//     }
//     if (enemies.rat.life <= 0) {
//         killEnemy();
//         clearInterval(interval);
//         $("#hit").css("animation", "");
//     }
// }



// setInterval(ratAttack, 1000);

// function ratAttack() {

//     if (distanceX <= 50 && distanceX >= -50 && distanceY <= 80 && distanceY >= -80) {

//         $("#hit-player").css("animation", "animeHit 1s infinite");
//         hitPlayer.innerHTML = `-${enemies.rat.atk}`;
//     player.life = player.life - enemies.rat.atk;
//     pBarLife.style.width = `${(player.life / player.maxLife) * 100}%`;
//     characterLife.style.width = `${(player.life / player.maxLife) * 100}%`;
//     pOutputLife.innerHTML = `${player.life}`;

//     }  else {
//         $("#hit-players").css("animation", "");
//         hitPlayer.innerHTML = ``;
//     }
// }

// function ratExpUp() {
//     player.experience += enemies.rat.xp;
//     experienceOutput.innerHTML = player.experience;
    



// }

// if(player.experience >= player.lvlup) {
//     levelUp();
// }
