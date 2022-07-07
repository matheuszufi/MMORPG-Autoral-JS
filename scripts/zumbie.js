    let zumbie = {
        name: "Zumbie",
        maxLife: 200,
        life: 20,
        xp: 400,
        atk: 4,
        coin: 30
    }

    // enemies.push(zumbie)

    const enemyZumbie = document.createElement('div');
    enemyZumbie.setAttribute("id","enemy-zumbie");
    engine.appendChild(enemyZumbie);

    const divZumbieName = document.createElement('div');
    divZumbieName.setAttribute("id","div-zumbie-name");
    divZumbieName.innerHTML = `${zumbie.name}`
    enemyZumbie.appendChild(divZumbieName);

    const divZumbieLife = document.createElement('div');
    divZumbieLife.setAttribute("id","div-zumbie-life");
    enemyZumbie.appendChild(divZumbieLife);

    const zumbieMaxLife = document.createElement('div');
    zumbieMaxLife.setAttribute("id", "zumbie-max-life");
    divZumbieLife.appendChild(zumbieMaxLife);

    const zumbieLife = document.createElement('div');
    zumbieLife.setAttribute("id","zumbie-life");
    zumbieMaxLife.appendChild(zumbieLife);

    const zumbieImage = document.createElement('div');
    zumbieImage.setAttribute("id","zumbie-image");
  
    enemyZumbie.appendChild(zumbieImage);


// Posição no mapa
    let zumbiePosX = 0;
    let zumbiePosY = 0;

    enemyZumbie.style.transform = `translate(${zumbiePosY}px,${zumbiePosX}px)`;

// Posição do BG do personagem (PARA ANIMACAO)

// Animação do Sprite
//DOWN
    function zumbieAnimaDown() { 
        zumbieImage.style.background = "url(../imgs/zumbie/down1.png)"
        zumbieImage.style.backgroundRepeat = "no-repeat";
        zumbieImage.style.backgroundSize = "44px";
        setTimeout(zumbieAnimaDownMid, 300);
    };
    function zumbieAnimaDownMid () {
        zumbieImage.style.background = "url(../imgs/zumbie/down2.png)"
        zumbieImage.style.backgroundRepeat = "no-repeat";
        zumbieImage.style.backgroundSize = "44px";
        setTimeout(zumbieAnimaDownEnd, 300);
    
    }
    function zumbieAnimaDownEnd () {
        zumbieImage.style.background = "url(../imgs/zumbie/down3.png)"
        zumbieImage.style.backgroundRepeat = "no-repeat";
        zumbieImage.style.backgroundSize = "44px";
    }

//UP
    function zumbieAnimaUp() {    
        zumbieImage.style.background = "url(../imgs/zumbie/up1.png)"
        zumbieImage.style.backgroundRepeat = "no-repeat";
        zumbieImage.style.backgroundSize = "44px";
        setTimeout(zumbieAnimaUpMid, 300);
    };
    function zumbieAnimaUpMid () {
        zumbieImage.style.background = "url(../imgs/zumbie/up2.png)"
        zumbieImage.style.backgroundRepeat = "no-repeat";
        zumbieImage.style.backgroundSize = "44px";
        setTimeout(zumbieAnimaUpEnd, 300);
    
    }
    function zumbieAnimaUpEnd () {
        zumbieImage.style.background = "url(../imgs/zumbie/up3.png)"
        zumbieImage.style.backgroundRepeat = "no-repeat";
        zumbieImage.style.backgroundSize = "44px";
    }

//LEFT
    function zumbieAnimaLeft() {    
        zumbieImage.style.background = "url(../imgs/zumbie/left1.png)"
        zumbieImage.style.backgroundRepeat = "no-repeat";
        zumbieImage.style.backgroundSize = "44px";
        setTimeout(zumbieAnimaLeftMid, 300);
    };
    function zumbieAnimaLeftMid () {
        zumbieImage.style.background = "url(../imgs/zumbie/left2.png)"
        zumbieImage.style.backgroundRepeat = "no-repeat";
        zumbieImage.style.backgroundSize = "44px";
        setTimeout(zumbieAnimaLeftEnd, 300);
    
    }
    function zumbieAnimaLeftEnd () {
        zumbieImage.style.background = "url(../imgs/zumbie/left3.png)"
        zumbieImage.style.backgroundRepeat = "no-repeat";
        zumbieImage.style.backgroundSize = "44px";
    }

//RIGHT
    function zumbieAnimaRight() {    
        zumbieImage.style.background = "url(../imgs/zumbie/right1.png)"
        zumbieImage.style.backgroundRepeat = "no-repeat";
        zumbieImage.style.backgroundSize = "44px";
        setTimeout(zumbieAnimaRightMid, 300);
    };
    function zumbieAnimaRightMid () {
        zumbieImage.style.background = "url(../imgs/zumbie/right2.png)"
        zumbieImage.style.backgroundRepeat = "no-repeat";
        zumbieImage.style.backgroundSize = "44px";
        setTimeout(zumbieAnimaRightEnd, 300);
    
    }
    function zumbieAnimaRightEnd () {
        zumbieImage.style.background = "url(../imgs/zumbie/right3.png)"
        zumbieImage.style.backgroundRepeat = "no-repeat";
        zumbieImage.style.backgroundSize = "44px";
    }

   
    let zumbieIsLive = true;
    
// Movimentação do Sapo

   if(zumbieIsLive = true) {
    var intervalZumbieWalk = setInterval(zumbieWalk, 900);


    function zumbieWalk() {
        let minZumbie = 1;
        let maxZumbie = 8;
        let randwalkZumbie = Math.floor(Math.random() * (maxZumbie - minZumbie) + minZumbie);

        if(randwalkZumbie <= 2 && zumbiePosY >= 80) {
            zumbieAnimaLeft();
            zumbiePosY = zumbiePosY - 80;
            enemyZumbie.style.transform = `translate(${zumbiePosY}px,${zumbiePosX}px)`;      
        } 

        if(randwalkZumbie > 2 && randwalkZumbie <= 4 && zumbiePosX >= 50) {
            zumbieAnimaUp();
            zumbiePosX = zumbiePosX - 50;
            enemyZumbie.style.transform = `translate(${zumbiePosY}px,${zumbiePosX}px)`;
        }

        if(randwalkZumbie > 4 && randwalkZumbie <= 6 && zumbiePosY < 7020) {
            zumbieAnimaRight();
            zumbiePosY = zumbiePosY + 80;
            enemyZumbie.style.transform = `translate(${zumbiePosY}px,${zumbiePosX}px)`;   
        }

        if(randwalkZumbie > 6 && randwalkZumbie <= 8 && zumbiePosX < 4500) {
            zumbieAnimaDown();
            zumbiePosX = zumbiePosX + 50;
            enemyZumbie.style.transform = `translate(${zumbiePosY}px,${zumbiePosX}px)`;
        }
    }
    
    let zumbieIsTag = false;

    enemyZumbie.addEventListener('click', targetZumbie)

    function targetZumbie() {
        if (zumbieIsLive) {
            zumbieIsTag = true;

            if(zumbieIsTag) {
                attackZumbie();
            }
        }
    }

    function attackZumbie() {
        if (zumbieIsLive = true) {
            zumbie.life -= player.atackDamage;
            zumbieLife.style.width = `${(zumbie.life / zumbie.maxLife) * 100}%`;

            if(zumbie.life <= 0) {
                zumbieIsLive = false;
                killZumbie();
            }
        }
    }

    function killZumbie() {
        zumbieIsTag = false;

        player.coins += zumbie.coin;
        charCoins.innerHTML = `${player.coins}`;
        zumbieImage.style.background = "url(../imgs/zumbie/dead.png)"
        zumbieImage.style.backgroundRepeat = "no-repeat";
        zumbieImage.style.backgroundSize = "44px";
        zumbieExpUp();
        clearInterval(intervalZumbieWalk);
        setTimeout(hideZumbie, 3000);
    }
}

   

  
    
    function hideZumbie() {
        enemyZumbie.style.display = "none"; 
        setTimeout(spawnZumbie, 3000);
    }
    function spawnZumbie() {
        zumbie.life = zumbie.maxLife;
        zumbieLife.style.width = `${(zumbie.life / zumbie.maxLife) * 100}%`;
        enemyZumbie.style.display = "flex"; 
        zumbieIsLive = true;
        setInterval(zumbieWalk, 900);
        zumbieImage.style.background = "url(../imgs/zumbie/down3.png)";
        zumbieImage.style.backgroundRepeat = "no-repeat";
        zumbieImage.style.backgroundSize = "44px";
    }


    
function zumbieExpUp() {
    player.experience += zumbie.xp + 60;
    experienceOutput.innerHTML = player.experience;
    toExpUpBar.style.width = `${(player.experience / player.lvlup) * 100}%`
    expLevelBar.style.width = `${(player.experience / player.lvlup) * 100}%`


    if(player.experience >= player.lvlup) {
        levelUp();
    }

}