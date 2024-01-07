document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento HTML con id 'miElemento'
    var miElemento = document.getElementById('miElemento');

    // Obtener datos del localStorage
    var titulo = localStorage.getItem('plato_title');
    var img = localStorage.getItem('plato_img');
    var des = localStorage.getItem('plato_des');
    var precio = localStorage.getItem('plato_precio');

    // Crear un nuevo elemento div y establecer su contenido con los datos del plato
    var nuevoParrafo = document.createElement('div');
    nuevoParrafo.innerHTML = `
        <div>
            <div>
                <img src="${img}" alt="">
            </div>
            <div>
                <div>
                    <p>${titulo}</p>
                </div>
                <div>
                    <p>${des}</p>
                </div>
                <div>
                    <p>${precio}</p>
                </div>
            </div>
        </div>
    `;

    // Agregar el nuevo elemento como hijo del elemento existente
    miElemento.appendChild(nuevoParrafo);

    // Función para manejar la confirmación de la orden
    function confirmarOrden() {
        // Obtener datos existentes del carrito del localStorage
        var datoString = localStorage.getItem("datoKey");
        var datos = JSON.parse(datoString) || [];

        // Obtener la cantidad seleccionada
        var cantidad = parseInt(document.getElementsByName("po_number")[0].value);

        // Crear un nuevo objeto con los datos del plato actual y la cantidad seleccionada
        var nuevoDato = {
            "title": titulo,
            "img": img,
            "des": des,
            "precio": precio,
            "cantidad": cantidad
        };

        // Agregar el nuevo dato al array existente según la cantidad seleccionada
        for (var i = 0; i < cantidad; i++) {
            datos.push(nuevoDato);
        }

        // Convertir el array a cadena JSON y guardar en el localStorage
        var datosString = JSON.stringify(datos);
        localStorage.setItem("datoKey", datosString);

        // Ocultar el modal después de la confirmación
        var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.hide();

        // Redirigir a la página principal
        window.location.href = "http://127.0.0.1:5500/Index.html";
    }

    // Asociar la función confirmarOrden al clic del botón dentro del modal
    document.getElementById('confirmarOrdenBtn').addEventListener('click', confirmarOrden);

    // Función para eliminar un elemento del carrito
    function elimina(numero) {
        // Obtener datos existentes del carrito del localStorage
        var datoString = localStorage.getItem("datoKey");
        var datos = JSON.parse(datoString) || [];

        // Verificar si el número es un índice válido
        if (numero >= 0 && numero < datos.length) {
            // Eliminar 1 elemento en la posición indicada
            datos.splice(numero, 1);

            // Convertir el array actualizado a cadena JSON y guardar en el localStorage
            var datosString = JSON.stringify(datos);
            localStorage.setItem("datoKey", datosString);

            // Recargar la página para reflejar los cambios en el carrito
            window.location.reload();
        } else {
            console.log("Índice no válido");
        }
    }

    // Asociar la función elimina al clic del botón eliminar en el carrito
    document.getElementById('eliminarBtn').addEventListener('click', function() {
        elimina(0); // Puedes ajustar el índice según sea necesario
    });
});
