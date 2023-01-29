export default function displayRecent() {
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
  const scoreBoardVar = scoresBoard.map((x) => `${x.name} : ${x.score}<br>`)
    .join('');
  document.getElementById('scoreName').innerHTML = scoreBoardVar;
}
// const scoreBoardSection = document.createElement('section');
// scoreBoardSection.classList.add('scoreBoardSection');
