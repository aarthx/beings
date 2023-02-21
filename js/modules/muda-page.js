export default class MudaPage {
  constructor(pageContainer, listaPages) {
    this.pageContainer = document.querySelector(pageContainer);
    this.listaPages = document.querySelectorAll(listaPages);

    this.alteraPagina = this.alteraPagina.bind(this);
  }

  alteraPagina(e) {
    e.preventDefault();
    this.pageContainer.scrollTop = 0;
    fetch(`../pages/${e.currentTarget.classList[0]}.html`)
      .then((response) => response.text())
      .then((response) => {
        this.pageContainer.innerHTML = response;
      });
  }

  addEventosMudanca() {
    this.listaPages.forEach((item) => {
      item.addEventListener("click", this.alteraPagina);
    });
  }

  init() {
    if (this.pageContainer && this.listaPages.length) {
      this.addEventosMudanca();
    }
    return this;
  }
}
