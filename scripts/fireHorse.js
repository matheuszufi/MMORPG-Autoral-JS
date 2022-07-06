let fireHorse = {
    name: "Fire Horse",
    maxLife: 400,
    life: 400,
    xp: 400,
    atk: 4,
    coin: 120
}

const enemyFireHorse = document.createElement('div');
enemyFireHorse.setAttribute("id","enemy-fire-horse");
engine.appendChild(enemyFireHorse);

const divFireHorseName = document.createElement('div');
divFireHorseName.setAttribute("id","div-fire-horse-name");
divFireHorseName.innerHTML = `${fireHorse.name}`
enemyFireHorse.appendChild(divFireHorseName);

const divFireHorseLife = document.createElement('div');
divFireHorseLife.setAttribute("id","div-fire-horse-life");
enemyFireHorse.appendChild(divFireHorseLife);

const fireHorseMaxLife = document.createElement('div');
fireHorseMaxLife.setAttribute("id", "fire-horse-max-life");
divFireHorseLife.appendChild(fireHorseMaxLife);

const fireHorseLife = document.createElement('div');
fireHorseLife.setAttribute("id","fire-horse-life");
fireHorseMaxLife.appendChild(fireHorseLife);

const fireHorseImage = document.createElement('div');
fireHorseImage.setAttribute("id","fire-horse-image");

enemyFireHorse.appendChild(fireHorseImage);


// Posição no mapa
let fireHorsePosX = 1000;
let fireHorsePosY = 1000;

enemyFireHorse.style.transform = `translate(${fireHorsePosY}px,${fireHorsePosX}px)`;

// Posição do BG do personagem (PARA ANIMACAO)
let fireHorseBgPositionY = 0;
let fireHorseBgPositionX = 0;

// Animação do Sprite

//DOWN
function fireHorseAnimaDown() {
    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`;          
    fireHorseBgPositionX = 128;
    fireHorseBgPositionY = -64;
    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`;      
    setTimeout(fireHorseMidAnimaDown, 200);
};
function fireHorseMidAnimaDown() {
    fireHorseBgPositionX = 256;
    fireHorseBgPositionY = 256;
    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`; 
    setTimeout(fireHorseEndAnimaDown, 200);
};
function fireHorseEndAnimaDown() {
    fireHorseBgPositionX = 256;
    fireHorseBgPositionY = 0;
    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`; 
} 

//UP
function fireHorseAnimaUp() {
    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`;      
    fireHorseBgPositionX = 256;
    fireHorseBgPositionY = -64;
    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`;      
    
    setTimeout(fireHorseMidAnimaUp, 200);
};
function fireHorseMidAnimaUp() {
    fireHorseBgPositionX = 0;
    fireHorseBgPositionY = 256;
    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`; 
    setTimeout(fireHorseEndAnimaUp, 200);
}
function fireHorseEndAnimaUp() {
    fireHorseBgPositionX = 0;
    fireHorseBgPositionY = 0;
    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`;
}

//LEFT
function fireHorseAnimaLeft() {
    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`;      
    fireHorseBgPositionX = 64;
    fireHorseBgPositionY = -64;
    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`;      
    setTimeout(fireHorseMidAnimaLeft, 200);
};
function fireHorseMidAnimaLeft() {
    fireHorseBgPositionX = 64;
    fireHorseBgPositionY = 192;
    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`; 
    setTimeout(fireHorseEndAnimaLeft, 200);
}
function fireHorseEndAnimaLeft() {
    fireHorseBgPositionX = 192;
    fireHorseBgPositionY = 0;
    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`; 
}

//RIGHT
function fireHorseAnimaRight() {
    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`;      
    fireHorseBgPositionX = -64;
    fireHorseBgPositionY = -128;
    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`;     
    setTimeout(fireHorseMidAnimaRight, 200);
};
function fireHorseMidAnimaRight() {
    fireHorseBgPositionX = 64;
    fireHorseBgPositionY = -128;

    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`; 
    setTimeout(fireHorseEndAnimaRight, 200);
}
function fireHorseEndAnimaRight() {
    fireHorseBgPositionX = -64;
    fireHorseBgPositionY = 0;
    fireHorseImage.style.backgroundPosition = `${fireHorseBgPositionX}px ${fireHorseBgPositionY}px`; 
}



// Movimentação do Cavalo
setInterval(fireHorseWalk, 1000);

function fireHorseWalk() {
    let minFireHorse = 1;
    let maxFireHorse = 8;
    let randwalkFireHorse = Math.floor(Math.random() * (maxFireHorse - minFireHorse) + minFireHorse);

    if(randwalkFireHorse <= 2 && fireHorsePosY >= 80) {
        fireHorseAnimaLeft();
        fireHorsePosY = fireHorsePosY - 80;
        enemyFireHorse.style.transform = `translate(${fireHorsePosY}px,${fireHorsePosX}px)`;      
    } 

    if(randwalkFireHorse > 2 && randwalkFireHorse <= 4 && fireHorsePosX >= 50) {
        fireHorseAnimaUp();
        fireHorsePosX = fireHorsePosX - 50;
        enemyFireHorse.style.transform = `translate(${fireHorsePosY}px,${fireHorsePosX}px)`;
    }

    if(randwalkFireHorse > 4 && randwalkFireHorse <= 6 && fireHorsePosY < 7020) {
        fireHorseAnimaRight();
        fireHorsePosY = fireHorsePosY + 80;
        enemyFireHorse.style.transform = `translate(${fireHorsePosY}px,${fireHorsePosX}px)`;   
    }

    if(randwalkFireHorse > 6 && randwalkFireHorse <= 8 && fireHorsePosX < 4500) {
        fireHorseAnimaDown();
        fireHorsePosX = fireHorsePosX + 50;
        enemyFireHorse.style.transform = `translate(${fireHorsePosY}px,${fireHorsePosX}px)`;
    }
}

let fireHorseIsTag = false;

enemyFireHorse.addEventListener('click', targetFireHorse)

function targetFireHorse() {
    fireHorseIsTag = true;

    if(fireHorseIsTag) {
        attackFireHorse();
    }
}

function attackFireHorse() {
    fireHorse.life -= player.atackDamage;
    fireHorseLife.style.width = `${(fireHorse.life / fireHorse.maxLife) * 100}%`;

    if(fireHorse.life <= 0) {
        killFireHorse();
    }
}

function killFireHorse() {
    fireHorseIsTag = false;
    enemyFireHorse.style.display = "none";
    player.coins += fireHorse.coin;
    charCoins.innerHTML = `${player.coins}`

    fireHorseExpUp();
    setTimeout(spawnFireHorse, 5000);
}

function spawnFireHorse() {
    fireHorse.life = fireHorse.maxLife;
    fireHorseLife.style.width = `${(fireHorse.life / fireHorse.maxLife) * 100}%`;
    enemyFireHorse.style.display = "flex"; 
}

function fireHorseExpUp() {
    player.experience += fireHorse.xp;
    experienceOutput.innerHTML = player.experience;
    toExpUpBar.style.width = `${(player.experience / player.lvlup) * 100}%`
    expLevelBar.style.width = `${(player.experience / player.lvlup) * 100}%`


    if(player.experience >= player.lvlup) {
        levelUp();
    }
}
