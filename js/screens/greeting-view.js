import AbstractView from "../abstract-view";
import Application from "../application";

export default class GreetingView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<div>
      <div class="greeting central--blur">
        <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
        <h1 class="greeting__asterisk">*</h1>
        <div class="greeting__challenge">
          <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
          <p>Правила игры просты.<br>
            Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
            Задача кажется тривиальной, но не думай, что все так просто.<br>
            Фотореализм обманчив и коварен.<br>
            Помни, главное — смотреть очень внимательно.</p>
        </div>
        <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
      </div>
    </div>`;
  }

  bind() {
    this.continue = this.element.querySelector(`.greeting__continue`);

    this.onButtonClick = (evt) => {
      evt.preventDefault();
      this.unbind();
      Application.showRules();
    };

    this.continue.addEventListener(`click`, this.onButtonClick);
  }

  unbind() {
    this.continue.removeEventListener(`click`, this.onButtonClick);
  }

  animate() {
    this.element.querySelector(`.greeting`).classList.add(`greeting__animation`);
  }
}
