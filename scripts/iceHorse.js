let iceHorse = {
    name: "Ice Horse",
    maxLife: 400,
    life: 400,
    xp: 400,
    atk: 4,
    coin: 120
}

const enemyIceHorse = document.createElement('div');
enemyIceHorse.setAttribute("id","enemy-ice-horse");
engine.appendChild(enemyIceHorse);

const divIceHorseName = document.createElement('div');
divIceHorseName.setAttribute("id","div-ice-horse-name");
divIceHorseName.innerHTML = `${iceHorse.name}`
enemyIceHorse.appendChild(divIceHorseName);

const divIceHorseLife = document.createElement('div');
divIceHorseLife.setAttribute("id","div-ice-horse-life");
enemyIceHorse.appendChild(divIceHorseLife);

const iceHorseMaxLife = document.createElement('div');
iceHorseMaxLife.setAttribute("id", "ice-horse-max-life");
divIceHorseLife.appendChild(iceHorseMaxLife);

const iceHorseLife = document.createElement('div');
iceHorseLife.setAttribute("id","ice-horse-life");
iceHorseMaxLife.appendChild(iceHorseLife);

const iceHorseImage = document.createElement('div');
iceHorseImage.setAttribute("id","ice-horse-image");

enemyIceHorse.appendChild(iceHorseImage);


// Posição no mapa
let iceHorsePosX = 1000;
let iceHorsePosY = 1000;

enemyIceHorse.style.transform = `translate(${iceHorsePosY}px,${iceHorsePosX}px)`;

// Posição do BG do personagem (PARA ANIMACAO)
let iceHorseBgPositionY = 0;
let iceHorseBgPositionX = 0;

// Animação do Sprite
function iceHorseAnimaDown() {    
    iceHorseBgPositionX = -128;
    iceHorseBgPositionY = 0;
    iceHorseImage.style.backgroundPosition = `${iceHorseBgPositionX}px ${iceHorseBgPositionY}px`;      
};

function iceHorseAnimaUp() {
    iceHorseBgPositionX = 0;
    iceHorseBgPositionY = 0;
    iceHorseImage.style.backgroundPosition = `${iceHorseBgPositionX}px ${iceHorseBgPositionY}px`;      
};

function iceHorseAnimaLeft() {
    iceHorseBgPositionX = 64;
    iceHorseBgPositionY = -64;
    iceHorseImage.style.backgroundPosition = `${iceHorseBgPositionX}px ${iceHorseBgPositionY}px`;      
};

function iceHorseAnimaRight() {
    iceHorseBgPositionX = 64;
    iceHorseBgPositionY = -128;
    iceHorseImage.style.backgroundPosition = `${iceHorseBgPositionX}px ${iceHorseBgPositionY}px`;     
};

// Movimentação do Cavalo
setInterval(iceHorseWalk, 1000);

function iceHorseWalk() {
    let minIceHorse = 1;
    let maxIceHorse = 8;
    let randwalkIceHorse = Math.floor(Math.random() * (maxIceHorse - minIceHorse) + minIceHorse);

    if(randwalkIceHorse <= 2 && iceHorsePosY >= 80) {
        iceHorseAnimaLeft();
        iceHorsePosY = iceHorsePosY - 80;
        enemyIceHorse.style.transform = `translate(${iceHorsePosY}px,${iceHorsePosX}px)`;      
    } 

    if(randwalkIceHorse > 2 && randwalkIceHorse <= 4 && iceHorsePosX >= 50) {
        iceHorseAnimaUp();
        iceHorsePosX = iceHorsePosX - 50;
        enemyIceHorse.style.transform = `translate(${iceHorsePosY}px,${iceHorsePosX}px)`;
    }

    if(randwalkIceHorse > 4 && randwalkIceHorse <= 6 && iceHorsePosY < 7020) {
        iceHorseAnimaRight();
        iceHorsePosY = iceHorsePosY + 80;
        enemyIceHorse.style.transform = `translate(${iceHorsePosY}px,${iceHorsePosX}px)`;   
    }

    if(randwalkIceHorse > 6 && randwalkIceHorse <= 8 && iceHorsePosX < 4500) {
        iceHorseAnimaDown();
        iceHorsePosX = iceHorsePosX + 50;
        enemyIceHorse.style.transform = `translate(${iceHorsePosY}px,${iceHorsePosX}px)`;
    }
}

let iceHorseIsTag = false;

enemyIceHorse.addEventListener('click', targetIceHorse)

function targetIceHorse() {
    iceHorseIsTag = true;

    if(iceHorseIsTag) {
        attackIceHorse();
    }
}

function attackIceHorse() {
    iceHorse.life -= player.atackDamage;
    iceHorseLife.style.width = `${(iceHorse.life / iceHorse.maxLife) * 100}%`;

    if(iceHorse.life <= 0) {
        killIceHorse();
    }
}

function killIceHorse() {
    iceHorseIsTag = false;
    enemyIceHorse.style.display = "none";
    player.coins += iceHorse.coin;
    charCoins.innerHTML = `${player.coins}`

    iceHorseExpUp();
    setTimeout(spawnIceHorse, 5000);
}

function spawnIceHorse() {
    iceHorse.life = iceHorse.maxLife;
    iceHorseLife.style.width = `${(iceHorse.life / iceHorse.maxLife) * 100}%`;
    enemyIceHorse.style.display = "flex"; 
}

function iceHorseExpUp() {
    player.experience += iceHorse.xp;
    experienceOutput.innerHTML = player.experience;
    toExpUpBar.style.width = `${(player.experience / player.lvlup) * 100}%`
    expLevelBar.style.width = `${(player.experience / player.lvlup) * 100}%`


    if(player.experience >= player.lvlup) {
        levelUp();
    }

}