// Функция смены экрана
const bodyElement = document.querySelector(`body`);

const changeScreens = (element) => {
  bodyElement.innerHTML = ``;
  bodyElement.appendChild(element);
};

export default changeScreens;
