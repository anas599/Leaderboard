export default function addScoreSection() {
  const element = document.createElement('div');
  element.id = 'scoreForm';
  const form = document.createElement('form');
  const name = document.createElement('input');
  const addYourH2 = document.createElement('h2');
  addYourH2.innerHTML = 'Add your score';
  form.classList.add('form');
  element.appendChild(addYourH2);
  name.setAttribute('placeholder', 'Your Name');
  name.setAttribute('type', 'text');
  form.appendChild(name);
  form.classList.add('formScore');
  element.appendChild(form);

  const score = document.createElement('input');
  score.setAttribute('placeholder', 'Your score');
  score.setAttribute('type', 'text');
  form.appendChild(score);

  const submitBtn = document.createElement('button');
  submitBtn.innerHTML = 'Submit';
  form.appendChild(submitBtn);

  return element;
}
