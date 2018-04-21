import AbstractView from "../abstract-view";

export default class GameThirdView extends AbstractView {
  constructor(state, level, answers, questions) {
    super();
    this.state = state;
    this.level = level;
    this.answers = answers;
    this.questions = questions;
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
          ${this.drawBar(this.answers)}
        </ul>
      </div>
    </div>`;
  }

  onAnswer() {
  }

  bind() {
    const gameForm = this.element.querySelector(`game__content`);
    gameForm.addEventListener = (evt) => {
      // Setting variables
      const levelAnswers = this.questions[this.state.level][`answers`];
      const levelImages = evt.target.children;
      let mistake;

      // Checking if a user ckicked correct div item
      if (evt.target.tagName !== `DIV` && !evt.target.classList.contains(`game__option`)) {
        return;
      }

      // Looping through answers set to check which src equals to the chosen src
      const chosenElement = levelAnswers.filter((item) => levelImages[0].src === item.image.url);

      // If chosen element equals to the right answer
      if (chosenElement[0].type !== `paint`) {
        mistake = true;
      } else {
        mistake = false;
      }

      this.onAnswer(mistake);
    };
  }
}
