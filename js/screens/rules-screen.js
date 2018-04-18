import RulesView from './rules-view.js';
import gameRender from './../gameScreen.js';
import {gameState} from './../data/data.js';


export default () => {

  const rules = new RulesView();
  const rulesInput = rules.element.querySelector(`.rules__input`);
  const rulesSubmit = rules.element.querySelector(`.rules__button`);

  // Adding listener to the text input
  rules.onInputClick = () => {
    // If not empty value => show the button to change the screen
    if (!rulesInput.value) {
      // Or add disabled status
      rulesSubmit.setAttribute(`disabled`, true);
    } else {
      rulesSubmit.removeAttribute(`disabled`);
    }
  };

  // Coming the next screen with game screens controller
  rules.onSubmitClick = () => {
    gameRender(gameState);
  };

  return rules.element;
};
