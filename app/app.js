let min = 1,
max =100,
winningNumber = Math.round(getRandomArbitrary(1,100)) 

const game = document.getElementById('numbersGame')

console.log(max)
console.log(winningNumber)

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

