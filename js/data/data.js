// Current game state
const gameState = {
  'level': `level_0`, // Current level, 10 levels is max
  'type': `two-of-two`, // Game type, 3 types
  'lives': 3, // Number of lives
  'time': 30, // Time
  'mistake': false, // Indicator if the user made a mistake answering the question
  'fail': false // Indicator to show a complete stats screen (no shortened)
};

// Questions array
const questions = {
  'level_0': {
    'type': `two-of-two`,
    'question': `Угадайте для каждого изображения фото или рисунок?`,
    'answers': [
      {
        'image': {
          'url': `http://i.imgur.com/1KegWPz.jpg`,
          'width': 468,
          'height': 458
        },
        'type': `photo`
      },
      {
        'image': {
          'url': `https://k42.kn3.net/CF42609C8.jpg`,
          'width': 468,
          'height': 458
        },
        'type': `paint`
      }
    ],
    'next-level': `level_1`
  },
  'level_1': {
    'type': `tinder-like`,
    'question': `Угадай, фото или рисунок?`,
    'answers': [
      {
        'image': {
          'url': `https://i.imgur.com/DiHM5Zb.jpg`,
          'width': 705,
          'height': 455
        },
        'type': `photo`
      }
    ],
    'next-level': `level_2`
  },
  'level_2': {
    'type': `one-of-three`,
    'question': `Найдите рисунок среди изображений`,
    'answers': [
      {
        'image': {
          'url': `http://i.imgur.com/DKR1HtB.jpg`,
          'width': 304,
          'height': 455
        },
        'type': `photo`
      },
      {
        'image': {
          'url': `https://k42.kn3.net/D2F0370D6.jpg`,
          'width': 304,
          'height': 455
        },
        'type': `paint`
      },
      {
        'image': {
          'url': `https://i.imgur.com/DiHM5Zb.jpg`,
          'width': 304,
          'height': 455
        },
        'type': `photo`
      }
    ],
    'next-level': `level_3`
  },
  'level_3': {
    'type': `two-of-two`,
    'question': `Угадайте для каждого изображения фото или рисунок?`,
    'answers': [
      {
        'image': {
          'url': `https://i.imgur.com/DiHM5Zb.jpg`,
          'width': 468,
          'height': 458
        },
        'type': `photo`
      },
      {
        'image': {
          'url': `https://k42.kn3.net/D2F0370D6.jpg`,
          'width': 468,
          'height': 458
        },
        'type': `paint`
      }
    ],
    'next-level': `level_4`
  },
  'level_4': {
    'type': `tinder-like`,
    'question': `Угадай, фото или рисунок?`,
    'answers': [
      {
        'image': {
          'url': `http://i.imgur.com/1KegWPz.jpg`,
          'width': 705,
          'height': 455
        },
        'type': `photo`
      }
    ],
    'next-level': `level_5`
  },
  'level_5': {
    'type': `one-of-three`,
    'question': `Найдите рисунок среди изображений`,
    'answers': [
      {
        'image': {
          'url': `http://i.imgur.com/DKR1HtB.jpg`,
          'width': 304,
          'height': 455
        },
        'type': `photo`
      },
      {
        'image': {
          'url': `https://k32.kn3.net/5C7060EC5.jpg`,
          'width': 304,
          'height': 455
        },
        'type': `paint`
      },
      {
        'image': {
          'url': `http://i.imgur.com/1KegWPz.jpg`,
          'width': 304,
          'height': 455
        },
        'type': `photo`
      }
    ],
    'next-level': `level_6`
  },
  'level_6': {
    'type': `two-of-two`,
    'question': `Угадайте для каждого изображения фото или рисунок?`,
    'answers': [
      {
        'image': {
          'url': `http://i.imgur.com/1KegWPz.jpg`,
          'width': 468,
          'height': 458
        },
        'type': `photo`
      },
      {
        'image': {
          'url': `https://k42.kn3.net/D2F0370D6.jpg`,
          'width': 468,
          'height': 458
        },
        'type': `paint`
      }
    ],
    'next-level': `level_7`
  },
  'level_7': {
    'type': `tinder-like`,
    'question': `Угадай, фото или рисунок?`,
    'answers': [
      {
        'image': {
          'url': `https://k32.kn3.net/5C7060EC5.jpg`,
          'width': 705,
          'height': 455
        },
        'type': `paint`
      }
    ],
    'next-level': `level_8`
  },
  'level_8': {
    'type': `one-of-three`,
    'question': `Найдите рисунок среди изображений`,
    'answers': [
      {
        'image': {
          'url': `http://i.imgur.com/1KegWPz.jpg`,
          'width': 304,
          'height': 455
        },
        'type': `photo`
      },
      {
        'image': {
          'url': `https://k42.kn3.net/D2F0370D6.jpg`,
          'width': 304,
          'height': 455
        },
        'type': `paint`
      },
      {
        'image': {
          'url': `http://i.imgur.com/DKR1HtB.jpg`,
          'width': 304,
          'height': 455
        },
        'type': `photo`
      }
    ],
    'next-level': `level_9`
  },
  'level_9': {
    'type': `two-of-two`,
    'question': `Угадайте для каждого изображения фото или рисунок?`,
    'answers': [
      {
        'image': {
          'url': `http://i.imgur.com/1KegWPz.jpg`,
          'width': 468,
          'height': 458
        },
        'type': `photo`
      },
      {
        'image': {
          'url': `https://k32.kn3.net/5C7060EC5.jpg`,
          'width': 468,
          'height': 458
        },
        'type': `paint`
      }
    ]
  },
};

// Answers array, dynamic filling
const answers = [];

export {gameState, questions, answers};
