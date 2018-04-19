import FooterView from './../screens/footer-view.js';
import greeting from "./../screens/greeting-screen.js";

// const greeting = new GreetingView().element;
const footer = new FooterView().element;
const centralElement = document.querySelector(`.central`);

// Function to render the node on the page
const changeScreens = (template, ...spread) => {
  centralElement.innerHTML = ``;
  centralElement.appendChild(template);
  const headerElement = spread[0];

  // If a header was handled => check if it is not or html template
  if (headerElement) {
    centralElement.insertAdjacentElement(`afterBegin`, headerElement);
    // Adding a listener to the header return buttton
    const backButton = centralElement.querySelector(`.back`);
    backButton.addEventListener(`click`, () => {
      changeScreens(greeting());
    });
  }
  // Finally adding a footer
  centralElement.insertAdjacentElement(`afterEnd`, footer);
};

export default changeScreens;
