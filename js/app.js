const form = document.querySelector('.form');

// Crea el onclick para la tabla
form.addEventListener('submit', function (event) {
    // Evento para que no se recargue la página
    event.preventDefault();

    //   // Obtiene los datos
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


    // Sentencia donde checkeo si está
    // seleccionada la opción de debe o haber,
    // con su respectiva acción
    if (debe.checked) {
        // Si debe esta seleccionado
        // entonces monto ira en debe
        montoDebe.innerHTML = monto;
        filaNueva.appendChild(montoDebe);

        // A su vez, haber estará vacio
        montoHaber.innerHTML = '---';
        filaNueva.appendChild(montoHaber);

        // Clase que contiene text align left
        nuevaCuenta.classList.add('textoIzquierda');

    } else if (haber.checked) {

        // Si haber está seleccionado
        // entonces debe estará vacio
        montoDebe.innerHTML = '---';
        filaNueva.appendChild(montoDebe);

        // Asimismo, el monto ira en el haber
        montoHaber.innerHTML = monto;
        filaNueva.appendChild(montoHaber);

        // Clases que tienen text align left
        // y text indent
        nuevaCuenta.classList.add('textoIzquierda');
        nuevaCuenta.classList.add('sangria');
    } else {
        // Si no hay nada seleccionado, entonces
        // da una alerta para que seleccione la
        // opción
        alert('¡Selecciona si va en el debe o haber!');

        // Remueve los objetos (si es que fueron puestos)
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

// Toma el boton que dice "limpiar todo"
let botonLimpiarTodo = document.querySelector('.limpiarTodo');

// Le agrega el addeventlistener mediante el click
botonLimpiarTodo.addEventListener('click', limpiarPagina);

// Función que recarga la página
function limpiarPagina() {
    location.reload();
};