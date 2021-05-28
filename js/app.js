const form = document.querySelector('.form');

// Crea el onclick para la tabla
form.addEventListener('submit', function (event) {
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
    
    // Sentencia donde checkeo si está
    // seleccionada la opción de debe o haber,
    // con su respectiva acción
    if (debe.checked) {
        // Si debe esta seleccionado
        // entonces monto ira en debe
        montoDebe.textContent = monto;
        filaNueva.appendChild(montoDebe);
        
        // A su vez, haber estará vacio
        montoHaber.innerHTML = '---';
        filaNueva.appendChild(montoHaber);
        
        // Clase que contiene text align left
        nuevaCuenta.classList.add('textoIzquierda');
        montoDebe.classList.add('montoDebe')
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
        montoHaber.classList.add('montoHaber')
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

    // Leo el boton para sumar las columnas
    let sumarTotal = document.querySelector('.sumarTotal');
    
    // Le doy la clase .mostrar al boton de sumarTotal
    sumarTotal.classList.add('mostrar');
    
    // Evento para sumar columnas del debe
    sumarTotal.addEventListener('click', sumarTodo);
    
    // Funcion para sumar columna del debe
    function sumarTodo(){
        // Empiezo declarando el total
        // de cada celda en 0
        let totalDebe = 0;
        let totalHaber = 0;
        
        // Leo el total de celdas que hay
        let celdasDebe = document.querySelectorAll('.montoDebe');
        let celdasHaber = document.querySelectorAll('.montoHaber')

        // Realiza la suma del debe
        for (let i = 0; i < celdasDebe.length; ++i) {
            totalDebe += parseFloat(celdasDebe[i].firstChild.data);  
        };

        // Realiza la suma del haber
        for (let b = 0; b < celdasHaber.length; ++b) {
            totalHaber += parseFloat(celdasHaber[b].firstChild.data);  
        };

        // Tomo la fila nueva para poner
        // el total y ambas celdas
        let filaTotalDebeyHaber = document.querySelector('.totalDebeyHaber');
        let celdaTotalDebe = document.querySelector('.tdDebe');
        let celdaTotalHaber = document.querySelector('.tdHaber');
        
        // Le doy la clase .mostrar a la fila
        filaTotalDebeyHaber.classList.add('mostrar');

        // Meto el tbody dentro
        // de la tabla y la fila dentro
        // dentro del tbody
        tabla.appendChild(tbody);
        tbody.appendChild(filaTotalDebeyHaber);

        // Le cambio el valor a la celda total del debe
        celdaTotalDebe.textContent = totalDebe;
        filaTotalDebeyHaber.appendChild(celdaTotalDebe);

        // Le cambio el valor a la celda total del haber        
        celdaTotalHaber.textContent = (totalHaber);
        filaTotalDebeyHaber.appendChild(celdaTotalHaber);
    }
    
    // Toma el boton que dice "limpiar todo"
    let botonLimpiarTodo = document.querySelector('.limpiarTodo');
    
    // Le doy la clase .mostrar al boton de limpiar todo
    botonLimpiarTodo.classList.add('mostrar');

    // Le agrega el addeventlistener mediante el click
    botonLimpiarTodo.addEventListener('click', limpiarPagina);
    
    // Función que recarga la página
    function limpiarPagina() {
        location.reload();
    };
});