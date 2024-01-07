var micarrito = document.getElementById('carrito');
var datoString = localStorage.getItem("datoKey");
var datos = JSON.parse(datoString) || [];
var suma = 0;

for (var dato in datos) {
    suma += parseFloat(datos[dato].precio);
    console.log(datos[dato]);
    var nuevoParrafo = document.createElement('div');

    nuevoParrafo.innerHTML = `
        <h5>${datos[dato].title}</h5>
        <h5>${datos[dato].precio}</h5>
    `;

    micarrito.appendChild(nuevoParrafo);
}

// Mover esta parte fuera del bucle for
var totalParrafo = document.createElement('div');
totalParrafo.innerHTML = `
    <div>Total: ${suma}</div>
`;
micarrito.appendChild(totalParrafo);
