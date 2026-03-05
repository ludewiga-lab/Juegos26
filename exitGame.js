// exitGame.js
window.addEventListener("load", function () {
    const path = window.location.pathname.split("/").pop(); // index.html o juego1.html

    // Solo aplicar confirmación en el index
    if (path === "index.html" || path === "") {

        window.addEventListener("beforeunload", function (e) {
            // Muestra mensaje de confirmación
            e.preventDefault();
            e.returnValue = "¿Seguro que quieres salir del Game Center?";
        });

    }
});
