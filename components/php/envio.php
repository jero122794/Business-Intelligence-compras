<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recopilar los datos del formulario
    $tipoDocumento = $_POST["Tipodoc"];
    $documento = $_POST["Doc"];
    $primerNombre = $_POST["Fname"];
    $primerApellido = $_POST['Apellido'];
    $fechaNacimiento = $_POST['date'];
    $generoSexo = $_POST['Gen'];
    $numeroCel = $_POST['tel'];
    $email = $_POST['email'];
    $city = $_POST['City'];
    $direccion = $_POST['dir'];
    $escivi = $_POST['escivi'];
    $nivest = $_POPST['nivest'];
    $signaturePad = $_POST['canvas'];
    


    $servername = "tu_servidor";
    $username = "tu_usuario";
    $password = "tu_contraseña";
    $dbname = "tu_base_de_datos";

    // Crear una conexión a la base de datos
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Comprobar la conexión
    if ($conn->connect_error) {
        die("Error de conexión a la base de datos: " . $conn->connect_error);
    }

    // Insertar datos en la base de datos 
    $sql = "INSERT INTO tu_tabla (tipoDocumento, documento, primerNombre) VALUES ('$tipoDocumento', '$documento', '$primerNombre')";

    if ($conn->query($sql) === TRUE) {
        echo "Datos insertados con éxito.";
    } else {
        echo "Error al insertar datos: " . $conn->error;
    }

    // Cerrar la conexión a la base de datos
    $conn->close();
} else {
    echo "Acceso no permitido.";
}
?>