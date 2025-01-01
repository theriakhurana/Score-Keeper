const p1={
  score: 0,
  button: document.querySelector("#p1btn"),
  display: document.querySelector("#p1score")
}

const p2={
  score: 0,
  button: document.querySelector("#p2btn"),
  display: document.querySelector("#p2score")
}

const winningScoreSelect = document.querySelector("#playto");
const resetbtn = document.querySelector("#reset");
let winningscore = 3;
let isGameOver = false;

function updateScores(player, oponent){
  if(!isGameOver){
    player.score += 1;
    if(player.score === winningscore){
      isGameOver = true;
      player.display.classList.add('winner');
      oponent.display.classList.add('loser');
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", ()=>{
  updateScores(p1,p2);
})

p2.button.addEventListener("click", ()=>{
  updateScores(p2,p1);
})

winningScoreSelect.addEventListener("change", function(){
  winningscore = parseInt(this.value);
  reset();
});

resetbtn.addEventListener("click", reset)

function reset(){
  isGameOver = false;

  for(let p of [p1,p2]){
    p.score = 0;
    p.display.textContent = p.score;
    p.display.classList.remove('winner', 'loser');
  }
} 