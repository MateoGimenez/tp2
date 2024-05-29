function calcularArea() {
    const baseRectanguloInput = document.getElementById("baseRectangulo");
    const alturaRectanguloInput = document.getElementById("alturaRectangulo");
    const baseTrianguloInput = document.getElementById("baseTriangulo");
    const alturaTrianguloInput = document.getElementById("alturaTriangulo");

    const baseRectangulo = parseFloat(baseRectanguloInput.value);
    const alturaRectangulo = parseFloat(alturaRectanguloInput.value);
    const baseTriangulo = parseFloat(baseTrianguloInput.value);
    const alturaTriangulo = parseFloat(alturaTrianguloInput.value);

    if (isNaN(baseRectangulo) || isNaN(alturaRectangulo) || isNaN(baseTriangulo) || isNaN(alturaTriangulo) ||
        baseRectangulo <= 0 || alturaRectangulo <= 0 || baseTriangulo <= 0 || alturaTriangulo <= 0) {
        alert("Por favor ingrese valores positivos en todos los campos");
        return;
    }

    const areaRectangulo = baseRectangulo * alturaRectangulo;
    const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    const areaTotal = areaRectangulo + areaTriangulo;

    alert("El area total es " + areaTotal + "m²")

    // mg mas cuando los campos estan limpios
    baseRectanguloInput.value = "";
    alturaRectanguloInput.value = "";
    baseTrianguloInput.value = "";
    alturaTrianguloInput.value = "";
}
