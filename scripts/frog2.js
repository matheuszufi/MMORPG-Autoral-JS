    let frog2 = {
        name: "Frog",
        maxLife: 40,
        life: 40,
        xp: 40,
        atk: 4,
        coin: 20
    }

    // enemies.push(frog2)

    const enemyFrog2 = document.createElement('div');
    enemyFrog2.setAttribute("id","enemy-frog");
    engine.appendChild(enemyFrog2);

    const divFrog2Name = document.createElement('div');
    divFrog2Name.setAttribute("id","div-frog-name");
    divFrog2Name.innerHTML = `${frog.name}`
    enemyFrog2.appendChild(divFrog2Name);

    const divFrog2Life = document.createElement('div');
    divFrog2Life.setAttribute("id","div-frog-life");
    enemyFrog2.appendChild(divFrog2Life);

    const frog2MaxLife = document.createElement('div');
    frog2MaxLife.setAttribute("id", "frog-max-life");
    divFrog2Life.appendChild(frog2MaxLife);

    const frog2Life = document.createElement('div');
    frog2Life.setAttribute("id","frog-life");
    frog2MaxLife.appendChild(frog2Life);

    const frog2Image = document.createElement('div');
    frog2Image.setAttribute("id","frog-image");
  
    enemyFrog2.appendChild(frog2Image);


// Posição no mapa
    let frog2PosX = 500;
    let frog2PosY = 200;

    enemyFrog2.style.transform = `translate(${frog2PosY}px,${frog2PosX}px)`;

// Posição do BG do personagem (PARA ANIMACAO)
    let frog2BgPositionY = 0;
    let frog2BgPositionX = 0;

// Animação do Sprite
    function frog2AnimaDown() {    
        frog2BgPositionX = 0;
        frog2BgPositionY = 64;
        frog2Image.style.backgroundPosition = `${frog2BgPositionX}px ${frog2BgPositionY}px`;      
    };

    function frog2AnimaUp() {
        frog2BgPositionX = 0;
        frog2BgPositionY = 0;
        frog2Image.style.backgroundPosition = `${frog2BgPositionX}px ${frog2BgPositionY}px`; 
    };

    function frog2AnimaLeft() {
        frog2BgPositionX = 64;
        frog2BgPositionY = 0;
        frog2Image.style.backgroundPosition = `${frog2BgPositionX}px ${frog2BgPositionY}px`; 
    };

    function frog2AnimaRight() {
        frog2BgPositionX = 64;
        frog2BgPositionY = 64;
        frog2Image.style.backgroundPosition = `${frog2BgPositionX}px ${frog2BgPositionY}px`; 
    };

// Movimentação do Sapo
    setInterval(frog2Walk, 1200);

    function frog2Walk() {
        let minFrog2 = 1;
        let maxFrog2 = 8;
        let randwalkFrog2 = Math.floor(Math.random() * (maxFrog2 - minFrog2) + minFrog2);

        if(randwalkFrog2 <= 2 && frog2PosY >= 80) {
            frog2AnimaRight();
            frog2PosY = frog2PosY - 80;
            enemyFrog2.style.transform = `translate(${frog2PosY}px,${frog2PosX}px)`;      
        } 

        if(randwalkFrog2 > 2 && randwalkFrog2 <= 4 && frog2PosX >= 50) {
            frog2AnimaUp();
            frog2PosX = frog2PosX - 50;
            enemyFrog2.style.transform = `translate(${frog2PosY}px,${frog2PosX}px)`;
        }

        if(randwalkFrog2 > 4 && randwalkFrog2 <= 6 && frog2PosY < 7020) {
            frog2AnimaLeft();
            frog2PosY = frog2PosY + 80;
            enemyFrog2.style.transform = `translate(${frog2PosY}px,${frog2PosX}px)`;   
        }

        if(randwalkFrog2 > 6 && randwalkFrog2 <= 8 && frog2PosX < 4500) {
            frog2AnimaDown();
            frog2PosX = frog2PosX + 50;
            enemyFrog2.style.transform = `translate(${frog2PosY}px,${frog2PosX}px)`;
        }
    }

    let frog2IsTag = false;

    enemyFrog2.addEventListener('click', targetFrog2)

    function targetFrog2() {
        frog2IsTag = true;

        if(frog2IsTag) {
            attackFrog2();
        }
    }

    function attackFrog2() {
        frog2.life -= player.atackDamage;
        frog2Life.style.width = `${(frog2.life / frog2.maxLife) * 100}%`;

        if(frog2.life <= 0) {
            killFrog2();
        }
    }

    function killFrog2() {
        frog2IsTag = false;
        enemyFrog2.style.display = "none";
        player.coins += frog2.coin;
        charCoins.innerHTML = `${player.coins}`;
         
        frog2ExpUp();
        setTimeout(spawnFrog2, 5000);
    }

    function spawnFrog2() {
        frog2.life = frog2.maxLife;
        frog2Life.style.width = `${(frog2.life / frog2.maxLife) * 100}%`;
        enemyFrog2.style.display = "flex"; 
    }


    
function frog2ExpUp() {
    player.experience += frog2.xp + 60;
    experienceOutput.innerHTML = player.experience;
    toExpUpBar.style.width = `${(player.experience / player.lvlup) * 100}%`
    expLevelBar.style.width = `${(player.experience / player.lvlup) * 100}%`


    if(player.experience >= player.lvlup) {
        levelUp();
    }

}