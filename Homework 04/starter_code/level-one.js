/*
 * DOTS: Level One
 *
 */



//Grab the Ball
//Grab score display
//Make a score value
//Grab the ball to click on it
// Make score increase by 10
//Display score on score display
//If score equals to 100 declare winner




// ballEll is grabbing the Ball
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');
let score= 0;
function declareWinner() {
  document.body.classList.add('game-over');
}

ballEl.addEventListener('click', function(){
  console.log('It is clicked');
  score= score+10
  console.log(score)
  scoreEl.innerText=score
  if(score>=100){
    declareWinner()
  }
})