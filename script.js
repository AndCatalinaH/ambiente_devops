// 1. Encontrar el botón en el HTML por su ID
const boton = document.getElementById('miBoton');

// 2. Añadir un "escuchador de eventos" que reaccione al clic
boton.addEventListener('click', function() {
  alert('¡Felicidades! Tu ambiente de desarrollo está completo y es interactivo.');
});