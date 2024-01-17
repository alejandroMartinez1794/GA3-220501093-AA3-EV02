// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Declarar un vector para almacenar las edades
    const edades = [];
  
    // Función para validar que la edad esté en el rango correcto
    function validarEdad(edad) {
      return edad >= 1 && edad <= 120;
    }
  
    // Función para ingresar una edad con validación
    function ingresarEdad() {
      let edad;
      do {
        edad = parseInt(prompt("Ingrese una edad (entre 1 y 120):"));
        if (!validarEdad(edad)) {
          alert("Error: La edad debe estar en un rango entre 1 y 120.");
        }
      } while (!validarEdad(edad));
  
      return edad;
    }
  
    // Función para ejecutar el código y mostrar resultados
    function calcularEstadisticas() {
      // Limpiar el vector antes de cada cálculo
      edades.length = 0;
  
      // Llenar el vector con edades
      for (let i = 0; i < 10; i++) {
        edades.push(ingresarEdad());
      }
  
      // Inicializar variables para estadísticas
      let menoresEdad = 0;
      let mayoresEdad = 0;
      let adultosMayores = 0;
      let edadMinima = edades[0];
      let edadMaxima = edades[0];
      let sumaEdades = 0;
  
      // Calcular estadísticas
      for (let i = 0; i < edades.length; i++) {
        sumaEdades += edades[i];
  
        if (edades[i] < 18) {
          menoresEdad++;
        } else if (edades[i] >= 18 && edades[i] < 60) {
          mayoresEdad++;
        } else {
          adultosMayores++;
        }
  
        // Actualizar edad mínima y máxima
        if (edades[i] < edadMinima) {
          edadMinima = edades[i];
        }
        if (edades[i] > edadMaxima) {
          edadMaxima = edades[i];
        }
      }
  
      // Calcular promedio de edades
      const promedioEdades = sumaEdades / edades.length;
  
      // Mostrar resultados en la página
      const resultadosDiv = document.getElementById("resultados");
      resultadosDiv.innerHTML = `
        <p>Personas menores de edad: ${menoresEdad}</p>
        <p>Personas mayores de edad: ${mayoresEdad}</p>
        <p>Adultos mayores: ${adultosMayores}</p>
        <p>Edad mínima: ${edadMinima}</p>
        <p>Edad máxima: ${edadMaxima}</p>
        <p>Promedio de edades: ${promedioEdades.toFixed(2)}</p>
      `;
    }
  
    // Obtener el botón y agregar un evento de clic
    const calcularBtn = document.getElementById("calcularBtn");
    calcularBtn.addEventListener("click", calcularEstadisticas);
  });
  