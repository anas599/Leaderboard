import './Assets/style.css';
import addScoreSection from './modules/addScore.js';
import displayRecent from './modules/recentScores.js';

const bothSections = document.createElement('section');
bothSections.classList.add('bothSections');
bothSections.appendChild(displayRecent());
bothSections.appendChild(addScoreSection());

document.body.appendChild(bothSections);