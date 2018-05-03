import AbstractView from "../abstract-view";

export default class StatsView extends AbstractView {
  constructor(state, bar, score) {
    super();
    this.state = state;
    this.bar = bar;
    this.score = score;
  }

  get template() {
    return `<div class="result">
      <h1>${this.state.fail ? `Fail</h1>` : `Победа!</h1>`}
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
              ${this.bar}
            </ul>
          </td>
    ${this.state.fail ? `` :
    `<td class="result__points">×&nbsp;100</td>
       <td class="result__total">${this.score.answers}</td>`}
        </tr>
    ${!this.score ? `` :
    `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${this.score.timeFastCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${this.score.timeFast}</td>
        </tr>`}
    ${this.state.fail ? `` :
    `<tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${this.score.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${this.score.livesPoints}</td>
        </tr>`}
     ${!this.score ? `` :
    `<tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${this.score.timeSlowCount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${this.score.timeSlow}</td>
        </tr>`}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${this.state.fail ? `Fail` : this.score.total}</td>
        </tr>
      </table>
      <div class="result result__history">Загружаю историю...</div>
    </div>`;
  }

  bind() {
    this.container = this.element.querySelector(`.result__history`);
  }

  showScores(scores) {
    this.container.innerHTML =
    `<div class="result">
      <h2>Моя статистика</h2>
      ${scores.map((it, i) =>
    `<span>${new Date(it.date).toLocaleString(`ru`)}</span>
     <h3>${it.fail ? `Fail</h2>` : `Победа!</h3>`}
     <table class="result__table">
     <tr>
      <td class="result__number">${i + 1}.</td>
      <td colspan="2">
       <ul class="stats">
        ${it.bar}
        </ul>
      </td>
     ${it.fail ? `` :
    `<td class="result__points">×&nbsp;100</td>
     <td class="result__total">${it.stats.answers}</td>`}
    </tr>
    ${it.fail ? `` :
    `<tr>
       <td></td>
       <td class="result__extra">Бонус за жизни:</td>
       <td class="result__extra">${it.stats.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
       <td class="result__points">×&nbsp;50</td>
       <td class="result__total">${it.stats.livesPoints}</td>
     </tr>`}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${it.fail ? `Fail` : it.stats.total}</td>
      </tr>
     </table>`).join(``)}
    </div>`;
  }
}
