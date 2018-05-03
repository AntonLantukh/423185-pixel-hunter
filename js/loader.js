import adaptServerData from './data/data-adapter';
import loadImages from './service/images-preload';

const SERVER_URL = `https://es.dump.academy/pixel-hunter`;
const APP_ID = 892759203424;


const checkStatus = (response) => {
  return new Promise((onSuccess) => {
    if (response.ok) {
      onSuccess(response);
    }
  });
};

const toJSON = (res) => res.json();

export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`)
        .then(checkStatus)
        .then(toJSON)
        .then(loadImages)
        .then(adaptServerData);
  }

  static loadResults(name) {
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`)
        .then(checkStatus)
        .then(toJSON);
  }

  static uploadData(data, name) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`, requestSettings).then(checkStatus);
  }
}
