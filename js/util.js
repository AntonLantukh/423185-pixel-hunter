// Функция для создания ноды
const getElementFromTemplate = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template;
  const resultingElement = container.children[0];

  return resultingElement;
};

export default getElementFromTemplate;
