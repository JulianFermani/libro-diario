
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
  let debe = document.querySelector('.debe');
  let haber = document.querySelector('.haber');


  // Define y crea nueva filas, con sus
  // respectivas celdas
  let filaNueva = document.createElement('tr');
  let nuevaFecha = document.createElement('td');
  let nuevaCuenta = document.createElement('td');
  let nuevaCuentaPatrimonial = document.createElement('td');
  let montoDebe = document.createElement('td');
  let montoHaber = document.createElement('td');

  // Selecciona la tabla, filas y celdas
  let tabla = document.querySelector('.table');
  let tbody = document.querySelector('.tbody');

  
  // Modifico los datos de las 
  // nuevas celdas
  nuevaFecha.innerHTML = fecha;
  nuevaCuenta.innerHTML = cuenta;
  nuevaCuentaPatrimonial.innerHTML = cuentaPatrimonial;
  

  // Añado las filas y celdas
  // en la página
  tabla.appendChild(tbody);
  tbody.appendChild(filaNueva);
  filaNueva.appendChild(nuevaFecha);
  filaNueva.appendChild(nuevaCuentaPatrimonial);
  filaNueva.appendChild(nuevaCuenta);

  // Sentencia, donde checkeo si está
  // seleccionada la opción de debe o haber,
  // con su respectiva acción
  if (debe.checked){
    montoDebe.innerHTML = monto;
    filaNueva.appendChild(montoDebe);
    montoHaber.innerHTML = '---';
    filaNueva.appendChild(montoHaber);
    nuevaCuenta.classList.add('textoIzquierda');
  } else if(haber.checked){
    nuevaCuenta.classList.add('textoIzquierda');
    nuevaCuenta.classList.add('sangria');
    montoDebe.innerHTML = '---';
    filaNueva.appendChild(montoDebe);
    montoHaber.innerHTML = monto;
    filaNueva.appendChild(montoHaber);
  }else {
    alert('¡Selecciona si va en el debe o haber!');
    filaNueva.removeChild(nuevaFecha);
    filaNueva.removeChild(nuevaCuentaPatrimonial);
    filaNueva.removeChild(nuevaCuenta);
  };

  // Establezco clases para las celdas
  nuevaFecha.classList.add('table__tr--td');
  nuevaCuenta.classList.add('table__tr--td');
  nuevaCuentaPatrimonial.classList.add('table__tr--td');
  montoDebe.classList.add('table__tr--td');
  montoHaber.classList.add('table__tr--td');
});