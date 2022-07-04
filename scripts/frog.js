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


    let frogBgPositionY = 64;
    let frogBgPositionX = 0;


    frogImage.style.backgroundPosition = `-${frogBgPositionX}px ${frogBgPositionY}px`; 

    function frogAnimaDown() {
        
        if (frogBgPositionY < 384) {
            frogBgPositionY = frogBgPositionY + 128;
            frogImage.style.backgroundPosition = `-${frogBgPositionX}px ${frogBgPositionY}px`; 
        } else { 
            frogBgPositionY = 64; 
            frogImage.style.backgroundPosition = `-${frogBgPositionX}px ${frogBgPositionY}px`; 
        }
    };

    function frogAnimaUp() {
        
        frogBgPositionY = 0;
        if (frogBgPositionY < 320) { 
            frogBgPositionY = frogBgPositionY + 128;
            frogImage.style.backgroundPosition = `${frogBgPositionX}px ${frogBgPositionY}px`; 
        } else { 
            frogBgPositionY = 0; 
            frogImage.style.backgroundPosition = `${frogBgPositionX}px ${frogBgPositionY}px`; 
        }
    };

    function frogAnimaLeft() {
        bgpositionY = 128;
        frogImage.style.backgroundPosition = `-${frogBgPositionX}px ${bgpositionY}px`; 
        if (frogBgPositionX < 144) { 
            frogBgPositionX = frogBgPositionX + 64;
        } else { 
            frogBgPositionX = 96; 
        }
    };

function frogAnimaRight() {
    bgpositionY = 48;
    frogImage.style.backgroundPosition = `-${bgpositionX}px ${bgpositionY}px`; 
    if (bgpositionX < 144) { 
        bgpositionX = bgpositionX + 48;
    } else { 
        bgpositionX = 96; 
    }
};




// setInterval(frogWalk, 1200);
function frogWalk() {
    let minFrog = 1;
    let maxFrog = 8;
    let randwalkFrog = Math.floor(Math.random() * (maxFrog - minFrog) + minFrog);



    if(randwalkFrog <= 2 && frogPosY >= 80) {
        frogPosY = frogPosY - 80;
        enemyFrog.style.transform = `translate(${frogPosY}px,${frogPosX}px)`;
         
    } 

    if(randwalkFrog > 2 && randwalkFrog <= 4 && frogPosX >= 50) {
        frogPosX = frogPosX - 50;
        enemyFrog.style.transform = `translate(${frogPosY}px,${frogPosX}px)`;
         
    }

    if(randwalkFrog > 4 && randwalkFrog <= 6 && frogPosY < 7020) {
        frogPosY = frogPosY + 80;
        enemyFrog.style.transform = `translate(${frogPosY}px,${frogPosX}px)`;
         
    }

    if(randwalkFrog > 6 && randwalkFrog <= 8 && frogPosX < 4500) {
        frogPosX = frogPosX + 50;
        enemyFrog.style.transform = `translate(${frogPosY}px,${frogPosX}px)`;
         
    }
    
    // frogPosX = 0;
    // frogPosY = 160;

}