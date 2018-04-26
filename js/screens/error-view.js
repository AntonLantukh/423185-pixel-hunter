import AbstractView from "../abstract-view";

export default class ModalView extends AbstractView {
  constructor(error) {
    super();
    this.error = error;
  }

  get template() {
    return `<div class="error" class="central__content">
        <p class="error__message">Произошла ошибка ${this.error} =(</p>
        <p class="error__message">Пожалуйста, попробуйте перезагрузить страницу.</p>
      </div>
    </div>`;
  }

  bind() {
  }
}
