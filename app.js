class Casino {
    constructor(name, isFakeCoin){
        this.name = name;
        this.isFakeCoin = isFakeCoin;
        this.timesPlayed = 0;
    }

    playGame(betAmount){
        this.timesPlayed += 1;
        if(Math.random() <= 0.5 || this.isFakeCoin == true){
            console.log(this.name + 'wins!')
        } else {
            betAmount = betAmount * (this.timesPlayed + 1)
            console.log('You win!' + betAmount)
        }
    }
};

// TESTS
//const myCasino = new Casino("UNLV Casino");
//console.log(myCasino);
//myCasino.playGame(5);
//myCasino.playGame(15);
//myCasino.playGame(25);
//myCasino.playGame(35);

// BONUS TESTS
const myBonusCasino = new Casino("UNLV Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);


// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("UNLV Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
