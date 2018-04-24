import AbstractView from "../abstract-view";

export default class GameThirdView extends AbstractView {
  constructor(state, level, questions, imgs, answers) {
    super();
    this.state = state;
    this.level = level;
    this.answers = answers;
    this.questions = questions;
    this.imgs = imgs;
  }

  get template() {
    return `<div class="game">
      <p class="game__task">${this.level.question}</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="${this.imgs[0].src}" alt="Option 1" width="${this.imgs[0].width}" height="${this.imgs[0].height}">
        </div>
        <div class="game__option  game__option--selected">
          <img src="${this.imgs[1].src}" alt="Option 1" width="${this.imgs[1].width}" height="${this.imgs[1].height}">
        </div>
        <div class="game__option">
          <img src="${this.imgs[2].src}" alt="Option 1" width="${this.imgs[2].width}" height="${this.imgs[2].height}">
        </div>
      </form>
      <div class="stats">
        <ul class="stats">
          ${this.answers}
        </ul>
      </div>
    </div>`;
  }

  renderImages() {
  }

  onAnswer() {
  }

  bind() {
    const gameForm = this.element.querySelector(`.game__content`);
    gameForm.addEventListener(`click`, (evt) => {
      // Setting variables
      const levelAnswers = this.questions[this.state.level].answers;
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
    });
  }
}
