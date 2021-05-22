
const form = document.querySelector('.form');


 // Crea el onclick para la tabla
form.addEventListener('submit', function(event) {
  // Evento para que no se recargue la página
  event.preventDefault();

  // Obtiene los datos
  let fecha = document.querySelector('.fecha').value;
  let cuenta = document.querySelector('.cuenta').value;
  let cuentaPatrimonial = document.querySelector('.cuentaPatrimonial').value;
  let monto = document.querySelector('.monto').value;

  // Selecciona la tabla, filas y celdas
  let tabla = document.querySelector('.table');
  let fila = document.querySelector('.table__tr');
  let celda = document.querySelector('.table__tr--td');

  // Define y crea nueva filas, con sus
  // respectivas celdas
  let filaNueva = document.createElement('tr');
  let nuevaFecha = document.createElement('td');
  let nuevaCuenta = document.createElement('td');
  let nuevaCuentaPatrimonial = document.createElement('td');
  let nuevoMonto = document.createElement('td');

  nuevaFecha.innerHTML = (fecha);
  nuevaCuenta.innerHTML = (cuenta);
  nuevaCuentaPatrimonial.innerHTML = (cuentaPatrimonial);
  nueva 




});



//
// let botonCrearTabla = document.querySelector('.botonCrearTabla');
//
// botonCrearTabla.addEventListener('click', function() {
//   // Selecciona el div padre de la tabla
//   let divDeTabla = document.querySelector('.prueba');
//
//   // Crea la tabla
//   let fila = document.createElement('tr');
//   let tabla = document.createElement('table');
//   let celda = document.createElement('td');
//
//   // Obtiene el texto para poner en la celda
//   let textoCelda = document.querySelector('.pruebaTexto').value;
//
//   // Pone la tabla en el documento
//   divDeTabla.appendChild(tabla);
//   tabla.appendChild(fila);
//   fila.appendChild(celda);
//   celda.innerHTML = ('prueba');
// })
