// Функция для создания ноды
const getElementFromTemplate = (template) => {
  const newElement = document.createElement(`div`);
  newElement.classList.add(`central`);
  newElement.innerHTML = template;

  return newElement;
};

export default getElementFromTemplate;
