const choices = document.querySelectorAll('.choice');

function play(e) {
    const playerHand = e.target.id ;
    console.log(playerHand);
   iaHand = getRandomHand();
   console.log('choix de IA ' + iaHand)
   const winner = getWinner(playerHand,iaHand);
   console.log(`${winner}`);

}

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




// Clear modal

  
  // Event listeners
  
 choices.forEach(choice => choice.addEventListener('click', play));