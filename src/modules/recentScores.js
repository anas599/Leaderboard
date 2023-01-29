const scoresBoard = [
  {
    name: 'Name1',
    score: 11,
  },
  {
    name: 'Name2',
    score: 22,
  },
  {
    name: 'Name3',
    score: 33,
  },
  {
    name: 'Name4',
    score: 44,
  },
  {
    name: 'Name5',
    score: 55,
  },
];
export default function displayRecent() {
  const scoreBoardVar = scoresBoard
    .map((x) => `${x.name} : ${x.score}<br>`)
    .join('');
  const scBoard = document.createElement('div');
  scBoard.classList.add('refreshSec');
  const h2 = document.createElement('h2');
  h2.innerHTML = 'Recent Scores java';
  scBoard.appendChild(h2);
  const refreshButton = document.createElement('button');
  refreshButton.innerHTML = 'Refresh';
  scBoard.appendChild(refreshButton);
  const scoreDiv = document.createElement('div');
  scoreDiv.classList.add = 'scoreName';
  scoreDiv.innerHTML = scoreBoardVar;
  scBoard.appendChild(scoreDiv);
  return scBoard;
}
