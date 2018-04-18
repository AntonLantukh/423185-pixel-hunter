// Function to reduce the number of lives if the answer is not correct
const reduceLives = (state) => {
  state.lives--;
  state.mistake = true;
};

export default reduceLives;
