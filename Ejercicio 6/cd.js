function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const email = document.getElementById("email").value.trim();
    const resultado = document.getElementById("resultado");

    let mensaje = "";
    let esValido = true;

    if (nombre === "" || apellido === "") {
        mensaje += "El nombre y el apellido no pueden estar vacíos.<br>";
        esValido = false;
    } else if (nombre.length > 50 || apellido.length > 50) {
        mensaje += "El nombre y el apellido deben tener un máximo de 50 caracteres.<br>";
        esValido = false;
    }

    if (isNaN(edad) || edad < 0) {
        mensaje += "La edad no debe ser negativa.<br>";
        esValido = false;
    } else if (edad < 18) {
        mensaje += "Debe ser mayor de edad.<br>";
        esValido = false;
    }

    if (isNaN(altura) || altura < 0) {
        mensaje += "La altura no debe ser negativa.<br>";
        esValido = false;
    } else if (altura > 230) {
        mensaje += "La altura no puede ser mayor a 230 cm.<br>";
        esValido = false;
    }

    if (email === "") {
        mensaje += "El correo electrónico no puede estar vacío.<br>";
        esValido = false;
    } else if (!email.includes("@")) {
        mensaje += "El correo electrónico debe incluir '@'.<br>";
        esValido = false;
    }

    if (esValido) {
        resultado.innerHTML = "Todos los datos son válidos.";
        resultado.className = "resultado-correcto";
    } else {
        resultado.innerHTML = mensaje;
        resultado.className = "resultado-incorrecto";
    }

    return false; 
}
