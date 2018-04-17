import footer from './footer.js';
import greeting from './greeting.js';

// Searching for central div element
const centralElement = document.querySelector(`.central`);

// Function to render the node on the page
const changeScreens = (template, ...spread) => {
  centralElement.innerHTML = ``;
  centralElement.appendChild(template);
  const headerElement = spread[0];

  // If a header was handed => check if it is not or html template
  if (headerElement) {
    if (typeof headerElement === `string`) {
      centralElement.insertAdjacentHTML(`afterBegin`, headerElement);
    } else if (typeof headerElement === `object`) {
      centralElement.insertAdjacentElement(`afterBegin`, headerElement);
    }

    // Adding a listener to the header return buttton
    const backButton = centralElement.querySelector(`.back`);
    backButton.addEventListener(`click`, () => {
      changeScreens(greeting);
    });
  }

  // Finally adding a footer
  centralElement.insertAdjacentElement(`afterEnd`, footer);
};

export default changeScreens;
