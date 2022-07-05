const characterPowerHeal = document.getElementById('power-heal');
const characterPowerFisical = document.getElementById('power-fisical');
const characterPowerFire = document.getElementById('power-fire');
const characterPowerEnergy = document.getElementById('power-energy');
const characterPowerTerra = document.getElementById('power-terra');
const characterPowerIce = document.getElementById('power-ice');
const characterPowerUltimate = document.getElementById('power-ultimate');



const cardFisical = document.getElementById('card-fisical');
const cardFire = document.getElementById('card-fire');
const cardEnergy = document.getElementById('card-energy');
const cardTerra = document.getElementById('card-terra');
const cardIce = document.getElementById('card-ice');
const cardUltimate = document.getElementById('card-ultimate');

let isPowerFisicalOn = false;
let isPowerFireOn = false;
let isPowerEnergyOn = false;
let isPowerTerraOn = false;
let isPowerIceOn = false;
let isPowerUltimateOn = false;


cardFisical.addEventListener('click', buyFisicalPower);
cardFire.addEventListener('click', buyFirePower);
cardEnergy.addEventListener('click', buyEnergyPower);
cardTerra.addEventListener('click', buyTerraPower);
cardIce.addEventListener('click', buyIcePower);
cardUltimate.addEventListener('click', buyUltimatePower);

function buyFisicalPower() {

    if (player.coins >= 500 && !isPowerFisicalOn) {
        player.coins -= 500;
        charCoins.innerHTML = `${player.coins}`
        characterPowerFisical.style.display = "flex"
        isPowerFisicalOn = true;
        cardFisical.style.opacity = "0.4"  
    } else {
        alert("It costs 500GP! ")
    }
};

function buyFirePower() {

    if (player.coins >= 500 && !isPowerFireOn) {
        player.coins -= 500;
        charCoins.innerHTML = `${player.coins}`
        characterPowerFire.style.display = "flex"
        isPowerFireOn = true;
        cardFire.style.opacity = "0.4"   
    } else {
        alert("It costs 500GP! ")
    }
};
function buyEnergyPower() {

    if (player.coins >= 500 && !isPowerEnergyOn) {
        player.coins -= 500;
        charCoins.innerHTML = `${player.coins}`
        characterPowerEnergy.style.display = "flex"
        isPowerEnergyOn = true;
        cardEnergy.style.opacity = "0.4"   
    } else {
        alert("It costs 500GP! ")
    }
};
function buyTerraPower() {

    if (player.coins >= 500 && !isPowerTerraOn) {
        player.coins -= 500;
        charCoins.innerHTML = `${player.coins}`
        characterPowerTerra.style.display = "flex"
        isPowerTerraOn = true;
        cardTerra.style.opacity = "0.4"   
    } else {
        alert("It costs 500GP! ")
    }
};
function buyIcePower() {

    if (player.coins >= 500 && !isPowerIceOn) {
        player.coins -= 500;
        charCoins.innerHTML = `${player.coins}`
        characterPowerIce.style.display = "flex"
        isPowerIceOn = true;
        cardIce.style.opacity = "0.4"   
    } else {
        alert("It costs 500GP! ")
    }
};
function buyUltimatePower() {

    if (player.coins >= 2500 && !isPowerUltimateOn) {
        player.coins -= 2500;
        charCoins.innerHTML = `${player.coins}`
        characterPowerUltimate.style.display = "flex"
        isPowerUltimateOn = true;
        cardUltimate.style.opacity = "0.4"   
    } else {
        alert("It costs 2500GP! ")
    }
};



document.addEventListener('keydown', (event) => {

    btn2 = "2";

    if (event.key === btn2 && isTag && player.magic > 30 && isPowerFisicalOn && distanceX <= 100 && distanceX >= -100 && distanceY <= 160 && distanceY >= -160) {

    
            player.magic -= 30;
        
            pOutputMana.innerHTML = `${player.magic}`
            pBarMana.style.width = `${(player.magic / player.maxMagic) * 100}%`;
    };


    btn3 = "3";

    if (event.key === btn3 && isTag && player.magic > 30 && isPowerFireOn) {

    
            player.magic -= 30;
       
            pOutputMana.innerHTML = `${player.magic}`
            pBarMana.style.width = `${(player.magic / player.maxMagic) * 100}%`;
    };

    btn4 = "4";

    if (event.key === btn4 && isTag && player.magic > 30 && isPowerEnergyOn) {

    
            player.magic -= 30;
         
            pOutputMana.innerHTML = `${player.magic}`
            pBarMana.style.width = `${(player.magic / player.maxMagic) * 100}%`;
    };

    btn5 = "5";

    if (event.key === btn5 && isTag && player.magic > 30 && isPowerTerraOn) {

    
            player.magic -= 30;
          
            pOutputMana.innerHTML = `${player.magic}`
            pBarMana.style.width = `${(player.magic / player.maxMagic) * 100}%`;
    };

    
    btn6 = "6";

    if (event.key === btn6 && isTag && player.magic > 30 && isPowerIceOn) {

    
            player.magic -= 30;
          
            pOutputMana.innerHTML = `${player.magic}`
            pBarMana.style.width = `${(player.magic / player.maxMagic) * 100}%`;
    };

    btn7 = "7";

    if (event.key === btn7 && isTag && player.magic > 30 && isPowerUltimateOn) {

    
            player.magic -= 30;
     
            pOutputMana.innerHTML = `${player.magic}`
            pBarMana.style.width = `${(player.magic / player.maxMagic) * 100}%`;
    };








});