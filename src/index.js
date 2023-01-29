import './Assets/style.css';
import addScoreSection from './modules/addScore.js';
import displayRecent from './modules/recentScores.js';

document.body.appendChild(addScoreSection());
document.body.appendChild(displayRecent());
