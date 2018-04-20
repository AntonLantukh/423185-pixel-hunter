import AbstractView from "../abstract-view";

export default class GameThirdView extends AbstractView {
  constructor(level, answers, state) {
    super();
    this.level = level;
    this.answers = answers;
    this.state = state;
  }

  drawBar() {
  }

  get template() {
    return `<div class="game">
      <p class="game__task">${this.level.question}</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="${this.level.answers[0].image.url}" alt="Option 1" width="${this.level.answers[0].image.width}" height="${this.level.answers[0].image.height}">
        </div>
        <div class="game__option  game__option--selected">
          <img src="${this.level.answers[1].image.url}" alt="Option 1" width="${this.level.answers[1].image.width}" height="${this.level.answers[1].image.height}">
        </div>
        <div class="game__option">
          <img src="${this.level.answers[2].image.url}" alt="Option 1" width="${this.level.answers[2].image.width}" height="${this.level.answers[2].image.height}">
        </div>
      </form>
      <div class="stats">
        <ul class="stats">
          ${this.drawBar(this.answers, this.state)}
        </ul>
      </div>
    </div>`;
  }

  onImageClick() {
  }

  bind() {
    this.element.querySelector(`.game__content`).onclick = (evt) => {
      evt.preventDefault();
      this.onImageClick(evt);
    };
  }
}
