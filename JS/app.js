// app.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const usuarioInput = document.getElementById("usuario");
    const contraseñaInput = document.getElementById("contraseña");
    const warnings = document.getElementById("warnings");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const usuario = usuarioInput.value;
        const contraseña = contraseñaInput.value;

        // Realizar validaciones aquí si es necesario
        if (usuario === "" || contraseña === "") {
            warnings.textContent = "Por favor, complete todos los campos.";
            return;
        }

        // Conectar con el backend utilizando fetch
        try {
            const response = await fetch("https://backend-pets-world.onrender.com", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    usuario,
                    contraseña
                })
            });

            const data = await response.json();
            if (response.ok) { 
                window.location.href = "./vistaUsuario.html";
            } else {
                alert("Error en el inicio de sesión.");
            }
        } catch (error) {
            console.error("Error de conexión con el servidor:", error);
            alert ( "Error de conexión con el servidor.");
        }
    });
});
