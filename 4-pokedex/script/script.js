const pokemons = [
    {
        nombre: "Mew",
        tipo: ["Psíquico"],
        altura: 40,
        peso: 4.0,
        sexo: "Desconocido",
        descripcion: "Posee el código genético de todos los Pokémon y puede hacerse invisible.",
        imagen: "assets/mew.jpg",
        region: "Kanto",
        habilidades: ["Sincronía"],
        categoria: "Singular"
    },
    {
        nombre: "Pikachu",
        tipo: ["Eléctrico"],
        altura: 40,
        peso: 6.0,
        sexo: "Macho",
        descripcion: "Almacena electricidad en sus mejillas y la libera mediante descargas eléctricas.",
        imagen: "assets/picachu.jpg",
        region: "Kanto",
        habilidades: ["Electricidad Estática", "Pararrayos"],
        categoria: "Normal"
    },
    {
        nombre: "Charizard",
        tipo: ["Fuego", "Volador"],
        altura: 170,
        peso: 90.5,
        sexo: "Macho",
        descripcion: "Escupe llamas muy potentes y vuela en busca de rivales fuertes.",
        imagen: "assets/charizard.jpg",
        region: "Kanto",
        habilidades: ["Mar Llamas", "Poder Solar"],
        categoria: "Normal"
    },
    {
        nombre: "Bulbasaur",
        tipo: ["Planta", "Veneno"],
        altura: 70,
        peso: 6.9,
        sexo: "Hembra",
        descripcion: "Lleva una semilla en el lomo que crece a medida que evoluciona.",
        imagen: "assets/bulbasaur.jpg",
        region: "Kanto",
        habilidades: ["Espesura", "Clorofila"],
        categoria: "Normal"
    },
    {
        nombre: "Squirtle",
        tipo: ["Agua"],
        altura: 50,
        peso: 9.0,
        sexo: "Macho",
        descripcion: "Se protege con su caparazón y lanza chorros de agua por la boca.",
        imagen: "assets/squirtle.jpg",
        region: "Kanto",
        habilidades: ["Torrente", "Cura Lluvia"],
        categoria: "Normal"
    },
    {
        nombre: "Eevee",
        tipo: ["Normal"],
        altura: 30,
        peso: 6.5,
        sexo: "Hembra",
        descripcion: "Su estructura genética le permite evolucionar de múltiples maneras.",
        imagen: "assets/evee.jpg",
        region: "Kanto",
        habilidades: ["Fuga", "Adaptable", "Anticipación"],
        categoria: "Normal"
    },
    {
        nombre: "Gengar",
        tipo: ["Fantasma", "Veneno"],
        altura: 150,
        peso: 40.5,
        sexo: "Macho",
        descripcion: "Se esconde en las sombras y disfruta asustando a otros seres.",
        imagen: "assets/gengar.jpg",
        region: "Kanto",
        habilidades: ["Cuerpo Maldito"],
        categoria: "Normal"
    },
    {
        nombre: "Snorlax",
        tipo: ["Normal"],
        altura: 210,
        peso: 460.0,
        sexo: "Macho",
        descripcion: "Pasa gran parte del día durmiendo y se despierta principalmente para comer.",
        imagen: "assets/snorlax.jpg",
        region: "Kanto",
        habilidades: ["Inmunidad", "Sebo", "Gula"],
        categoria: "Normal"
    },
    {
        nombre: "Mewtwo",
        tipo: ["Psíquico"],
        altura: 200,
        peso: 122.0,
        sexo: "Desconocido",
        descripcion: "Fue creado mediante experimentos genéticos y posee un enorme poder psíquico.",
        imagen: "assets/mewtwo.jpg",
        region: "Kanto",
        habilidades: ["Presión", "Nerviosismo"],
        categoria: "Legendario"
    },
    {
        nombre: "Gyarados",
        tipo: ["Agua", "Volador"],
        altura: 650,
        peso: 235.0,
        sexo: "Hembra",
        descripcion: "Es extremadamente agresivo y puede causar grandes destrozos.",
        imagen: "assets/gyarados.jpg",
        region: "Kanto",
        habilidades: ["Intimidación", "Autoestima"],
        categoria: "Normal"
    },
    {
        nombre: "Lucario",
        tipo: ["Lucha", "Acero"],
        altura: 120,
        peso: 54.0,
        sexo: "Macho",
        descripcion: "Puede percibir el aura de los seres vivos y detectar sus emociones.",
        imagen: "assets/lucario.jpg",
        region: "Sinnoh",
        habilidades: ["Impasible", "Justiciero", "Foco Interno"],
        categoria: "Normal"
    },
    {
        nombre: "Garchomp",
        tipo: ["Dragón", "Tierra"],
        altura: 190,
        peso: 95.0,
        sexo: "Hembra",
        descripcion: "Es muy veloz y puede desplazarse a gran velocidad para perseguir a sus presas.",
        imagen: "assets/garchomp.jpg",
        region: "Sinnoh",
        habilidades: ["Velo Arena", "Piel Tosca"],
        categoria: "Normal"
    },
    {
        nombre: "Greninja",
        tipo: ["Agua", "Siniestro"],
        altura: 150,
        peso: 40.0,
        sexo: "Macho",
        descripcion: "Utiliza estrellas de agua afiladas y se mueve con gran agilidad.",
        imagen: "assets/greninja.jpg",
        region: "Kalos",
        habilidades: ["Torrente", "Mutatipo"],
        categoria: "Normal"
    },
    {
        nombre: "Sylveon",
        tipo: ["Hada"],
        altura: 100,
        peso: 23.5,
        sexo: "Hembra",
        descripcion: "Emite ondas tranquilizadoras y utiliza sus apéndices para calmar a sus rivales.",
        imagen: "assets/sylveon.jpg",
        region: "Kalos",
        habilidades: ["Gran Encanto", "Piel Feérica"],
        categoria: "Normal"
    },
    {
        nombre: "Rowlet",
        tipo: ["Planta", "Volador"],
        altura: 30,
        peso: 1.5,
        sexo: "Macho",
        descripcion: "Puede volar silenciosamente y atacar con hojas afiladas.",
        imagen: "assets/rowlet.jpg",
        region: "Alola",
        habilidades: ["Espesura", "Remoto"],
        categoria: "Normal"
    }
];

const lista = document.getElementById("lista")
const caracteristicas = document.getElementById("caracteristicas")

for (let pokemon of pokemons) {
    const ficha = document.createElement("div")
    ficha.className = "fichaNombres"

    const nombre = document.createElement("button")
    nombre.className = "botonNombre"
    nombre.textContent = pokemon.nombre

    const imagen = document.createElement("img")
    imagen.className = "imagen"
    imagen.src = pokemon.imagen

    nombre.addEventListener('click', function () {
        caracteristicas.replaceChildren();
        
        const titulo = document.createElement("h2")
        titulo.textContent = "Características"
        caracteristicas.appendChild(titulo)

        const ficha = document.createElement("div")
        ficha.className = "fichaCaracteristicas"

        const imagen2 = document.createElement("img")
        imagen2.src = pokemon.imagen
        imagen2.className = "imagen2"
        ficha.appendChild(imagen2)

        for (let propiedad in pokemon) {
            if (propiedad == "imagen") {
                continue
            }

            const parrafo = document.createElement("p")
            parrafo.textContent = propiedad.toUpperCase() + ": " + pokemon[propiedad]
            ficha.appendChild(parrafo)
        }
        caracteristicas.appendChild(ficha)
    });


    ficha.appendChild(imagen)
    ficha.appendChild(nombre)

    lista.appendChild(ficha)
}







