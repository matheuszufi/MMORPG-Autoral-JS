    let frog = {
        name: "Frog",
        maxLife: 40,
        life: 40,
        xp: 40,
        atk: 4,
        coin: 20
    }
   
    const enemyFrog = document.createElement('div');
    enemyFrog.setAttribute("id","enemy-frog");
    engine.appendChild(enemyFrog);

    const divFrogName = document.createElement('div');
    divFrogName.setAttribute("id","div-frog-name");
    divFrogName.innerHTML = `${frog.name}`
    enemyFrog.appendChild(divFrogName);

    const divFrogLife = document.createElement('div');
    divFrogLife.setAttribute("id","div-frog-life");
    enemyFrog.appendChild(divFrogLife);

    const frogMaxLife = document.createElement('div');
    frogMaxLife.setAttribute("id", "frog-max-life");
    divFrogLife.appendChild(frogMaxLife);

    const frogLife = document.createElement('div');
    frogLife.setAttribute("id","frog-life");
    frogMaxLife.appendChild(frogLife);

    const frogImage = document.createElement('div');
    frogImage.setAttribute("id","frog-image");
  
    enemyFrog.appendChild(frogImage);


// Posição no mapa
    let frogPosX = 500;
    let frogPosY = 200;

    enemyFrog.style.transform = `translate(${frogPosY}px,${frogPosX}px)`;

// Posição do BG do personagem (PARA ANIMACAO)
    let frogBgPositionY = 0;
    let frogBgPositionX = 0;

// Animação do Sprite
    function frogAnimaDown() {    
        frogBgPositionX = 0;
        frogBgPositionY = 64;
        frogImage.style.backgroundPosition = `${frogBgPositionX}px ${frogBgPositionY}px`;      
    };

    function frogAnimaUp() {
        frogBgPositionX = 0;
        frogBgPositionY = 0;
        frogImage.style.backgroundPosition = `${frogBgPositionX}px ${frogBgPositionY}px`; 
    };

    function frogAnimaLeft() {
        frogBgPositionX = 64;
        frogBgPositionY = 0;
        frogImage.style.backgroundPosition = `${frogBgPositionX}px ${frogBgPositionY}px`; 
    };

    function frogAnimaRight() {
        frogBgPositionX = 64;
        frogBgPositionY = 64;
        frogImage.style.backgroundPosition = `${frogBgPositionX}px ${frogBgPositionY}px`; 
    };

// Movimentação do Sapo
    setInterval(frogWalk, 1200);

    function frogWalk() {
        let minFrog = 1;
        let maxFrog = 8;
        let randwalkFrog = Math.floor(Math.random() * (maxFrog - minFrog) + minFrog);

        if(randwalkFrog <= 2 && frogPosY >= 80) {
            frogAnimaRight();
            frogPosY = frogPosY - 80;
            enemyFrog.style.transform = `translate(${frogPosY}px,${frogPosX}px)`;      
        } 

        if(randwalkFrog > 2 && randwalkFrog <= 4 && frogPosX >= 50) {
            frogAnimaUp();
            frogPosX = frogPosX - 50;
            enemyFrog.style.transform = `translate(${frogPosY}px,${frogPosX}px)`;
        }

        if(randwalkFrog > 4 && randwalkFrog <= 6 && frogPosY < 7020) {
            frogAnimaLeft();
            frogPosY = frogPosY + 80;
            enemyFrog.style.transform = `translate(${frogPosY}px,${frogPosX}px)`;   
        }

        if(randwalkFrog > 6 && randwalkFrog <= 8 && frogPosX < 4500) {
            frogAnimaDown();
            frogPosX = frogPosX + 50;
            enemyFrog.style.transform = `translate(${frogPosY}px,${frogPosX}px)`;
        }
    }

    let frogIsTag = false;

    enemyFrog.addEventListener('click', targetFrog)

    function targetFrog() {
        frogIsTag = true;

        if(frogIsTag) {
            attackFrog();
        }
    }

    function attackFrog() {
        frog.life -= player.atackDamage;
        frogLife.style.width = `${(frog.life / frog.maxLife) * 100}%`;

        if(frog.life <= 0) {
            killFrog();
        }
    }

    function killFrog() {
        frogIsTag = false;
        enemyFrog.style.display = "none";
        player.coins += frog.coin;
        charCoins.innerHTML = `${player.coins}`;
         
        frogExpUp();
        setTimeout(spawnFrog, 5000);
    }

    function spawnFrog() {
        frog.life = frog.maxLife;
        frogLife.style.width = `${(frog.life / frog.maxLife) * 100}%`;
        enemyFrog.style.display = "flex"; 
    }


    
function frogExpUp() {
    player.experience += frog.xp + 60;
    experienceOutput.innerHTML = player.experience;
    toExpUpBar.style.width = `${(player.experience / player.lvlup) * 100}%`
    expLevelBar.style.width = `${(player.experience / player.lvlup) * 100}%`


    if(player.experience >= player.lvlup) {
        levelUp();
    }

}