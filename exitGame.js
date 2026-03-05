window.addEventListener("load", function () {

    // Añade estado al historial
    history.pushState({game:true}, "", location.href);

    window.addEventListener("popstate", function () {

        const salir = confirm("¿Seguro que quieres salir del juego?");

        if (!salir) {
            history.pushState({game:true}, "", location.href);
        }

    });

});
