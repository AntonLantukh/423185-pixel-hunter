const gameState = {
  level: `level-0`, // Текущий уровень, всего 10
  type: `two-of-two`, // Тип игры, всего 3
  lives: 3, // Кол-во жизней
  time: 15 // Время, пока постоянное
};

const questions = {
  'level-0': {
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
        'type': `painting`
      }
    ],
    'next-level': `level-1`
  },
  'level-1': {
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
    'next-level': `level-2`
  },
  'level-2': {
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
        'type': `painting`
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
    'next-level': `level-3`
  },
  'level-3': {
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
        'type': `painting`
      }
    ],
    'next-level': `level-4`
  },
  'level-4': {
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
    'next-level': `level-5`
  },
  'level-5': {
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
        'type': `painting`
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
    'next-level': `level-6`
  },
  'level-6': {
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
        'type': `painting`
      }
    ],
    'next-level': `level-7`
  },
  'level-7': {
    'type': `tinder-like`,
    'question': `Угадай, фото или рисунок?`,
    'answers': [
      {
        'image': {
          'url': `https://k32.kn3.net/5C7060EC5.jpg`,
          'width': 705,
          'height': 455
        },
        'type': `painting`
      }
    ],
    'next-level': `level-8`
  },
  'level-8': {
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
        'type': `painting`
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
    'next-level': `level-9`
  },
  'level-9': {
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
        'type': `painting`
      }
    ]
  },
};

export {gameState, questions};
