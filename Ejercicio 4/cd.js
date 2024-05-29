function calcularIMC() {
    const pesoInput = document.getElementById("peso");
    const estaturaInput = document.getElementById("estatura");
    const peso = parseFloat(pesoInput.value);
    const estatura = parseFloat(estaturaInput.value);

    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        alert("Por favor, ingrese valores positivos.");
        return;
    }

    const imc = peso / (estatura ** 2);
    alert("Su IMC es: " + imc.toFixed(2));

    pesoInput.value = "";
    estaturaInput.value = "";
}
