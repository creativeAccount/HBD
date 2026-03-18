// =========================
// Selección de elementos
// =========================

// Botón para abrir la carta
const btnOpenElement = document.querySelector("#open");

// Botón para cerrar la carta
const btnCloseElement = document.querySelector("#close");

// Solapa superior del sobre
const coverElement = document.querySelector(".cover");

// Hoja de la carta
const paperElement = document.querySelector(".paper");

// =========================
// Estado inicial
// =========================

// Al iniciar, solo se puede abrir
btnCloseElement.disabled = true;

// =========================
// Función para abrir la carta
// =========================

btnOpenElement.addEventListener("click", () => {
  // Cambia el estado de los botones
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  // Abre la solapa
  coverElement.classList.add("open-cover");

  // Espera un poco para que la solapa termine de abrirse
  setTimeout(() => {
    // Manda la solapa al fondo para que no tape la hoja
    coverElement.style.zIndex = "0";

    // Ejecuta la animación de salida
    paperElement.classList.add("open-paper");

    // Reinicia la animación por si ya se abrió antes
    paperElement.classList.remove("close-paper");
    void paperElement.offsetWidth;
  }, 400);
  
});

// =========================
// Función para cerrar la carta
// =========================

btnCloseElement.addEventListener("click", () => {
  // Cambia el estado de los botones
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  // Hace que la hoja vuelva a quedar detrás del sobre
  paperElement.style.zIndex = "1";

  // Reinicia la animación de cierre
  paperElement.classList.remove("open-paper");
  void paperElement.offsetWidth;

  // Ejecuta la animación para volver a entrar al sobre
  paperElement.classList.add("close-paper");

  // Cuando la hoja termina de entrar, se cierra la solapa
  setTimeout(() => {
    coverElement.style.zIndex = "3";
    coverElement.classList.remove("open-cover");
  }, 900);
});