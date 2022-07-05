let iceHorse2 = {
    name: "Ice Horse",
    maxLife: 400,
    life: 400,
    xp: 400,
    atk: 4,
    coin: 120
}

const enemyIceHorse2 = document.createElement('div');
enemyIceHorse2.setAttribute("id","enemy-ice-horse");
engine.appendChild(enemyIceHorse2);

const divIceHorse2Name = document.createElement('div');
divIceHorse2Name.setAttribute("id","div-ice-horse-name");
divIceHorse2Name.innerHTML = `${iceHorse2.name}`
enemyIceHorse2.appendChild(divIceHorse2Name);

const divIceHorse2Life = document.createElement('div');
divIceHorse2Life.setAttribute("id","div-ice-horse-life");
enemyIceHorse2.appendChild(divIceHorse2Life);

const iceHorse2MaxLife = document.createElement('div');
iceHorse2MaxLife.setAttribute("id", "ice-horse-max-life");
divIceHorse2Life.appendChild(iceHorse2MaxLife);

const iceHorse2Life = document.createElement('div');
iceHorse2Life.setAttribute("id","ice-horse-life");
iceHorse2MaxLife.appendChild(iceHorse2Life);

const iceHorse2Image = document.createElement('div');
iceHorse2Image.setAttribute("id","ice-horse-image");

enemyIceHorse2.appendChild(iceHorse2Image);


// Posição no mapa
let iceHorse2PosX = 1400;
let iceHorse2PosY = 1000;

enemyIceHorse2.style.transform = `translate(${iceHorse2PosY}px,${iceHorse2PosX}px)`;

// Posição do BG do personagem (PARA ANIMACAO)
let iceHorse2BgPositionY = 128;
let iceHorse2BgPositionX = 64;

iceHorse2Image.style.backgroundPosition = `${iceHorse2BgPositionX}px ${iceHorse2BgPositionY}px`;     

// Animação do Sprite
function iceHorse2AnimaDown() {    
    iceHorse2BgPositionX = 128;
    iceHorse2BgPositionY = 64;
    iceHorse2Image.style.backgroundPosition = `${iceHorse2BgPositionX}px ${iceHorse2BgPositionY}px`;      
};

function iceHorse2AnimaUp() {
    iceHorse2BgPositionX = 256;
    iceHorse2BgPositionY = 64;
    iceHorse2Image.style.backgroundPosition = `${iceHorse2BgPositionX}px ${iceHorse2BgPositionY}px`;      
};

function iceHorse2AnimaLeft() {
    iceHorse2BgPositionX = 64;
    iceHorse2BgPositionY = 64;
    iceHorse2Image.style.backgroundPosition = `${iceHorse2BgPositionX}px ${iceHorse2BgPositionY}px`;      
};

function iceHorse2AnimaRight() {
    iceHorse2BgPositionX = 192;
    iceHorse2BgPositionY = 64;
    iceHorse2Image.style.backgroundPosition = `${iceHorse2BgPositionX}px ${iceHorse2BgPositionY}px`;     
};

// Movimentação do Cavalo
setInterval(iceHorse2Walk, 1000);

function iceHorse2Walk() {
    let minIceHorse2 = 1;
    let maxIceHorse2 = 8;
    let randwalkIceHorse2 = Math.floor(Math.random() * (maxIceHorse2 - minIceHorse2) + minIceHorse2);

    if(randwalkIceHorse2 <= 2 && iceHorse2PosY >= 80) {
        iceHorse2AnimaLeft();
        iceHorse2PosY = iceHorse2PosY - 80;
        enemyIceHorse2.style.transform = `translate(${iceHorse2PosY}px,${iceHorse2PosX}px)`;      
    } 

    if(randwalkIceHorse2 > 2 && randwalkIceHorse2 <= 4 && iceHorse2PosX >= 50) {
        iceHorse2AnimaUp();
        iceHorse2PosX = iceHorse2PosX - 50;
        enemyIceHorse2.style.transform = `translate(${iceHorse2PosY}px,${iceHorse2PosX}px)`;
    }

    if(randwalkIceHorse2 > 4 && randwalkIceHorse2 <= 6 && iceHorse2PosY < 7020) {
        iceHorse2AnimaRight();
        iceHorse2PosY = iceHorse2PosY + 80;
        enemyIceHorse2.style.transform = `translate(${iceHorse2PosY}px,${iceHorse2PosX}px)`;   
    }

    if(randwalkIceHorse2 > 6 && randwalkIceHorse2 <= 8 && iceHorse2PosX < 4500) {
        iceHorse2AnimaDown();
        iceHorse2PosX = iceHorse2PosX + 50;
        enemyIceHorse2.style.transform = `translate(${iceHorse2PosY}px,${iceHorse2PosX}px)`;
    }
}

let iceHorse2IsTag = false;

enemyIceHorse2.addEventListener('click', targetIceHorse2)

function targetIceHorse2() {
    iceHorse2IsTag = true;

    if(iceHorse2IsTag) {
        attackIceHorse2();
    }
}

function attackIceHorse2() {
    iceHorse2.life -= player.atackDamage;
    iceHorse2Life.style.width = `${(iceHorse2.life / iceHorse2.maxLife) * 100}%`;

    if(iceHorse2.life <= 0) {
        killIceHorse2();
    }
}

function killIceHorse2() {
    iceHorse2IsTag = false;
    enemyIceHorse2.style.display = "none";
    player.coins += iceHorse2.coin;
    charCoins.innerHTML = `${player.coins}`

    iceHorse2ExpUp();
    setTimeout(spawnIceHorse2, 5000);
}

function spawnIceHorse2() {
    iceHorse2.life = iceHorse2.maxLife;
    iceHorse2Life.style.width = `${(iceHorse2.life / iceHorse2.maxLife) * 100}%`;
    enemyIceHorse2.style.display = "flex"; 
}

function iceHorse2ExpUp() {
    player.experience += iceHorse2.xp;
    experienceOutput.innerHTML = player.experience;
    toExpUpBar.style.width = `${(player.experience / player.lvlup) * 100}%`
    expLevelBar.style.width = `${(player.experience / player.lvlup) * 100}%`


    if(player.experience >= player.lvlup) {
        levelUp();
    }

}