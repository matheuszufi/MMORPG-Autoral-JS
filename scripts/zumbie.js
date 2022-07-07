    let zumbie = {
        name: "Zumbie",
        maxLife: 200,
        life: 200,
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
    function zumbieAnimaDown() {    
     
        setTimeout(zumbieAnimaDownMid, 200);
    };
    function zumbieAnimaDownMid () {
        setTimeout(zumbieAnimaDownEnd, 200);
    
    }
    function zumbieAnimaDownEnd () {

    }

    function zumbieAnimaUp() {    
     
        setTimeout(zumbieAnimaUpMid, 200);
    };
    function zumbieAnimaUpMid () {
        setTimeout(zumbieAnimaUpEnd, 200);
    
    }
    function zumbieAnimaUpEnd () {

    }

    function zumbieAnimaLeft() {    
     
        setTimeout(zumbieAnimaLeftMid, 200);
    };
    function zumbieAnimaLeftMid () {
        setTimeout(zumbieAnimaLeftEnd, 200);
    
    }
    function zumbieAnimaLeftEnd () {

    }

    function zumbieAnimaRight() {    
     
        setTimeout(zumbieAnimaRightMid, 200);
    };
    function zumbieAnimaRightMid () {
        setTimeout(zumbieAnimaRightEnd, 200);
    
    }
    function zumbieAnimaRightEnd () {

    }

   
    
// Movimentação do Sapo


    // setInterval(zumbieWalk, 400);

    function zumbieWalk() {
        let minZumbie = 1;
        let maxZumbie = 8;
        let randwalkZumbie = Math.floor(Math.random() * (maxZumbie - minZumbie) + minZumbie);

        if(randwalkZumbie <= 2 && zumbiePosY >= 80) {
            zumbieAnimaRight();
            zumbiePosY = zumbiePosY - 80;
            enemyZumbie.style.transform = `translate(${zumbiePosY}px,${zumbiePosX}px)`;      
        } 

        if(randwalkZumbie > 2 && randwalkZumbie <= 4 && zumbiePosX >= 50) {
            zumbieAnimaUp();
            zumbiePosX = zumbiePosX - 50;
            enemyZumbie.style.transform = `translate(${zumbiePosY}px,${zumbiePosX}px)`;
        }

        if(randwalkZumbie > 4 && randwalkZumbie <= 6 && zumbiePosY < 7020) {
            zumbieAnimaLeft();
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
        zumbieIsTag = true;

        if(zumbieIsTag) {
            attackZumbie();
        }
    }

    function attackZumbie() {
        zumbie.life -= player.atackDamage;
        zumbieLife.style.width = `${(zumbie.life / zumbie.maxLife) * 100}%`;

        if(zumbie.life <= 0) {
            killZumbie();
        }
    }

    function killZumbie() {
        zumbieIsTag = false;
        enemyZumbie.style.display = "none";
        player.coins += zumbie.coin;
        charCoins.innerHTML = `${player.coins}`;
         
        zumbieExpUp();
        setTimeout(spawnZumbie, 5000);
    }

    function spawnZumbie() {
        zumbie.life = zumbie.maxLife;
        zumbieLife.style.width = `${(zumbie.life / zumbie.maxLife) * 100}%`;
        enemyZumbie.style.display = "flex"; 
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