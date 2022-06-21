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


cardFisical.addEventListener('click', buyFisicalPower);

function buyFisicalPower() {

    if (player.coins >= 500) {
        player.coins -= 500;
        characterPowerFisical.style.display = "flex"
        isPowerFisicalOn = true;
        cardFisical.style.opacity = "0.4"
       
    } else {
        alert("It costs 500GP!d ")
    }


};





document.addEventListener('keydown', (event) => {

    btn2 = "2";

    if (event.key === btn2 && isTag && player.magic > 30 && isPowerFisicalOn) {

    
            player.magic -= 30;
            enemies.rat.life -= 10;
            ratLife.style.width = `${(enemies.rat.life / enemies.rat.maxLife) * 100}%`
            pOutputMana.innerHTML = `${player.magic}`
            pBarMana.style.width = `${(player.magic / player.maxMagic) * 100}%`;
    };


    if (enemies.rat.life < 1) {
        targetEnemy();
    }
});