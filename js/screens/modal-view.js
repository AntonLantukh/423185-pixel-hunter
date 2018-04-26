import AbstractView from "../abstract-view";
import Application from "../application";

export default class ModalView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<div>
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
  </div>`;
  }

  bind() {
    const modalWindow = this.element.querySelector(`.modal-window`);
    const modalWindowOver = this.element.querySelector(`.modal-window__overlay`);
    const modalButtonBack = this.element.querySelector(`.modal-window__button-back`);
    const modalButtonStay = this.element.querySelector(`.modal-window__button-stay`);

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
