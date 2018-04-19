import StatsView from "./stats-view.js";
import drawProgressbar from './../service/progress-bar.js';
import countPoints from './../service/points-count.js';
import {gameState, answers} from './../data/data.js';

export default () => {
  const stats = new StatsView(gameState, answers);

  stats.countScore = countPoints;
  stats.drawBar = drawProgressbar;

  return stats.element;
};
