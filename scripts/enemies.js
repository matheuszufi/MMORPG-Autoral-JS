let randcoin;
randomCoin();

enemies = {
    rat: {
        maxLife: 20,
        life: 20,
        xp: 20,
        atk: 2,
        coin: randcoin,
    }
}





function randomCoin () {
    max = 20;
    min = 4;
    randcoin = Math.floor(Math.random() * (max - min) + min);
  
}


setInterval(ratWalk, 1000);
function ratWalk() {
    min = 1;
    max = 8;
    randwalk = Math.floor(Math.random() * (max - min) + min);



    if(randwalk <= 2 && enemyPosY >= 80) {
        enemyPosY = enemyPosY - 80;
        rat.style.transform = `translate(${enemyPosY}px,${enemyPosX}px)`;
        distanceY = posY - enemyPosY; 
    } 

    if(randwalk > 2 && randwalk <= 4 && enemyPosX >= 50) {
        enemyPosX = enemyPosX - 50;
        rat.style.transform = `translate(${enemyPosY}px,${enemyPosX}px)`;
        distanceY = posX - enemyPosX; 
    }

    if(randwalk > 4 && randwalk <= 6 && enemyPosY < 720) {
        enemyPosY = enemyPosY + 80;
        rat.style.transform = `translate(${enemyPosY}px,${enemyPosX}px)`;
        distanceY = posY - enemyPosY; 
    }

    if(randwalk > 6 && randwalk <= 8 && enemyPosX < 450) {
        enemyPosX = enemyPosX + 50;
        rat.style.transform = `translate(${enemyPosY}px,${enemyPosX}px)`;
        distanceX = posX - enemyPosX; 
    }
    
    // enemyPosX = 0;
    // enemyPosY = 160;

}

