    const enemyFrog = document.createElement('div');
    enemyFrog.setAttribute("id","enemy-frog");
    engine.appendChild(enemyFrog);


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



    let frogPosX = 0;
    let frogPosY = 0;


    let frogBgPositionY = 0;
    let frogBgPositionX = 0;

 

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

    // if (frogBgPositionY < 256) { 
    //     frogBgPositionY = frogBgPositionY + 128;
    //     frogImage.style.backgroundPosition = `${frogBgPositionX}px ${frogBgPositionY}px`; 
    // } else { 
    //     frogBgPositionY = 0; 
    //     frogImage.style.backgroundPosition = `${frogBgPositionX}px ${frogBgPositionY}px`; 
    // }
};




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
    
    // frogPosX = 0;
    // frogPosY = 160;

}