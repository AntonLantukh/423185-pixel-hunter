// Current game state
const INITIAL_STATE = Object.freeze({
  level: `level_0`, // Current level, 10 levels is max
  type: `two-of-two`, // Game type, 3 types
  lives: 3, // Number of lives
  time: 30, // Time
  mistake: false, // Indicator if the user made a mistake answering the question
  fail: false // Indicator to show a complete stats screen (no shortened)
});


// Answers array, dynamic filling
const answers = [];

export {INITIAL_STATE, answers};
