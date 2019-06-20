const choices = document.querySelectorAll('.choice');
const resultJoueur = document.getElementById('score_joueur')
const resultIa = document.getElementById('score_ordinateur')
const restartBtn = document.getElementById('restart');
let score = {
    player : 0,
    ia : 0
}

    // start the game 
function play(e) {
    const playerHand = e.target.id ;
    console.log(playerHand);
   iaHand = getRandomHand();
   console.log('choix de IA ' + iaHand)
   const winner = getWinner(playerHand,iaHand);
   console.log(`${winner}`);
   getNewScore(winner)

}

    // get random event
function getRandomHand() {
  let  randomNumberBetween1To3 =   Math.floor(Math.random() * (4 - 1)) + 1;
    if(randomNumberBetween1To3 == 1) {
        return 'pierre';
    } else if(randomNumberBetween1To3 == 2) {
        return 'feuille'
    } else {
        return 'ciseau'
    }
   
}

    // compare the results and show the winner
function getWinner(playerHand,iaHand) {
    if(playerHand == iaHand ) {
        return 'its a draw';
    } 
    else if(playerHand == 'ciseau') {
        if(iaHand == 'feuille') {
            return 'the player win'
        } else {
            return 'the ia win'
        }
    }
    else if(playerHand == 'feuille') {
        if(iaHand == 'pierre') {
            return 'the player win'
        } else {
            return 'the ia win'
        }
    }
    else if(playerHand == 'pierre') {
        if(iaHand == 'ciseau') {
            return 'the player win'
        } else {
            return 'the ia win'
        }
    
}
}

// obtain the new score 
function getNewScore(winner) {
    if(winner == 'the player win'){
        score.player ++;
        resultJoueur.innerHTML = `Joueur : ${score.player}`
        if(score.player > 0) {
            showRestartBtn()
        }
    } else if(winner == 'the ia win') {
        score.ia ++;
        resultIa.innerHTML = `Ordinateur : ${score.ia}`
        if(score.ia > 0) {
            showRestartBtn()
        }
    }

}

// show the restart button
function showRestartBtn() {
    restartBtn.classList.remove('d-none')
}


// Restart the game
function restart() {
    score.player = 0
    score.ia = 0
    resultJoueur.innerHTML = `Joueur : ${score.player}`
    resultIa.innerHTML = `Ordinateur : ${score.ia}`
}






  
  // Event listeners
  
 choices.forEach(choice => choice.addEventListener('click', play));
 restartBtn.addEventListener("click",restart);