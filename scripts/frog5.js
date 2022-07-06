    let frog5 = {
        name: "Frog",
        maxLife: 40,
        life: 40,
        xp: 40,
        atk: 4,
        coin: 20
    }

    // enemies.push(frog5)

    const enemyFrog5 = document.createElement('div');
    enemyFrog5.setAttribute("id","enemy-frog");
    engine.appendChild(enemyFrog5);

    const divFrog5Name = document.createElement('div');
    divFrog5Name.setAttribute("id","div-frog-name");
    divFrog5Name.innerHTML = `${frog.name}`
    enemyFrog5.appendChild(divFrog5Name);

    const divFrog5Life = document.createElement('div');
    divFrog5Life.setAttribute("id","div-frog-life");
    enemyFrog5.appendChild(divFrog5Life);

    const frog5MaxLife = document.createElement('div');
    frog5MaxLife.setAttribute("id", "frog-max-life");
    divFrog5Life.appendChild(frog5MaxLife);

    const frog5Life = document.createElement('div');
    frog5Life.setAttribute("id","frog-life");
    frog5MaxLife.appendChild(frog5Life);

    const frog5Image = document.createElement('div');
    frog5Image.setAttribute("id","frog-image");
  
    enemyFrog5.appendChild(frog5Image);


// Posição no mapa
    let frog5PosX = 1900;
    let frog5PosY = 2800;

    enemyFrog5.style.transform = `translate(${frog5PosY}px,${frog5PosX}px)`;

// Posição do BG do personagem (PARA ANIMACAO)
    let frog5BgPositionY = 0;
    let frog5BgPositionX = 0;

// Animação do Sprite
function frog5AnimaDown() {    
    frog5BgPositionX = 128;
    frog5BgPositionY = 64;
    frog5Image.style.backgroundPosition = `${frog5BgPositionX}px ${frog5BgPositionY}px`;      
    setTimeout(frog5AnimaDownEnd, 200);
};
function frog5AnimaDownEnd () {
    frog5BgPositionX = 0;
    frog5BgPositionY = 64;
    frog5Image.style.backgroundPosition = `${frog5BgPositionX}px ${frog5BgPositionY}px`;      
}

function frog5AnimaUp() {
    frog5BgPositionX = 128;
    frog5BgPositionY = 0;
    frog5Image.style.backgroundPosition = `${frog5BgPositionX}px ${frog5BgPositionY}px`; 
    setTimeout(frog5AnimaUpEnd, 200);
};
function frog5AnimaUpEnd () {
    frog5BgPositionX = 0;
    frog5BgPositionY = 0;
    frog5Image.style.backgroundPosition = `${frog5BgPositionX}px ${frog5BgPositionY}px`;
}

function frog5AnimaLeft() {
    frog5BgPositionX = 64;
    frog5BgPositionY = 0;

    frog5Image.style.backgroundPosition = `${frog5BgPositionX}px ${frog5BgPositionY}px`; 
    setTimeout(frog5AnimaLeftEnd, 200);
};
function frog5AnimaLeftEnd () {
    frog5BgPositionX = 64;
    frog5BgPositionY = 128;
    frog5Image.style.backgroundPosition = `${frog5BgPositionX}px ${frog5BgPositionY}px`;
} 

function frog5AnimaRight() {
    frog5BgPositionX = 64;
    frog5BgPositionY = 64;
    frog5Image.style.backgroundPosition = `${frog5BgPositionX}px ${frog5BgPositionY}px`; 
    setTimeout(frog5AnimaRightEnd, 200);
};
function frog5AnimaRightEnd () {
    frog5BgPositionX = 64;
    frog5BgPositionY = 192;
    frog5Image.style.backgroundPosition = `${frog5BgPositionX}px ${frog5BgPositionY}px`;
} 

// Movimentação do Sapo
    setInterval(frog5Walk, 400);

    function frog5Walk() {
        let minFrog5 = 1;
        let maxFrog5 = 8;
        let randwalkFrog5 = Math.floor(Math.random() * (maxFrog5 - minFrog5) + minFrog5);

        if(randwalkFrog5 <= 2 && frog5PosY >= 80) {
            frog5AnimaRight();
            frog5PosY = frog5PosY - 80;
            enemyFrog5.style.transform = `translate(${frog5PosY}px,${frog5PosX}px)`;      
        } 

        if(randwalkFrog5 > 2 && randwalkFrog5 <= 4 && frog5PosX >= 50) {
            frog5AnimaUp();
            frog5PosX = frog5PosX - 50;
            enemyFrog5.style.transform = `translate(${frog5PosY}px,${frog5PosX}px)`;
        }

        if(randwalkFrog5 > 4 && randwalkFrog5 <= 6 && frog5PosY < 7020) {
            frog5AnimaLeft();
            frog5PosY = frog5PosY + 80;
            enemyFrog5.style.transform = `translate(${frog5PosY}px,${frog5PosX}px)`;   
        }

        if(randwalkFrog5 > 6 && randwalkFrog5 <= 8 && frog5PosX < 4500) {
            frog5AnimaDown();
            frog5PosX = frog5PosX + 50;
            enemyFrog5.style.transform = `translate(${frog5PosY}px,${frog5PosX}px)`;
        }
    }

    let frog5IsTag = false;

    enemyFrog5.addEventListener('click', targetFrog5)

    function targetFrog5() {
        frog5IsTag = true;

        if(frog5IsTag) {
            attackFrog5();
        }
    }

    function attackFrog5() {
        frog5.life -= player.atackDamage;
        frog5Life.style.width = `${(frog5.life / frog5.maxLife) * 100}%`;

        if(frog5.life <= 0) {
            killFrog5();
        }
    }

    function killFrog5() {
        frog5IsTag = false;
        enemyFrog5.style.display = "none";
        player.coins += frog5.coin;
        charCoins.innerHTML = `${player.coins}`;
         
        frog5ExpUp();
        setTimeout(spawnFrog5, 5000);
    }

    function spawnFrog5() {
        frog5.life = frog5.maxLife;
        frog5Life.style.width = `${(frog5.life / frog5.maxLife) * 100}%`;
        enemyFrog5.style.display = "flex"; 
    }


    
function frog5ExpUp() {
    player.experience += frog5.xp + 60;
    experienceOutput.innerHTML = player.experience;
    toExpUpBar.style.width = `${(player.experience / player.lvlup) * 100}%`
    expLevelBar.style.width = `${(player.experience / player.lvlup) * 100}%`


    if(player.experience >= player.lvlup) {
        levelUp();
    }

}