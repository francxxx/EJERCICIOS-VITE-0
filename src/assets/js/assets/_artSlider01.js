  // Guardamos en una constante todos los carruseles que tengan esta clase.
  // Usamos querySelectorAll porque podria haber mas de un carrusel en la pagina.
  const carruseles = document.querySelectorAll(".artSlider01");

  // Recorremos cada carrusel encontrado.
  // Todo lo que pase dentro de este forEach pertenece solo a ese carrusel.
  carruseles.forEach((carrusel) => {
    // La pista es el elemento que se va a mover hacia la izquierda.
    const pista = carrusel.querySelector(".artSlider01__pista");

    // Las slides son cada una de las pantallas del carrusel.
    // Array.from convierte el resultado en un array normal para poder recorrerlo mejor.
    const slides = Array.from(carrusel.querySelectorAll(".artSlider01__slide"));

    // contador guarda en que slide estamos.
    // Empieza en 0 porque la primera slide es la posicion inicial.
    let contador = 0;

    // Estos tiempos estan separados para que sea facil cambiarlos en clase.
    const tiempoTransicion = 500;
    const tiempoEspera = 3000;

    // Si falta la pista o no hay slides, no hacemos nada y evitamos errores.
    if (!pista || slides.length === 0) return;

    // Duplicamos las slides originales y las ponemos al final de la pista.
    // Truco del infinito:
    // despues de la ultima slide real, el usuario ve una copia de la primera.
    slides.forEach((slide) => {
      const copia = slide.cloneNode(true);

      // aria-hidden evita que los lectores de pantalla lean dos veces el mismo contenido.
      copia.setAttribute("aria-hidden", "true");

      pista.appendChild(copia);
    });

    // Cada cierto tiempo avanzamos una slide.
    setInterval(() => {
      contador++;

      // Activamos la animacion y movemos la pista.
      // Cada slide ocupa el 100% del visor, por eso multiplicamos por 100.
      pista.style.transition = `transform ${tiempoTransicion}ms`;
      pista.style.transform = `translateX(-${contador * 100}%)`;

      // Cuando contador vale lo mismo que slides.length,
      // ya hemos llegado a la primera slide copiada.
      if (contador === slides.length) {
        // Esperamos a que termine la animacion antes de recolocar la pista.
        setTimeout(() => {
          // Quitamos la animacion para que el salto al inicio no se vea.
          pista.style.transition = "none";
          pista.style.transform = "translateX(0)";

          // Volvemos a poner el contador a 0:
          // visualmente estamos otra vez en la primera slide real.
          contador = 0;
        }, tiempoTransicion);
      }
    }, tiempoEspera);
  });
