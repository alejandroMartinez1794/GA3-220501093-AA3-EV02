// Función para leer un vector de números enteros
function leerVector() {
    let vector = [];

    // Bucle para solicitar al usuario que ingrese 5 números
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));

        // Validar que el número sea un entero válido
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número entero válido.");
            i--; // Decrementar el índice para volver a solicitar el mismo número
        } else {
            vector.push(numero); // Agregar el número al vector
        }
    }

    return vector; // Devolver el vector ingresado
}

// Función para mezclar dos vectores ordenados ascendentemente
function mezclarVectores(vector1, vector2) {
    return vector1.concat(vector2).sort((a, b) => a - b);
}

// Función para resolver el problema al hacer clic en el botón
function resolverProblema() {
    // Leer dos vectores del usuario
    const vector1 = leerVector();
    const vector2 = leerVector();

    // Mezclar los vectores y obtener el resultado
    const resultado = mezclarVectores(vector1, vector2);

    // Mostrar el resultado en un alert
    alert("La lista ordenada de la mezcla de los dos vectores es: " + resultado.join(" "));

    // Mostrar el resultado en la página
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = "La lista ordenada de la mezcla de los dos vectores es: " + resultado.join(" ");
}
