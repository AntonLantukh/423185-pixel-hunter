import AbstractView from "../abstract-view";

export default class GameThirdView extends AbstractView {
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
          ${this.answers}
        </ul>
      </div>
    </div>`;
  }

  bind() {
    this.gameForm = this.element.querySelector(`.game__content`);
    const pictureType = {
      PAINT: `paint`,
      PHOTO: `photo`
    };

    const TAG_DIV = `DIV`;
    const PAINT_NUMBER = 2;

    this.onImgClick = (evt) => {
      evt.preventDefault();
      // Setting variables
      const levelAnswers = this.questions[this.state.level].answers;
      const levelImages = evt.target.children;
      let paintCount = 0;
      let answer;
      // Checking if a user ckicked correct div item
      if (evt.target.tagName !== TAG_DIV && !evt.target.classList.contains(`game__option`)) {
        return;
      }
      // Looping through answers set to check which src equals to the chosen src
      const chosenElement = levelAnswers.filter((item) => levelImages[0].src === item.image.url);
      // Counting false answers
      levelAnswers.map((item) => {
        if (item.type === pictureType.PAINT) {
          paintCount++;
        }
      });
      // Setting right answer
      answer = (paintCount === PAINT_NUMBER) ? answer = pictureType.PHOTO : answer = pictureType.PAINT;
      // If chosen element equals to the right answer
      const mistake = chosenElement[0].type !== answer;
      this.onAnswer(mistake);
    };

    this.gameForm.addEventListener(`click`, this.onImgClick);
  }

  unbind() {
    this.gameForm.removeEventListener(`click`, this.onImgClick);
  }

  resizeImages() {
  }

  onAnswer() {
  }
}
