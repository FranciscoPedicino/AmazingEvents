  const $contenedor = document.getElementById(`contenedor-eventos`)
const url=` https://mindhub-xj03.onrender.com/api/amazing`
fetch(url)
.then(Response => Response.json())
.then(date =>{
    let eventos=date.events
    let evento = eventos 
    let cards = ``
for ( evento of eventos) {
    cards += crearCartas(evento)
}

$contenedor.innerHTML=cards

const contenedorCategorias=document.getElementById(`contenedor-categorias`)
const categorias=eventos.map(evento=>evento.category)
 //capturo las categorias no repetidas
const  listaCategorias=[...new Set (categorias)]

let buscador = document.getElementById('contenedor-buscador')

crearCategorias(listaCategorias,contenedorCategorias)
buscador.addEventListener('input', () => {
    let busqueda = buscador.value.toLowerCase()
    let categoriasElegidas = Array.from(document.querySelectorAll('input[id=checkbox]:checked')).map(valorCategoria => valorCategoria.value);
    
    let eventosFiltrados = eventos.filter((evento) => {
        return (evento.name.toLowerCase().includes(busqueda) || evento.description.toLowerCase().includes(busqueda))
        && (categoriasElegidas.length === 0 || categoriasElegidas.includes(evento.category))
        
    })
    let cards = ''
    if (eventosFiltrados.length === 0) {
        cards = '<p>No events found.</p>'
    } else {
        for (let evento of eventosFiltrados) {
            cards += crearCartas(evento)
        }
    }
    document.getElementById('contenedor-eventos').innerHTML = cards
})

contenedorCategorias.addEventListener(`change`, () => {
    let busqueda = buscador.value.toLowerCase()
    let categoriasElegidas = Array.from(document.querySelectorAll('input[id=checkbox]:checked')).map(valorCategoria => valorCategoria.value)
    let eventosFiltrados = eventos.filter((evento) => {
        return (evento.name.toLowerCase().includes(busqueda) || evento.description.toLowerCase().includes(busqueda))
        && (categoriasElegidas.length === 0 || categoriasElegidas.includes(evento.category))
    });
    cards = ' '
    for (let evento of eventosFiltrados) {
        cards += crearCartas(evento)
    }
    document.getElementById('contenedor-eventos').innerHTML = cards
})
})
.catch(err => console.log(err))

import { crearCartas,crearCategorias,} from "../../module/funciones.js"



























