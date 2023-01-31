const scoresBoard = fetch(
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kGMkc6wAETO348Fp0yCK/scores/',
  {
    method: 'GET',
  },
)
  .then((response) => response.json())
  .then((json) => json.result);

export default scoresBoard;