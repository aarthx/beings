export default class GiraLetra {
  constructor(letra, janelaScroll) {
    this.letra = document.querySelector(letra);
    this.janelaScroll = document.querySelector(janelaScroll);

    this.rotacionaLetra = this.rotacionaLetra.bind(this);
  }

  rotacionaLetra(e) {
    this.letra.style.transform = `rotateZ(${
      e.currentTarget.scrollTop / 10
    }deg)`;
  }

  addEventoScroll() {
    this.janelaScroll.addEventListener("scroll", this.rotacionaLetra);
  }

  init() {
    if (this.letra && this.janelaScroll) {
      this.addEventoScroll();
    }
    return this;
  }
}
