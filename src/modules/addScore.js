const submitButton = document.createElement('button');
submitButton.innerHTML = 'Submit';
submitButton.id = 'btnID';
submitButton.addEventListener('click', (x) => {
  x.preventDefault();
  const addName = document.getElementById('nameInput').value;
  const addScore = document.getElementById('scoreInput').value;
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jX9Vp4k5DcbJCu0Dl3vn/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: addName,
        score: addScore,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((response) => response.json());
});
export default submitButton;