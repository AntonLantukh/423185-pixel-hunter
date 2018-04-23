import AbstractView from "../abstract-view";
import Application from "../application";

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `<header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
        <div class="modal-window visually-hidden">
          <div class="modal-window__container">
            <h2 class="modal-window__header">Вы уверены, что хотите покинуть игру? Весь процес будет потерян!</h3>
            <div class="modal-window__wrapper">
              <a class="modal-window__button modal-window__button-back">Уйти</a>
              <a class="modal-window__button modal-window__button-stay">Остаться</a>
            </div>
          </div>
        </div>
        <div class="modal-window__overlay visually-hidden"></div>
      </div>
      ${this.state ?
    `<h1 class="game__timer">${this.state.time}</h1>
      <div class="game__lives">
      ${new Array(3 - this.state.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}

      ${new Array(this.state.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
      </div>` : ``}
    </header>`;
  }

  updateTimer() {
  }

  bind() {
    const modalWindow = this.element.querySelector(`.modal-window`);
    const modalWindowOver = this.element.querySelector(`.modal-window__overlay`);
    const modalButtonStay = this.element.querySelector(`.modal-window__button-stay`);
    const modalButtonBack = this.element.querySelector(`.modal-window__button-back`);
    const back = this.element.querySelector(`.back`);

    back.addEventListener(`click`, function () {
      event.preventDefault();
      modalWindow.classList.remove(`visually-hidden`);
      modalWindowOver.classList.remove(`visually-hidden`);
    });

    modalButtonBack.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      Application.showGreeting();
    });

    modalButtonStay.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      modalWindow.classList.add(`visually-hidden`);
      modalWindowOver.classList.add(`visually-hidden`);
    });
  }
}
