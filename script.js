
// Selecting elements


const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const player2El = document.querySelector('.player--2');
const player3El = document.querySelector('.player--3');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const score2 = document.getElementById('score--2');
const score3 = document.getElementById('score--3');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const current2El = document.getElementById('current--2');
const current3El = document.getElementById('current--3');
// const moveEl = document.querySelector('.player--active');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const modal = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelector('.login');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const openModal = function(){
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');	
	btnsOpenModal.classList.add('hidden');
};

btnsOpenModal.addEventListener('click', openModal);

const init = function () {
  scores = [0, 0, 0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  score3.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  current2El.textContent = 0;
  current3El.textContent = 0;
  
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player2El.classList.remove('player--winner');
  player3El.classList.remove('player--winner');
  
};
init();

const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 3 ? 0 : ++activePlayer ;
  // diceEl.classList.add('hidden');


}

// rolling dice
btnRoll.addEventListener('click', function() {
  if (playing) {
  const dice = Math.trunc(Math.random()*6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
  currentScore += dice;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }else{
    switchPlayer();
  } 
  }

});

btnHold.addEventListener('click', function(){
  if (playing) {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

  if(scores[activePlayer] >=100){
  playing = false;
  diceEl.classList.add('hidden');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

}else{
  switchPlayer();
  }
  }
  });


btnNew.addEventListener('click',init);
