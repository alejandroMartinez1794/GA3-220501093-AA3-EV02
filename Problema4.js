

// Definir una matriz para almacenar la información de las personas
let personas = [];

// Función para agregar una persona
function agregarPersona() {
   // Verificar si se ha alcanzado el límite de 6 personas
  if (personas.length >= 6) {
    alert("Se ha alcanzado el límite de 6 personas. No se pueden agregar más participantes.");
    return;
  }

  // Calcular el número de persona actual
  let numeroPersona = personas.length + 1;

  // Mostrar mensaje informativo al comienzo de la entrada de datos
  alert(`Ingresa los datos para la Persona ${numeroPersona}`);

  // Solicitar al usuario información personal
  let nombre = prompt("Ingrese el nombre:");

  if (nombre === null || nombre.trim() === "") {
    alert("Operación cancelada. No se ha agregado ninguna persona.");
    return;
  }

  let cedula = prompt("Ingrese el número de identificación (cédula):");

  // Verificar si el usuario hizo clic en "Cancelar" o dejó el campo en blanco
  if (cedula === null || cedula.trim() === "") {
    alert("Operación cancelada. No se ha agregado ninguna persona.");
    return;
  }

  let fechaNacimiento = prompt("Ingrese la fecha de nacimiento:");

  // Verificar si el usuario hizo clic en "Cancelar" o dejó el campo en blanco
  if (fechaNacimiento === null || fechaNacimiento.trim() === "") {
    alert("Operación cancelada. No se ha agregado ninguna persona.");
    return;
  }

  let correo = prompt("Ingrese el correo electrónico:");

  // Verificar si el usuario hizo clic en "Cancelar" o dejó el campo en blanco
  if (correo === null || correo.trim() === "") {
    alert("Operación cancelada. No se ha agregado ninguna persona.");
    return;
  }

  let ciudadResidencia = prompt("Ingrese la ciudad de residencia:");

  // Verificar si el usuario hizo clic en "Cancelar" o dejó el campo en blanco
  if (ciudadResidencia === null || ciudadResidencia.trim() === "") {
    alert("Operación cancelada. No se ha agregado ninguna persona.");
    return;
  }

  let ciudadOrigen = prompt("Ingrese la ciudad de origen:");

  // Verificar si el usuario hizo clic en "Cancelar" o dejó el campo en blanco
  if (ciudadOrigen === null || ciudadOrigen.trim() === "") {
    alert("Operación cancelada. No se ha agregado ninguna persona.");
    return;
  }

  // Crear un objeto para almacenar la información personal
  let persona = {
    nombre: nombre,
    cedula: cedula,
    fechaNacimiento: fechaNacimiento,
    correo: correo,
    ciudadResidencia: ciudadResidencia,
    ciudadOrigen: ciudadOrigen,
    cancionesFavoritas: [],
  };

  // Solicitar información sobre canciones favoritas
  for (let i = 0; i < 3; i++) {
    let artista = prompt(`Ingrese el artista de la canción favorita ${i + 1}:`);

    // Verificar si el usuario hizo clic en "Cancelar" o dejó el campo en blanco
    if (artista === null || artista.trim() === "") {
      alert("Operación cancelada. No se ha agregado ninguna persona.");
      return;
    }

    let titulo = prompt(`Ingrese el título de la canción favorita ${i + 1}:`);

    // Verificar si el usuario hizo clic en "Cancelar" o dejó el campo en blanco
    if (titulo === null || titulo.trim() === "") {
      alert("Operación cancelada. No se ha agregado ninguna persona.");
      return;
    }

    // Crear un objeto para almacenar la información de la canción
    let cancion = {
      artista: artista,
      titulo: titulo,
    };

    // Agregar la canción al arreglo de canciones favoritas
    persona.cancionesFavoritas.push(cancion);
  }

  // Agregar la persona al arreglo general
  personas.push(persona);

  // Verificar si se ha alcanzado el límite de 6 personas después de agregar
  if (personas.length === 6) {
    alert("Se ha alcanzado el límite de 6 personas. Ahora puedes realizar la rifa.");
}
}

// Función para mostrar información personal de una persona por posición
function mostrarInformacionPersonal() {
  // Solicitar al usuario que ingrese la posición de la persona que desea ver
  let posicion = prompt("Ingrese la posición de la persona para mostrar su información:");

  // Verificar si la posición ingresada es válida
  if (posicion >= 1 && posicion <= personas.length) {
    // Obtener la persona en la posición indicada del arreglo 'personas'
    let persona = personas[posicion - 1];

    // Mostrar la información personal y canciones favoritas de la persona en un mensaje de alerta
    alert(`Información de la Persona ${posicion}:\nNombre: ${persona.nombre}\nCédula: ${persona.cedula}\nFecha de Nacimiento: ${persona.fechaNacimiento}\nCorreo Electrónico: ${persona.correo}\nCiudad de Residencia: ${persona.ciudadResidencia}\nCiudad de Origen: ${persona.ciudadOrigen}\nCanciones Favoritas: ${JSON.stringify(persona.cancionesFavoritas)}`);
  } else {
    // Si la posición no es válida, mostrar un mensaje de alerta indicando que la posición ingresada no es válida
    alert("La posición ingresada no es válida.");
  }
}
// Función para realizar una rifa entre las personas encuestadas
function realizarRifa() {
  // Verificar si hay al menos 6 personas para realizar la rifa
  if (personas.length < 6) {
      alert("No hay suficientes personas para realizar la rifa. Se necesitan al menos 6 personas.");
      return;
  }

  // Seleccionar una persona aleatoria para la rifa
  let personaGanadora = personas[Math.floor(Math.random() * personas.length)];

  // Obtener la posición de la persona ganadora
  let posicionGanadora = personas.indexOf(personaGanadora) + 1;

  // Mostrar un mensaje de alerta con la información de la persona ganadora
  alert(`¡Felicidades! La persona ganadora de la rifa es:\nNombre: ${personaGanadora.nombre}\nCédula: ${personaGanadora.cedula}\nCorreo Electrónico: ${personaGanadora.correo}\nPosición: ${posicionGanadora}`);
}