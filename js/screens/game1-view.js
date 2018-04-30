import AbstractView from "../abstract-view";

export default class GameOneView extends AbstractView {
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
      <form class="game__content">
        <div class="game__option">
          <img src="${this.level.answers[0].image.url}" alt="Option 1" width="${this.level.answers[0].image.width}" height="${this.level.answers[0].image.height}">
          <label class="game__answer game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src="${this.level.answers[1].image.url}" alt="Option 2" width="${this.level.answers[1].image.width}" height="${this.level.answers[1].image.height}">
          <label class="game__answer  game__answer--photo">
            <input name="question2" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input name="question2" type="radio" value="paint">
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

  resizeImages() {
  }

  onAnswer() {
  }

  bind() {
    this.gameForm = this.element.querySelector(`.game__content`);

    this.onImgClick = (evt) => {
      evt.preventDefault();
      // Setting variables
      const inputsNumber = 2;
      const levelAnswers = this.questions[this.state.level].answers;
      let checkedInputs;
      // Finding all inputs on the scrren and returning checked ones
      if (evt.target.tagName === `INPUT`) {
        checkedInputs = Array.from(evt.currentTarget).filter((element) => element.checked);
      }
      // If checked inputs equal to the number of inputs on the page
      if (checkedInputs.length !== inputsNumber) {
        return;
      }
      // Check correctness of the user's answer
      const mistake = !checkAnswer(checkedInputs, levelAnswers);
      this.onAnswer(mistake);
    };

    // Function to check whether the answer is correct
    const checkAnswer = (checkedItem, answersItem) => {
      return (checkedItem[0].value === answersItem[0].type) && (checkedItem[1].value === answersItem[1].type);
    };

    this.gameForm.addEventListener(`change`, this.onImgClick);
  }

  unbind() {
    this.gameForm.removeEventListener(`change`, this.onImgClick);
  }
}
