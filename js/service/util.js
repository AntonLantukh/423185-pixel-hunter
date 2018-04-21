// Function to create a node from html template
const getElementFromTemplate = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template;
  // Getting rid of div container
  const resultingElement = container.children[0];

  return resultingElement;
};

export default getElementFromTemplate;
