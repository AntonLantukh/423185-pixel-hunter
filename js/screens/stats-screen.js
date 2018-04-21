import StatsView from "./stats-view";
import drawProgressbar from '../service/progress-bar';
import countPoints from '../service/points-count';
import {gameState, answers} from '../data/data';

export default () => {
  const stats = new StatsView(gameState, answers);
  stats.countScore = countPoints;
  stats.drawBar = drawProgressbar;

  return stats.element;
};
