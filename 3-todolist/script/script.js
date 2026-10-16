let contador = 0;

const lista = document.getElementById('lista');

document.getElementById('agregar').addEventListener('click', function(event) {
    event.preventDefault();
    contador++;

    const tarea = document.getElementById('tarea').value;

    // Crear un contenedor para la tarea
    const contenedor = document.createElement('div');
    contenedor.className = "contenedor"

    // Crear el párrafo
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = tarea;

    // Crear el botón
    const elementoHijo = document.createElement('button');
    elementoHijo.id = `boton${contador}`;
    elementoHijo.textContent = "X";

    // Evento para eliminar la tarea correspondiente
    elementoHijo.addEventListener('click', function() {
        this.parentNode.remove();
    });

    // Añadir el párrafo y el botón al contenedor
    contenedor.appendChild(nuevoParrafo);
    contenedor.appendChild(elementoHijo);

    // Añadir el contenedor a la lista
    lista.appendChild(contenedor);
});
