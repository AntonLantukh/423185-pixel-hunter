import AbstractView from "../abstract-view";
import Application from "../application";

export default class RulesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<div class="rules">
        <h1 class="rules__title">Правила</h1>
        <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
          src="img/photo_icon.png" width="16" height="16"> или рисунок <img
          src="img/paint_icon.png" width="16" height="16" alt="">.<br>
          Фотографиями или рисунками могут быть оба изображения.<br>
          На каждую попытку отводится 30 секунд.<br>
          Ошибиться можно не более 3 раз.<br>
          <br>
          Готовы?
        </p>
        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="Ваше Имя">
          <button class="rules__button  continue" type="submit" disabled >Go!</button>
        </form>
      </div>`;
  }

  bind() {
    this.rulesInput = this.element.querySelector(`.rules__input`);
    this.rulesSubmit = this.element.querySelector(`.rules__button`);

    this.onInputClick = (evt) => {
      evt.preventDefault();
      if (!this.rulesInput.value) {
        // Or add disabled status
        this.rulesSubmit.setAttribute(`disabled`, true);
      } else {
        this.rulesSubmit.removeAttribute(`disabled`);
      }
    };

    this.onSubmitClick = (evt) => {
      evt.preventDefault();
      Application.showGame(this.rulesInput.value);
      this.unbind();
    };

    this.rulesInput.addEventListener(`input`, this.onInputClick);
    this.rulesSubmit.addEventListener(`click`, this.onSubmitClick);
  }

  unbind() {
    this.rulesInput.removeEventListener(`input`, this.onInputClick);
    this.rulesSubmit.removeEventListener(`click`, this.onSubmitClick);
  }
}
