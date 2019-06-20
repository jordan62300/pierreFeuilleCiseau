const choices = document.querySelectorAll('.choice')

function play(e) {
    const mainJoueur = e.target.id ;
    console.log(mainJoueur)
    console.log('hello deux')
}

console.log('hello')

// Clear modal

  
  // Event listeners
  
 choices.forEach(choice => choice.addEventListener('click', play));