const signaturePad = new SignaturePad(document.querySelector('canvas'));

// Obtener los elementos necesarios
const clearButton = document.getElementById('clear-signature');
const firmaBase64Input = document.getElementById('firma-base64');

// Manejar el botón de borrar firma
clearButton.addEventListener('click', function () {
    signaturePad.clear();
    firmaBase64Input.value = '';
});

// Manejar la firma cuando se realiza
signaturePad.onEnd = function () {
    const firmaBase64 = signaturePad.toDataURL(); // Captura la firma en formato base64
    firmaBase64Input.value = firmaBase64;
};

// También puedes agregar validaciones y lógica adicional según tus necesidades

// Asegúrate de incluir este código dentro de un evento DOMContentLoaded o similar para garantizar que los elementos existan antes de manipularlos