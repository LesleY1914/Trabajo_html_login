document.addEventListener("DOMContentLoaded", function () {
    const cerrarSesionBtn = document.querySelector(".btn1");

    cerrarSesionBtn.addEventListener("click", function () {
        const confirmacion = confirm("¿Estás seguro que quieres cerrar sesión?");
        
        if (confirmacion) {
            // Realiza aquí las acciones necesarias para cerrar la sesión
            // Por ejemplo, puedes redirigir al usuario a la página de inicio de sesión
            window.location.href = "home.html"; // Cambia "Login.html" por la URL correspondiente
        } else {
            
        }
    });
});
