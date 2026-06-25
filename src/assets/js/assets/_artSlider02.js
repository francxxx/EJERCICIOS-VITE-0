export default function artSlider() {
  /*
    1. Buscamos todos los sliders de la pagina.
    querySelectorAll permite que el mismo codigo funcione
    aunque haya mas de un carrusel.
  */
  const carruseles = document.querySelectorAll(".artSlider01");

  carruseles.forEach((carrusel) => {
    /*
      2. Guardamos las partes importantes del slider actual:
      la pista que se mueve, los botones y los puntos.
    */
    const pista = carrusel.querySelector(".artSlider01__pista");
    const botonAnterior = carrusel.querySelector(".artSlider01__arrow--prev");
    const botonSiguiente = carrusel.querySelector(".artSlider01__arrow--next");
    const puntos = Array.from(carrusel.querySelectorAll(".artSlider01__track__dot"));

    if (!pista) return;

    /*
      3. Limpiamos copias anteriores.
      Esto evita duplicados si la funcion se ejecuta mas de una vez.
    */
    pista.querySelectorAll("[data-slider-clone='true']").forEach((clon) => {
      clon.remove();
    });

    const slides = Array.from(pista.querySelectorAll(".artSlider01__slide"));

    if (slides.length === 0) return;

    const tiempoTransicion = 500;
    const tiempoEspera = 3000;
    const totalSlides = slides.length;

    let posicionActual = 1;
    let intervaloId;
    let sliderBloqueado = false;

    /*
      4. Creamos dos copias para simular el carrusel infinito:
      - copia de la primera slide al final
      - copia de la ultima slide al principio
    */
    const primeraCopia = slides[0].cloneNode(true);
    const ultimaCopia = slides[totalSlides - 1].cloneNode(true);

    primeraCopia.dataset.sliderClone = "true";
    ultimaCopia.dataset.sliderClone = "true";
    primeraCopia.setAttribute("aria-hidden", "true");
    ultimaCopia.setAttribute("aria-hidden", "true");

    pista.appendChild(primeraCopia);
    pista.prepend(ultimaCopia);

    /*
      5. Calculamos que punto debe estar activo.
      La posicion real empieza en 1 porque en la posicion 0
      esta la copia de la ultima slide.
    */
    function obtenerPuntoActivo() {
      if (posicionActual === 0) return totalSlides - 1;
      if (posicionActual === totalSlides + 1) return 0;
      return posicionActual - 1;
    }

    /*
      6. Activamos solo el punto que corresponde
      a la slide que se esta viendo.
    */
    function actualizarPuntos() {
      const puntoActivo = obtenerPuntoActivo();

      puntos.forEach((punto, indice) => {
        punto.classList.toggle("active", indice === puntoActivo);
      });
    }

    /*
      7. Movemos la pista con transform.
      Cada slide ocupa el 100% del visor, por eso multiplicamos por 100.
    */
    function moverSlider(conAnimacion = true) {
      pista.style.transition = conAnimacion
        ? `transform ${tiempoTransicion}ms`
        : "none";

      pista.style.transform = `translateX(-${posicionActual * 100}%)`;
      actualizarPuntos();
    }

    /*
      8. Cuando llegamos a una copia, saltamos a la slide real equivalente.
      El salto se hace sin animacion para que no se note.
    */
    function corregirExtremos() {
      setTimeout(() => {
        if (posicionActual === totalSlides + 1) {
          posicionActual = 1;
          moverSlider(false);
        }

        if (posicionActual === 0) {
          posicionActual = totalSlides;
          moverSlider(false);
        }

        sliderBloqueado = false;
      }, tiempoTransicion);
    }

    /*
      9. Funcion unica para avanzar o retroceder.
      direccion vale 1 para siguiente y -1 para anterior.
    */
    function irA(direccion) {
      if (sliderBloqueado) return;

      sliderBloqueado = true;
      posicionActual += direccion;
      moverSlider();
      corregirExtremos();
    }

    /*
      10. Autoplay.
      clearInterval evita que se acumulen varios intervalos.
    */
    function iniciarAutoplay() {
      clearInterval(intervaloId);
      intervaloId = setInterval(() => {
        irA(1);
      }, tiempoEspera);
    }

    /*
      11. Eventos de los botones.
      Despues de cada click reiniciamos el autoplay.
    */
    botonAnterior?.addEventListener("click", () => {
      irA(-1);
      iniciarAutoplay();
    });

    botonSiguiente?.addEventListener("click", () => {
      irA(1);
      iniciarAutoplay();
    });

    /*
      12. Estado inicial.
      Colocamos la pista en la primera slide real y arrancamos el autoplay.
    */
    moverSlider(false);
    iniciarAutoplay();
  });
}
