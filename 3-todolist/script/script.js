 let contador = 0

const lista = document.getElementById('lista')

 document.getElementById('agregar').addEventListener('click', function(event) {
    event.preventDefault();
    contador+=1;

    const elementoHijo = document.createElement('button')
    
    elementoHijo.id = `boton${contador}`;
    elementoHijo.textContent = "Eliminar tarea"

    const tarea = document.getElementById('tarea').value;
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.innerHTML = `<p id="hola${contador}">${tarea}</p>`;

    lista.append(nuevoParrafo)
    lista.appendChild(elementoHijo)
});