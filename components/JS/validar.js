document.getElementById("enviarBoton").addEventListener("click", function() {
    if (validarFormulario()) {
        document.getElementById("miFormulario").submit();
    }
});

function validarFormulario() {
    const tipoDocumento = document.getElementById("Tipodoc").value;
    const documento = document.getElementById("Doc").value;
    const primerNombre = document.getElementById("Fname").value;
    const primerApellido = document.getElementById("Apellido");
    const fechaNacimiento = document.getElementById("date");
    const fechaNacimientoDate = new Date(fechaNacimiento);ç
    const fechaActual = new Date(); 
    const generoSexo = document.getElementById("Gen");
    const numeroCel = document.getElementById("tel").value;
    const email = document.getElementById("email");
    const city = document.getElementById("City");
    const direccion = document.getElementById("dir");
    const escivi = docuement.getElementById("escivi");
    const nivest = document.getElementById("nivest");
    const signaturePad = new SignaturePad(document.querySelector("canvas"));
    const firmaInput = document.getElementById("firma-base64");



    // Validaciones
    if (tipoDocumento === "Elige una opción") {
        alert("Por favor, elige un tipo de documento.");
        return false;
    }

    if (!documento.match(/^\d+$/)) {
        alert("El documento de identidad debe contener solo números.");
        return false;
    }

    if (primerNombre.trim() === "") {
        alert("El primer nombre es obligatorio.");
        return false;
    }
    
    if (primerApellido.trim() === "" ){
        alert("El apellido es obligatorio.") ;
        return false;
    }
    const fechaRegex = /^\d{2}-\d{2}-\d{4}$/;
        if (!fechaRegex.test(fechaNacimiento)) {
            alert("La fecha de nacimiento debe tener el formato DD-MM-YYYY.");
            return false;
        }    
    const edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    
    if (edad < 18) {
        alert("Debes ser mayor de 18 años para registrarte.");
        return false;
    }

    if (generoSexo === "Elige una opción") {
        alert("Por favor, elige un tipo de documento.")
        return false;
    }

    if  (!numeroCel.match(/^\d+$/)) {
        alert("El documento de identidad debe contener solo números.");
        return false;
    }
    
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("El correo electrónico no tiene un formato válido.");
        return false;
    }

    if (city === "Elige una opción") {
        alert("Por favor, elige un tipo de documento.");
        return false;
    }

    if (direccion.trim () === "" ) {
        alert ("La direccion es obligatoria");
        return false;
    }

    if (escivi === "Elige una opción") {
        alert ("Por favor, elige un tipo de documento");
        return false;
    }

    if (nivest === "Elige una opción"){
        alert ("Por favor, elige un nivel educativo");
        return false;
    }
    
    if (signaturePad.isEmpty()) {
        alert("Por favor, firma antes de enviar el formulario.");
        return false;
    }

    const firmaBase64 = signaturePad.toDataURL();
    firmaInput.value = firmaBase64;

    return true;
}
