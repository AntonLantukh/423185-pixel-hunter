import {countPoints} from './../service/points-count.js';
import {gameState, answers} from './../data/data.js';
import drawProgressbar from './../service/progress-bar.js';


// Full stats tempalte
const templateStats = () =>
  `<div class="result">
    <h1>${gameState[`fail`] ? `Fail</h1>` : `Победа!</h1>`}
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
            ${drawProgressbar(answers)}
          </ul>
        </td>

    ${gameState[`fail`] ? `` :
    `<td class="result__points">×&nbsp;100</td>
     <td class="result__total">${countPoints(answers, gameState.lives).answers}</td>`}
      </tr>
    ${!answers[`timeFastCount`] ? `` :
    `<tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${countPoints(answers, gameState.lives).timeFastCount}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${countPoints(answers, gameState.lives).timeFast}</td>
      </tr>`}
    ${!gameState[`lives`] ? `` :
    `<tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${gameState.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${countPoints(answers, gameState.lives).lives}</td>
      </tr>`}
     ${!answers[`timeSlowCount`] ? `` :
    `<tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${countPoints(answers, gameState.lives).timeSlowCount}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${countPoints(answers, gameState.lives).timeSlow}</td>
      </tr>`}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${gameState[`fail`] ? `Fail` : countPoints(answers, gameState.lives).total}</td>
      </tr>
    </table>
  </div>`;

export {templateStats};
