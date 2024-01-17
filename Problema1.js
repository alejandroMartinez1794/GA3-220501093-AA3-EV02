function calcular() {
  // Obtener los valores de los elementos del formulario
  var figura = document.getElementById('figura').value;
  var valor1 = parseFloat(document.getElementById('valor1').value);
  var valor2 = parseFloat(document.getElementById('valor2').value);

  // Variables para almacenar el área y el perímetro
  var area = 0;
  var perimetro = 0;

  // Calcular el área y el perímetro según la figura seleccionada
  if (figura === 'triangulo') {
    area = 0.5 * valor1 * valor2;
    perimetro = valor1 + valor2 + Math.sqrt(valor1 * valor1 + valor2 * valor2);
  } else if (figura === 'circulo') {
    area = Math.PI * valor1 * valor1;
    perimetro = 2 * Math.PI * valor1;
  } else if (figura === 'cuadrado') {
    area = valor1 * valor1;
    perimetro = 4 * valor1;
  } else if (figura === 'rectangulo') {
    area = valor1 * valor2;
    perimetro = 2 * (valor1 + valor2);
  }

  // Construir los mensajes para mostrar en los elementos HTML
  var mensajeArea = 'Área: ' + area.toFixed(2);
  var mensajePerimetro = 'Perímetro: ' + perimetro.toFixed(2);

  // Mostrar el resultado del área en el elemento HTML correspondiente
  var resultadoAreaElemento = document.getElementById('resultadoArea');
  resultadoAreaElemento.innerText = mensajeArea;

  // Mostrar el resultado del perímetro en el elemento HTML correspondiente
  var resultadoPerimetroElemento = document.getElementById('resultadoPerimetro');
  resultadoPerimetroElemento.innerText = mensajePerimetro;

  // Mostrar una alerta con los resultados
  alert(mensajeArea + '\n' + mensajePerimetro);
}
  