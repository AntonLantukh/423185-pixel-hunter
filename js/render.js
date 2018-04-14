import footer from './footer.js';

// Функция смены экрана
const centralElement = document.querySelector(`.central`);

const changeScreens = (element) => {
  centralElement.innerHTML = ``;
  centralElement.appendChild(element);
  centralElement.insertAdjacentElement(`afterEnd`, footer);
};

export default changeScreens;
