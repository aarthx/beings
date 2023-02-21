import debounce from "./debounce.js";

export default class MexeOlho {
  constructor(olho) {
    this.olho = document.querySelector(olho);

    this.irisSegue = debounce(this.irisSegue.bind(this), 5);
  }

  irisSegue(e) {
    this.olho.style.left = `${e.clientX / 150 + 30}px`;
    this.olho.style.top = `${e.clientY / 250 + 20}px`;
  }

  addEventMouse() {
    window.addEventListener("mousemove", this.irisSegue);
  }

  init() {
    if (this.olho) {
      this.addEventMouse();
    }
    return this;
  }
}
