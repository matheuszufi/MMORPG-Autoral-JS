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