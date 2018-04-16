import {countPoints} from './points-count.js';
import {gameState, answers} from './data.js';
import drawProgressbar from './progress-bar.js';

const templateStatsWin = () =>
  `<div class="result">
    <h1>Победа!</h1>
    <table class="result__table">
      <tr>
        <td colspan="2">
          <ul class="stats">
            ${drawProgressbar(answers)}
          </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${countPoints(answers, gameState.lives).answers}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">50</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${countPoints(answers, gameState.lives).lives}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">-100</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${countPoints(answers, gameState.lives).total}</td>
      </tr>
    </table>
  </div>`;

const templateStateWinNoBonus = () =>
  `<div class="result">
    <h1>Победа!</h1>
    <table class="result__table">
      <tr>
        <td colspan="2">
          <ul class="stats">
            ${drawProgressbar(answers)}
          </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${countPoints(answers, gameState.lives).answers}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${countPoints(answers, gameState.lives).lives}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${countPoints(answers, gameState.lives).total}</td>
      </tr>
    </table>`;

const templateStatsFail = () =>
  `<div class="result">
    <h1>Fail</h1>
    <table class="result__table">
      <tr>
        <td>
          <ul class="stats">
            ${drawProgressbar(answers)}
          </ul>
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>`;

export {templateStatsFail, templateStatsWin, templateStateWinNoBonus};
