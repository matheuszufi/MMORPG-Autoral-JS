    let frog4 = {
        name: "Frog",
        maxLife: 40,
        life: 40,
        xp: 40,
        atk: 4,
        coin: 20
    }

    // enemies.push(frog4)

    const enemyFrog4 = document.createElement('div');
    enemyFrog4.setAttribute("id","enemy-frog");
    engine.appendChild(enemyFrog4);

    const divFrog4Name = document.createElement('div');
    divFrog4Name.setAttribute("id","div-frog-name");
    divFrog4Name.innerHTML = `${frog.name}`
    enemyFrog4.appendChild(divFrog4Name);

    const divFrog4Life = document.createElement('div');
    divFrog4Life.setAttribute("id","div-frog-life");
    enemyFrog4.appendChild(divFrog4Life);

    const frog4MaxLife = document.createElement('div');
    frog4MaxLife.setAttribute("id", "frog-max-life");
    divFrog4Life.appendChild(frog4MaxLife);

    const frog4Life = document.createElement('div');
    frog4Life.setAttribute("id","frog-life");
    frog4MaxLife.appendChild(frog4Life);

    const frog4Image = document.createElement('div');
    frog4Image.setAttribute("id","frog-image");
  
    enemyFrog4.appendChild(frog4Image);


// Posição no mapa
    let frog4PosX = 100;
    let frog4PosY = 1800;

    enemyFrog4.style.transform = `translate(${frog4PosY}px,${frog4PosX}px)`;

// Posição do BG do personagem (PARA ANIMACAO)
    let frog4BgPositionY = 0;
    let frog4BgPositionX = 0;

// Animação do Sprite
    function frog4AnimaDown() {    
        frog4BgPositionX = 0;
        frog4BgPositionY = 64;
        frog4Image.style.backgroundPosition = `${frog4BgPositionX}px ${frog4BgPositionY}px`;      
    };

    function frog4AnimaUp() {
        frog4BgPositionX = 0;
        frog4BgPositionY = 0;
        frog4Image.style.backgroundPosition = `${frog4BgPositionX}px ${frog4BgPositionY}px`; 
    };

    function frog4AnimaLeft() {
        frog4BgPositionX = 64;
        frog4BgPositionY = 0;
        frog4Image.style.backgroundPosition = `${frog4BgPositionX}px ${frog4BgPositionY}px`; 
    };

    function frog4AnimaRight() {
        frog4BgPositionX = 64;
        frog4BgPositionY = 64;
        frog4Image.style.backgroundPosition = `${frog4BgPositionX}px ${frog4BgPositionY}px`; 
    };

// Movimentação do Sapo
    setInterval(frog4Walk, 400);

    function frog4Walk() {
        let minFrog4 = 1;
        let maxFrog4 = 8;
        let randwalkFrog4 = Math.floor(Math.random() * (maxFrog4 - minFrog4) + minFrog4);

        if(randwalkFrog4 <= 2 && frog4PosY >= 80) {
            frog4AnimaRight();
            frog4PosY = frog4PosY - 80;
            enemyFrog4.style.transform = `translate(${frog4PosY}px,${frog4PosX}px)`;      
        } 

        if(randwalkFrog4 > 2 && randwalkFrog4 <= 4 && frog4PosX >= 50) {
            frog4AnimaUp();
            frog4PosX = frog4PosX - 50;
            enemyFrog4.style.transform = `translate(${frog4PosY}px,${frog4PosX}px)`;
        }

        if(randwalkFrog4 > 4 && randwalkFrog4 <= 6 && frog4PosY < 7020) {
            frog4AnimaLeft();
            frog4PosY = frog4PosY + 80;
            enemyFrog4.style.transform = `translate(${frog4PosY}px,${frog4PosX}px)`;   
        }

        if(randwalkFrog4 > 6 && randwalkFrog4 <= 8 && frog4PosX < 4500) {
            frog4AnimaDown();
            frog4PosX = frog4PosX + 50;
            enemyFrog4.style.transform = `translate(${frog4PosY}px,${frog4PosX}px)`;
        }
    }

    let frog4IsTag = false;

    enemyFrog4.addEventListener('click', targetFrog4)

    function targetFrog4() {
        frog4IsTag = true;

        if(frog4IsTag) {
            attackFrog4();
        }
    }

    function attackFrog4() {
        frog4.life -= player.atackDamage;
        frog4Life.style.width = `${(frog4.life / frog4.maxLife) * 100}%`;

        if(frog4.life <= 0) {
            killFrog4();
        }
    }

    function killFrog4() {
        frog4IsTag = false;
        enemyFrog4.style.display = "none";
        player.coins += frog4.coin;
        charCoins.innerHTML = `${player.coins}`;
         
        frog4ExpUp();
        setTimeout(spawnFrog4, 5000);
    }

    function spawnFrog4() {
        frog4.life = frog4.maxLife;
        frog4Life.style.width = `${(frog4.life / frog4.maxLife) * 100}%`;
        enemyFrog4.style.display = "flex"; 
    }


    
function frog4ExpUp() {
    player.experience += frog4.xp + 60;
    experienceOutput.innerHTML = player.experience;
    toExpUpBar.style.width = `${(player.experience / player.lvlup) * 100}%`
    expLevelBar.style.width = `${(player.experience / player.lvlup) * 100}%`


    if(player.experience >= player.lvlup) {
        levelUp();
    }

}