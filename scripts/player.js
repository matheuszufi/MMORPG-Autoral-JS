

let player = {
    maxLife: 180,
    life: 180,
    maxMagic: 240,
    magic: 240,

    coins: 0,

    lvlup: 90,
    experience: 0,
    level: 1,
    magicLevel: 1,
    atackLevel: 1,
    atackSpeed: 2000,
    distanceLevel: 1,
    shieldLevel: 1,

    atackDamage: 2,
    spellDamage: 5
}


pBarMaxLife = document.getElementById('bar-max-life');
pBarLife = document.getElementById('bar-life');

pOutputLife = document.getElementById('life-output');
pOutputLife.innerHTML = `${player.life}`;

pBarMaxMana = document.getElementById('bar-max-mana');
pBarMana = document.getElementById('bar-mana');

pOutputMana = document.getElementById('mana-output');
pOutputMana.innerHTML = `${player.magic}`;

const healPlayer = document.getElementById('heal-player');
const healFx = document.getElementById('heal-fx');




pBarLife.style.width = `${(player.life / player.maxLife) * 100}%`
document.addEventListener('keydown', (event) => {

    
    btnPower1 = "1"

    if(event.key === btnPower1) {
  
        pBarMana.style.width = `${(player.magic / player.maxMagic) * 100}%`

        if(player.life < player.maxLife && player.magic > 20) {
            $( "#heal-player" ).fadeIn( "fast", function() {});
            $("#heal-player").css("animation", "animeHit 1s");
             $( "#heal-player" ).fadeOut( "slow", function() {});
            
            healPlayer.innerHTML = `-${spells.heal.power}`;
            player.magic = player.magic - 20;
            player.life += spells.heal.power;
            pBarLife.style.width = `${(player.life / player.maxLife) * 100}%`
            pOutputMana.innerHTML = `${player.magic}`
            pOutputLife.innerHTML = `${player.life}`;
            pBarMana.style.width = `${(player.magic / player.maxMagic) * 100}%`;
            characterLife.style.width = `${(player.life / player.maxLife) * 100}%`;
       

            $("#heal-fx").show().delay(1000).fadeOut();

        }
        

   
    }

});

function restoreMana() {
    
    if (player.magic < player.maxMagic) {
        player.magic += 2;
        pOutputMana.innerHTML = `${player.magic}`
        pBarMana.style.width = `${(player.magic / player.maxMagic) * 100}%`;
       
        }
    }
    
    setInterval(restoreMana, 2000);

    function restoreLife() {
    
        if (player.life < player.maxLife) {
            player.life += 2;
            pOutputLife.innerHTML = `${player.life}`
            pBarLife.style.width = `${(player.life / player.maxLife) * 100}%`;
            characterLife.style.width = `${(player.life / player.maxLife) * 100}%`;
            }
        }
        
        setInterval(restoreLife, 4000);


        


