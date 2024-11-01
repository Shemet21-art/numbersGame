let min = 1,
max =100,
chances = 5,
winningNumber = Math.round(getRandomArbitrary(1,100)),
messageWin ="You won asshole",
messageLose = "you lost, let's try again",
messageLChance = "you have 5 chances";


const game = document.getElementById('numbersGame'),
 minSpan = document.querySelector('.min-num'),
 maxSpan = document.querySelector('.max-num'),
 numberInput = document.getElementById('numberInput'),
 numberBtn = document.getElementById('numberBtn'),
 chanceNumber = document.querySelector('.chance'),
 message = document.querySelector('.message');

 minSpan.textContent = min;
 maxSpan.textContent = max;



numberBtn.addEventListener('click', function(){
    let userNumber = parseInt(numberInput.value)
    console.log('ssss', typeof userNumber)

    if(userNumber < min|| userNumber > max){
        setMessage("не делай так")
    }
})


console.log(winningNumber)

function setMessage(msg){
    message.textContent = msg
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

