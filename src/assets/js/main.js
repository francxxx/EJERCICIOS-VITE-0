import "../scss/main.scss"; //aquí importo el scss
import "./assets/_artJs.js";
import artSlider from "./assets/_artSlider.js";
//aquí importo todo el código en bruto del otro fichero

// Aquí importo la función que en el otro archivo exporto a través de un alias
// Para poder ejecutar el código aquí importado, necesitaré ejecutar o kllamar a su función. (que es la función que en el otro fichero exporto)
import { artAcordeon01 } from "./assets/_artAcordeon01.js";
import topBottom from "./assets/_topBottom.js";
import darkMode from "./assets/_darkmode.js";
import observer from "./assets/_observer.js";
import navScrollTop from "./assets/_navScrollTop.js";
import modal from "./assets/_modal.js";
import Dialog from "./assets/templates/Dialog.js";
import validationForm from "./assets/_validationForm.js";

//así llamo a la función que me viene del import, y lo hacemos cuando el dom se ha cargado. esto es un listener que espera a que el dom (html) se cargue.

document.addEventListener("DOMContentLoaded", () => {
  
  artAcordeon01();
  artSlider();
  //Obtenemos la referencia al main dentro del DOM
  const $main = document.querySelector("main");
  // Agregamos nuestro botón fab dentro del main como nuevo hijo
  $main.appendChild(topBottom());
  //Llamamos a nuestro js de la función darkMode
  darkMode();
  observer();
  navScrollTop();
  //document.body.appendChild(modal());
  const $btnOpenModal = document.querySelector("#btnOpenModal");
  $btnOpenModal.addEventListener("click" , ()=> {
    document.body.appendChild(
    modal(Dialog())
  );
  });
   validationForm();
   
  });
