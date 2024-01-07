
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('.mi-formulario');

        form.addEventListener('submit', function (event) {
            const name = document.getElementById('name').value;
            const lastname = document.getElementById('lastname').value;
            const ciudad = document.getElementById('Ciudad').value;
            const sucursal = document.getElementById('Sucursal').value;
            const email = document.getElementById('email').value;
            const comentario = document.getElementById('comentario').value;

            if (name === '' || lastname === '' || ciudad === '' || sucursal === '' || email === '' || comentario === '') {
                event.preventDefault(); // Evita que el formulario se envíe si hay campos vacíos
                alert('Por favor, completa todos los campos.');
            }
        });
    });

