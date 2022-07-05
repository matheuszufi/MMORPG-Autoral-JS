    let frog3 = {
        name: "Frog",
        maxLife: 40,
        life: 40,
        xp: 40,
        atk: 4,
        coin: 20
    }

    // enemies.push(frog3)

    const enemyFrog3 = document.createElement('div');
    enemyFrog3.setAttribute("id","enemy-frog");
    engine.appendChild(enemyFrog3);

    const divFrog3Name = document.createElement('div');
    divFrog3Name.setAttribute("id","div-frog-name");
    divFrog3Name.innerHTML = `${frog.name}`
    enemyFrog3.appendChild(divFrog3Name);

    const divFrog3Life = document.createElement('div');
    divFrog3Life.setAttribute("id","div-frog-life");
    enemyFrog3.appendChild(divFrog3Life);

    const frog3MaxLife = document.createElement('div');
    frog3MaxLife.setAttribute("id", "frog-max-life");
    divFrog3Life.appendChild(frog3MaxLife);

    const frog3Life = document.createElement('div');
    frog3Life.setAttribute("id","frog-life");
    frog3MaxLife.appendChild(frog3Life);

    const frog3Image = document.createElement('div');
    frog3Image.setAttribute("id","frog-image");
  
    enemyFrog3.appendChild(frog3Image);


// Posição no mapa
    let frog3PosX = 100;
    let frog3PosY = 500;

    enemyFrog3.style.transform = `translate(${frog3PosY}px,${frog3PosX}px)`;

// Posição do BG do personagem (PARA ANIMACAO)
    let frog3BgPositionY = 0;
    let frog3BgPositionX = 0;

// Animação do Sprite
    function frog3AnimaDown() {    
        frog3BgPositionX = 0;
        frog3BgPositionY = 64;
        frog3Image.style.backgroundPosition = `${frog3BgPositionX}px ${frog3BgPositionY}px`;      
    };

    function frog3AnimaUp() {
        frog3BgPositionX = 0;
        frog3BgPositionY = 0;
        frog3Image.style.backgroundPosition = `${frog3BgPositionX}px ${frog3BgPositionY}px`; 
    };

    function frog3AnimaLeft() {
        frog3BgPositionX = 64;
        frog3BgPositionY = 0;
        frog3Image.style.backgroundPosition = `${frog3BgPositionX}px ${frog3BgPositionY}px`; 
    };

    function frog3AnimaRight() {
        frog3BgPositionX = 64;
        frog3BgPositionY = 64;
        frog3Image.style.backgroundPosition = `${frog3BgPositionX}px ${frog3BgPositionY}px`; 
    };

// Movimentação do Sapo
    setInterval(frogWalk, 400);

    function frogWalk() {
        let minFrog3 = 1;
        let maxFrog3 = 8;
        let randwalkFrog3 = Math.floor(Math.random() * (maxFrog3 - minFrog3) + minFrog3);

        if(randwalkFrog3 <= 2 && frog3PosY >= 80) {
            frog3AnimaRight();
            frog3PosY = frog3PosY - 80;
            enemyFrog3.style.transform = `translate(${frog3PosY}px,${frog3PosX}px)`;      
        } 

        if(randwalkFrog3 > 2 && randwalkFrog3 <= 4 && frog3PosX >= 50) {
            frog3AnimaUp();
            frog3PosX = frog3PosX - 50;
            enemyFrog3.style.transform = `translate(${frog3PosY}px,${frog3PosX}px)`;
        }

        if(randwalkFrog3 > 4 && randwalkFrog3 <= 6 && frog3PosY < 7020) {
            frog3AnimaLeft();
            frog3PosY = frog3PosY + 80;
            enemyFrog3.style.transform = `translate(${frog3PosY}px,${frog3PosX}px)`;   
        }

        if(randwalkFrog3 > 6 && randwalkFrog3 <= 8 && frog3PosX < 4500) {
            frog3AnimaDown();
            frog3PosX = frog3PosX + 50;
            enemyFrog3.style.transform = `translate(${frog3PosY}px,${frog3PosX}px)`;
        }
    }

    let frog3IsTag = false;

    enemyFrog3.addEventListener('click', targetFrog3)

    function targetFrog3() {
        frog3IsTag = true;

        if(frog3IsTag) {
            attackFrog3();
        }
    }

    function attackFrog3() {
        frog3.life -= player.atackDamage;
        frog3Life.style.width = `${(frog3.life / frog3.maxLife) * 100}%`;

        if(frog3.life <= 0) {
            killFrog3();
        }
    }

    function killFrog3() {
        frog3IsTag = false;
        enemyFrog3.style.display = "none";
        player.coins += frog3.coin;
        charCoins.innerHTML = `${player.coins}`;
         
        frog3ExpUp();
        setTimeout(spawnFrog3, 5000);
    }

    function spawnFrog3() {
        frog3.life = frog3.maxLife;
        frog3Life.style.width = `${(frog3.life / frog3.maxLife) * 100}%`;
        enemyFrog3.style.display = "flex"; 
    }


    
function frog3ExpUp() {
    player.experience += frog3.xp + 60;
    experienceOutput.innerHTML = player.experience;
    toExpUpBar.style.width = `${(player.experience / player.lvlup) * 100}%`
    expLevelBar.style.width = `${(player.experience / player.lvlup) * 100}%`


    if(player.experience >= player.lvlup) {
        levelUp();
    }

}