console.log(document.getElementById('titulo'))


console.log(document.getElementById('label1'))
console.log(document.getElementById('label2'))
console.log(document.getElementById('label3'))
console.log(document.getElementById('label4'))
console.log(document.getElementById('label5'))
console.log(document.getElementById('label6'))

let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellidos')
let hombre = document.getElementById('hombre')
let mujer = document.getElementById('mujer')
let mail = document.getElementById('mail')
let nick = document.getElementById('nick')
let comentario = document.getElementById('comentario')

console.log(document.getElementById('submit'))
console.log(document.getElementById('reset'))

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(nombre.value)
    console.log(apellido.value)
    if (hombre.checked) {
    console.log(hombre.value);
    } else {
        console.log(mujer.value);
    }
    console.log(mail.value)
    console.log(nick.value)
    console.log(comentario.value)

    document.getElementById('datos').innerHTML = `hola ${nombre.value} ${apellidos.value} tu eres ${hombre.value} tu mail es ${mail.value}, tu nick es ${nick.value} `;

    document.querySelector('body').classList.add('fondo')
});


