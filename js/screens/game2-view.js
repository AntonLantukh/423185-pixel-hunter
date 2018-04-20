import AbstractView from "../abstract-view";

export default class GameSecondView extends AbstractView {
  constructor(level, answers) {
    super();
    this.level = level;
    this.answers = answers;
  }

  drawBar() {
  }

  get template() {
    return `<div class="game">
      <p class="game__task">${this.level[`question`]}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="${this.level.answers[0].image.url}" alt="Option 1" width="${this.level.answers[0].image.width}" height="${this.level.answers[0].image.height}">
          <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      <div class="stats">
        <ul class="stats">
          ${this.drawBar(this.answers)}
        </ul>
      </div>
    </div>`;
  }

  onFormChange() {
  }

  bind() {
    this.element.querySelector(`.game__content`).onchange = (evt) => {
      evt.preventDefault();
      this.onFormChange(evt);
    };
  }
}
