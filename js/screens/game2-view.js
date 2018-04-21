import AbstractView from "../abstract-view";

export default class GameSecondView extends AbstractView {
  constructor(state, level, questions, answers) {
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
          ${this.answers}
        </ul>
      </div>
    </div>`;
  }

  onAnswer() {
  }

  bind() {
    const gameForm = this.element.querySelector(`.game__content`);
    gameForm.addEventListener(`change`, (evt) => {
      // Setting variables
      const levelAnswers = this.questions[this.state.level][`answers`];
      let mistake;

      // If a user chose input
      if (!evt.target.tagName === `INPUT`) {
        return;
      }

      // We check the input value to equal the value in answers
      if ((evt.target.value !== levelAnswers[0][`type`])) {
        mistake = true;
      } else {
        mistake = false;
      }

      this.onAnswer(mistake);
    });
  }
}
