let fireHorse2 = {
    name: "Fire Horse",
    maxLife: 400,
    life: 400,
    xp: 400,
    atk: 4,
    coin: 120
}

const enemyFireHorse2 = document.createElement('div');
enemyFireHorse2.setAttribute("id","enemy-fire-horse");
engine.appendChild(enemyFireHorse2);

const divFireHorse2Name = document.createElement('div');
divFireHorse2Name.setAttribute("id","div-fire-horse-name");
divFireHorse2Name.innerHTML = `${fireHorse2.name}`
enemyFireHorse2.appendChild(divFireHorse2Name);

const divFireHorse2Life = document.createElement('div');
divFireHorse2Life.setAttribute("id","div-fire-horse-life");
enemyFireHorse2.appendChild(divFireHorse2Life);

const fireHorse2MaxLife = document.createElement('div');
fireHorse2MaxLife.setAttribute("id", "fire-horse-max-life");
divFireHorse2Life.appendChild(fireHorse2MaxLife);

const fireHorse2Life = document.createElement('div');
fireHorse2Life.setAttribute("id","fire-horse-life");
fireHorse2MaxLife.appendChild(fireHorse2Life);

const fireHorse2Image = document.createElement('div');
fireHorse2Image.setAttribute("id","fire-horse-image");

enemyFireHorse2.appendChild(fireHorse2Image);


// Posição no mapa
let fireHorse2PosX = 1000;
let fireHorse2PosY = 1000;

enemyFireHorse2.style.transform = `translate(${fireHorse2PosY}px,${fireHorse2PosX}px)`;

// Posição do BG do personagem (PARA ANIMACAO)
let fireHorse2BgPositionY = 0;
let fireHorse2BgPositionX = 0;

// Animação do Sprite
//DOWN
function fireHorse2AnimaDown() {
    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`;          
    fireHorse2BgPositionX = 128;
    fireHorse2BgPositionY = -64;
    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`;      
    setTimeout(fireHorse2MidAnimaDown, 200);
};
function fireHorse2MidAnimaDown() {
    fireHorse2BgPositionX = 256;
    fireHorse2BgPositionY = 256;
    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`; 
    setTimeout(fireHorse2EndAnimaDown, 200);
};
function fireHorse2EndAnimaDown() {
    fireHorse2BgPositionX = 256;
    fireHorse2BgPositionY = 0;
    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`; 
} 

//UP
function fireHorse2AnimaUp() {
    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`;      
    fireHorse2BgPositionX = 256;
    fireHorse2BgPositionY = -64;
    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`;      
    
    setTimeout(fireHorse2MidAnimaUp, 200);
};
function fireHorse2MidAnimaUp() {
    fireHorse2BgPositionX = 0;
    fireHorse2BgPositionY = 256;
    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`; 
    setTimeout(fireHorse2EndAnimaUp, 200);
}
function fireHorse2EndAnimaUp() {
    fireHorse2BgPositionX = 0;
    fireHorse2BgPositionY = 0;
    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`;
}

//LEFT
function fireHorse2AnimaLeft() {
    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`;      
    fireHorse2BgPositionX = 64;
    fireHorse2BgPositionY = -64;
    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`;      
    setTimeout(fireHorse2MidAnimaLeft, 200);
};
function fireHorse2MidAnimaLeft() {
    fireHorse2BgPositionX = 64;
    fireHorse2BgPositionY = 192;
    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`; 
    setTimeout(fireHorse2EndAnimaLeft, 200);
}
function fireHorse2EndAnimaLeft() {
    fireHorse2BgPositionX = 192;
    fireHorse2BgPositionY = 0;
    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`; 
}

//RIGHT
function fireHorse2AnimaRight() {
    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`;      
    fireHorse2BgPositionX = -64;
    fireHorse2BgPositionY = -128;
    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`;     
    setTimeout(fireHorse2MidAnimaRight, 200);
};
function fireHorse2MidAnimaRight() {
    fireHorse2BgPositionX = 64;
    fireHorse2BgPositionY = -128;

    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`; 
    setTimeout(fireHorse2EndAnimaRight, 200);
}
function fireHorse2EndAnimaRight() {
    fireHorse2BgPositionX = -64;
    fireHorse2BgPositionY = 0;
    fireHorse2Image.style.backgroundPosition = `${fireHorse2BgPositionX}px ${fireHorse2BgPositionY}px`; 
}


// Movimentação do Cavalo
setInterval(fireHorse2Walk, 1000);

function fireHorse2Walk() {
    let minFireHorse2 = 1;
    let maxFireHorse2 = 8;
    let randwalkFireHorse2 = Math.floor(Math.random() * (maxFireHorse2 - minFireHorse2) + minFireHorse2);

    if(randwalkFireHorse2 <= 2 && fireHorse2PosY >= 80) {
        fireHorse2AnimaLeft();
        fireHorse2PosY = fireHorse2PosY - 80;
        enemyFireHorse2.style.transform = `translate(${fireHorse2PosY}px,${fireHorse2PosX}px)`;      
    } 

    if(randwalkFireHorse2 > 2 && randwalkFireHorse2 <= 4 && fireHorse2PosX >= 50) {
        fireHorse2AnimaUp();
        fireHorse2PosX = fireHorse2PosX - 50;
        enemyFireHorse2.style.transform = `translate(${fireHorse2PosY}px,${fireHorse2PosX}px)`;
    }

    if(randwalkFireHorse2 > 4 && randwalkFireHorse2 <= 6 && fireHorse2PosY < 7020) {
        fireHorse2AnimaRight();
        fireHorse2PosY = fireHorse2PosY + 80;
        enemyFireHorse2.style.transform = `translate(${fireHorse2PosY}px,${fireHorse2PosX}px)`;   
    }

    if(randwalkFireHorse2 > 6 && randwalkFireHorse2 <= 8 && fireHorse2PosX < 4500) {
        fireHorse2AnimaDown();
        fireHorse2PosX = fireHorse2PosX + 50;
        enemyFireHorse2.style.transform = `translate(${fireHorse2PosY}px,${fireHorse2PosX}px)`;
    }
}

let fireHorse2IsTag = false;

enemyFireHorse2.addEventListener('click', targetFireHorse2)

function targetFireHorse2() {
    fireHorse2IsTag = true;

    if(fireHorse2IsTag) {
        attackFireHorse2();
    }
}

function attackFireHorse2() {
    fireHorse2.life -= player.atackDamage;
    fireHorse2Life.style.width = `${(fireHorse2.life / fireHorse2.maxLife) * 100}%`;

    if(fireHorse2.life <= 0) {
        killFireHorse2();
    }
}

function killFireHorse2() {
    fireHorse2IsTag = false;
    enemyFireHorse2.style.display = "none";
    player.coins += fireHorse2.coin;
    charCoins.innerHTML = `${player.coins}`

    fireHorse2ExpUp();
    setTimeout(spawnFireHorse2, 5000);
}

function spawnFireHorse2() {
    fireHorse2.life = fireHorse2.maxLife;
    fireHorse2Life.style.width = `${(fireHorse2.life / fireHorse2.maxLife) * 100}%`;
    enemyFireHorse2.style.display = "flex"; 
}

function fireHorse2ExpUp() {
    player.experience += fireHorse2.xp;
    experienceOutput.innerHTML = player.experience;
    toExpUpBar.style.width = `${(player.experience / player.lvlup) * 100}%`
    expLevelBar.style.width = `${(player.experience / player.lvlup) * 100}%`


    if(player.experience >= player.lvlup) {
        levelUp();
    }

}