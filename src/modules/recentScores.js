import scoresBoard from './fetchScore.js';

export default function displayRecent() {
  const scBoard = document.createElement('div');
  const topHead = document.createElement('div');
  topHead.classList.add('topHead');

  scBoard.classList.add('refreshSec');
  const h2 = document.createElement('h2');
  h2.innerHTML = 'Recent Scores';
  topHead.appendChild(h2);
  const refreshButton = document.createElement('button');
  refreshButton.innerHTML = 'Refresh';
  topHead.appendChild(refreshButton);
  scBoard.appendChild(topHead);

  const scoreDiv = document.createElement('div');
  scoreDiv.classList.add('scoreName');
  scoreDiv.id = 'scores';
  scBoard.appendChild(scoreDiv);
  return scBoard;
}
const printAddress = () => scoresBoard.then((scores) => {
  const scoreDiv = document.getElementById('scores');
  scores.forEach((x) => {
    scoreDiv.innerHTML += `<p>${x.user} - ${x.score}</p>`;
  });
  return scores;
});

printAddress();