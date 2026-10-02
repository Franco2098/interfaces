let contador = 0


document.getElementById('siguiente').addEventListener('click', function(event) {
    event.preventDefault();
    if (contador > 0){
        document.getElementById('correo').classList.add('correo');
        document.getElementById('clave').classList.toggle('clave');
        contador = 0
    }
    document.getElementById('error').innerHTML = '<p>Debes poner un correo</p>';
});

document.getElementById('acceso').addEventListener('click', function(event) {
    event.preventDefault();
    if (contador > 0){
        document.getElementById('clave').classList.toggle('clave');
        document.getElementById('fin').classList.toggle('fin');
    }
    document.getElementById('error2').innerHTML = '<p>Debes poner una contraseña</p>';
});

document.getElementById('verificacion').addEventListener('input', function(event) {
    event.preventDefault();
    contador += 1
});

document.getElementById('verificacion2').addEventListener('input', function(event) {
    event.preventDefault();
    contador += 1
});
