let min = 1,
max =100,
chances = 5,
winningNumber = Math.round(getRandomArbitrary(1,100)),
messageWin ="You win asshole",
messageLoss = "you loooooose, let's try again",
messageMore = 'too much guy',
messageLess = 'too small number guy';



const game = document.getElementById('numbersGame'),
 minSpan = document.querySelector('.min-num'),
 maxSpan = document.querySelector('.max-num'),
 numberInput = document.getElementById('numberInput'),
 numberBtn = document.getElementById('numberBtn'),
 chanceNumber = document.querySelector('.chance'),
 messageSecond= document.querySelector('.message2'),
 message = document.querySelector('.message');

 minSpan.textContent = min;
 maxSpan.textContent = max;
 numberBtn.textContent = "confirm"



numberBtn.addEventListener('click', function(){
    let userNumber = parseInt(numberInput.value)

    if(userNumber < min|| userNumber > max){
        setMessage(`dont do that! Only ${min} or ${max}`)
        
    } else if( userNumber > winningNumber) { 
        setMessage(messageMore)
    } else if(userNumber < winningNumber){
        setMessage(messageLess)
    }

    if (userNumber === winningNumber){
        win(messageWin)
    } 
    else { 
        chances = chances - 1 

        if(chances === 0 ){ 
            lose(messageLoss,`winning number ${winningNumber}`)  
        } 
        
        else {
            setMessageSecond(`${chances} tries left `)
        }
        
    }
})


console.log(winningNumber)

function setMessage(msg){
    message.textContent = msg
}

function setMessageSecond(msg){
    messageSecond.textContent = msg
}

game.addEventListener('mousedown', function(e) {
	if(e.target.className === 'playAgain') {
		window.location.reload();
	}
});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function win(msg){ 
    message.textContent = msg
    message.classList.add('succes')
    numberBtn.textContent = "One more game"
    numberBtn.classList.add('playAgain')
  }

  function lose(msgLose, msgNumber){ 
    message.textContent = msgLose;
    messageSecond.textContent = msgNumber;
    message.classList.add('loss');
    numberBtn.textContent = "One more game";
    numberBtn.classList.add('playAgain');
  }
