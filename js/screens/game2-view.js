import AbstractView from "../abstract-view";

export default class GameSecondView extends AbstractView {
  constructor(state, level, questions, answers) {
    super();
    this.state = state;
    this.level = level;
    this.answers = answers;
    this.questions = questions;
  }

  get template() {
    return `<div class="game">
      <p class="game__task">${this.level.question}</p>
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

  bind() {
    this.gameForm = this.element.querySelector(`.game__content`);
    const TAG_INPUT = `INPUT`;

    this.onImgClick = (evt) => {
      evt.preventDefault();
      // Setting variables
      const levelAnswers = this.questions[this.state.level].answers;
      // If a user chose input
      if (!evt.target.tagName === TAG_INPUT) {
        return;
      }
      // We check the input value to equal the value in answers
      const mistake = evt.target.value !== levelAnswers[0].type;
      this.onAnswer(mistake);
    };

    this.gameForm.addEventListener(`change`, this.onImgClick);
  }

  unbind() {
    this.gameForm.removeEventListener(`change`, this.onImgClick);
  }

  resizeImages() {
  }

  onAnswer() {
  }
}
