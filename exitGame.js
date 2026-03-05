(function() {
    const isIndex = location.pathname.endsWith('index.html') || location.pathname === '/' || location.pathname.endsWith('/');

    // ── Función para interceptar el botón atrás
    function confirmExit(message) {
        history.pushState(null, null, location.href);
        window.addEventListener("popstate", function () {
            const salir = confirm(message);
            if (!salir) {
                history.pushState(null, null, location.href);
            }
        });
    }

    if (isIndex) {
        // Solo en index: preguntar si se sale del navegador
        confirmExit("¿Seguro que quieres salir del Game Center?");
    } else {
        // En un juego: preguntar si se quiere salir hacia el index
        confirmExit("¿Seguro que quieres salir del juego y volver al Game Center?");
    }
})();
