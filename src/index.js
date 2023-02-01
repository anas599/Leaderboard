import './Assets/style.css';
import addScoreSection from './modules/formCreate.js';
import displayRecent from './modules/recentScores.js';
import Icon from './icon.svg';

const logoIcon = new Image();
logoIcon.src = Icon;
logoIcon.classList.add('logoIcon');
const bothSections = document.createElement('section');
const mainLogo = document.createElement('div');
mainLogo.appendChild(logoIcon);
document.body.appendChild(mainLogo);
bothSections.classList.add('bothSections');
bothSections.appendChild(displayRecent());
bothSections.appendChild(addScoreSection());

document.body.appendChild(bothSections);
