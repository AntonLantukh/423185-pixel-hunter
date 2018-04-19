import AbstractView from "./../abstract-view.js";

export default class StatsView extends AbstractView {
  constructor(state, answers) {
    super();
    this.state = state;
    this.answers = answers;
  }

  drawBar() {
  }

  countScore() {
  }

  get template() {
    return `<div class="result">
      <h1>${this.state[`fail`] ? `Fail</h1>` : `Победа!</h1>`}
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
              ${this.drawBar(this.answers, this.state)}
            </ul>
          </td>
    ${this.state[`fail`] ? `` :
    `<td class="result__points">×&nbsp;100</td>
       <td class="result__total">${this.countScore(this.answers, this.state.lives).answers}</td>`}
        </tr>
    ${!this.answers[`timeFastCount`] ? `` :
    `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${this.countScore(this.answers, this.state.lives).timeFastCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${this.countScore(this.answers, this.state.lives).timeFast}</td>
        </tr>`}
    ${!this.state[`lives`] ? `` :
    `<tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${this.state.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${this.countScore(this.answers, this.state.lives).lives}</td>
        </tr>`}
     ${!this.answers[`timeSlowCount`] ? `` :
    `<tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${this.countScore(this.answers, this.state.lives).timeSlowCount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${this.countScore(this.answers, this.state.lives).timeSlow}</td>
        </tr>`}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${this.state[`fail`] ? `Fail` : this.countScore(this.answers, this.state.lives).total}</td>
        </tr>
      </table>
    </div>`;
  }
}
