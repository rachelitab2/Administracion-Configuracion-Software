/* =====================================================
   RONALD - Interactividad del Control de Cambios.
   ===================================================== */
(function () {
    "use strict";

    // Etapas del flujo de la sección #cambios
    const pasos = document.querySelectorAll("#cambios .paso");

    // Si la sección no existe en la página, no hace nada
    if (pasos.length === 0) return;

    // Responsabilidad única: actualizar el estado visual según la etapa elegida
    function seleccionarPaso(indice) {
        pasos.forEach(function (paso, i) {
            paso.classList.toggle("activo", i === indice);
            paso.classList.toggle("completado", i < indice);
        });
    }

    // Responsabilidad única: conectar los eventos de cada etapa
    pasos.forEach(function (paso, i) {
        // Clic con el mouse
        paso.addEventListener("click", function () {
            seleccionarPaso(i);
        });

        // Teclado: Enter o Espacio, para que sea accesible
        paso.addEventListener("keydown", function (evento) {
            if (evento.key === "Enter" || evento.key === " ") {
                evento.preventDefault();
                seleccionarPaso(i);
            }
        });
    });
})();