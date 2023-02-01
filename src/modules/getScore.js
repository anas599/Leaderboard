const scoresBoard = fetch(
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jX9Vp4k5DcbJCu0Dl3vn/scores/',
  {
    method: 'GET',
  },
)
  .then((response) => response.json())
  .then((json) => json.result);

export default scoresBoard;