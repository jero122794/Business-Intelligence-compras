const registrarseButton = document.getElementById("registrarseButton");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const aceptarButton = document.getElementById("aceptarButton");

// Mostrar el popup al hacer clic en "Registrarse"
registrarseButton.addEventListener("click", () => {
    popup.style.display = "block";
});

// Cerrar el popup al hacer clic en "Cerrar"
closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Redirigir al formulario de registro al hacer clic en "Aceptar"
aceptarButton.addEventListener("click", () => {
    const aceptoDatosCheckbox = document.getElementById("aceptoDatos");
    if (aceptoDatosCheckbox.checked) {
        window.location.href = "register.html";
    } else {
        alert("Debes aceptar el tratamiento de datos para continuar.");
    }
});