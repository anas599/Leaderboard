import submitButton from './addScore.js';

const addScoreSection = () => {
  const element = document.createElement('div');
  element.id = 'scoreForm';
  const form = document.createElement('form');
  const name = document.createElement('input');
  const addYourH2 = document.createElement('h2');
  addYourH2.innerHTML = 'Add your score';
  form.classList.add('form');
  element.appendChild(addYourH2);

  // add name input
  name.setAttribute('placeholder', 'Your Name');
  name.setAttribute('type', 'text');
  name.id = 'nameInput';
  form.appendChild(name);
  form.classList.add('formScore');
  form.id = ('formScoreID');
  element.appendChild(form);

  // add score input
  const score = document.createElement('input');
  score.setAttribute('placeholder', 'Your score');
  score.setAttribute('type', 'text');
  score.id = 'scoreInput';
  form.appendChild(score);
  form.appendChild(submitButton);

  return element;
};
export default addScoreSection;