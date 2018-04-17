import {countPoints} from './points-count.js';
import {gameState, answers} from './data.js';
import drawProgressbar from './progress-bar.js';

// Full stats tempalte
const templateStatsWin = () =>
  `<div class="result">
    <h1>Победа!</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
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
        <td class="result__extra">${countPoints(answers, gameState.lives).timeFastCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${countPoints(answers, gameState.lives).timeFast}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${gameState.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${countPoints(answers, gameState.lives).lives}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${countPoints(answers, gameState.lives).timeSlowCount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${countPoints(answers, gameState.lives).timeSlow}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${countPoints(answers, gameState.lives).total}</td>
      </tr>
    </table>
  </div>`;

// Stats tempalte when a user answered correctly but gained no pros nor cons
const templateStatsWinNoBonus = () =>
  `<div class="result">
    <h1>Победа!</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">2.</td>
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
        <td class="result__extra">${gameState.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${countPoints(answers, gameState.lives).lives}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${countPoints(answers, gameState.lives).total}</td>
      </tr>
    </table>`;

// Stats template when a user failed
const templateStatsFail = () =>
  `<div class="result">
    <h1>Fail</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">3.</td>
        <td>
          <ul class="stats">
            ${drawProgressbar(answers)}
          </ul>
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>`;

export {templateStatsFail, templateStatsWin, templateStatsWinNoBonus};
