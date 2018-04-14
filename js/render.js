import footer from './footer.js';
import greeting from './greeting.js';

// Функция смены экрана
const centralElement = document.querySelector(`.central`);

const changeScreens = (template, ...spread) => {
  centralElement.innerHTML = ``;
  centralElement.appendChild(template);

  if (spread[0]) {
    if (typeof spread[0] === `string`) {
      centralElement.insertAdjacentHTML(`afterBegin`, spread[0]);
    } else if (typeof spread[0] === `object`) {
      centralElement.insertAdjacentElement(`afterBegin`, spread[0]);
    }
    const backButton = centralElement.querySelector(`.back`);
    backButton.addEventListener(`click`, () => {
      changeScreens(greeting);
    });
  }

  centralElement.insertAdjacentElement(`afterEnd`, footer);
};

export default changeScreens;
