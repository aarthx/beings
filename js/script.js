import MudaPage from "./modules/muda-page.js";
import GiraLetra from "./modules/gira-letra.js";
import MexeOlho from "./modules/mexe-olho.js";
import Modal from "./modules/modal.js";

const mudaPage = new MudaPage(".content-container", ".side-nav li");
mudaPage.init();

const giraLetra = new GiraLetra(".gira-letra", ".content-container");
giraLetra.init();

const mexeOlho = new MexeOlho(".iris");
mexeOlho.init();

const modal = new Modal(".olhos", '[data-modal="fechar"]', ".modal-container");
modal.init();
