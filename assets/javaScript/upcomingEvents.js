const $contenedor = document.getElementById(`contenedor-eventos`)

const url=` https://mindhub-xj03.onrender.com/api/amazing`
fetch(url)
.then(Response => Response.json())
.then(date =>{
    let eventos=date.events
    let eventosFuturos =[]
    for (let  evento of eventos) {
    if (evento.date>date.currentDate){
        (eventosFuturos .push(evento))
    }
} 

let cards = ``

for(let i=0;i<eventosFuturos .length;i++){
    cards+=crearCartasUyP(eventosFuturos [i])
}

$contenedor.innerHTML=cards

const contenedorCategorias=document.getElementById(`contenedor-categorias`)
const categorias=eventos.map(evento=>evento.category)
const  listaCategorias=[...new Set (categorias)]

let buscador = document.getElementById('contenedor-buscador')
crearCategorias(listaCategorias,contenedorCategorias)

buscador.addEventListener('input', () => {
    let busqueda = buscador.value.toLowerCase()
    let categoriasElegidas = Array.from(document.querySelectorAll('input[id=checkbox]:checked')).map(valorCategoria => valorCategoria.value);
    
    let eventosFiltrados = eventosFuturos .filter((evento) => {
        return (evento.name.toLowerCase().includes(busqueda) || evento.description.toLowerCase().includes(busqueda))
        && (categoriasElegidas.length === 0 || categoriasElegidas.includes(evento.category))
        
    })
    let cards = ''
    if (eventosFiltrados.length === 0) {
        cards = '<p>No events found.</p>'
    } else {
        for (let evento of eventosFiltrados) {
            cards += crearCartasUyP(evento)
        }
    }
    document.getElementById('contenedor-eventos').innerHTML = cards
})

contenedorCategorias.addEventListener(`change`, () => {
    let busqueda = buscador.value.toLowerCase()
    let categoriasElegidas = Array.from(document.querySelectorAll('input[id=checkbox]:checked')).map(valorCategoria => valorCategoria.value)
    let eventosFiltrados = eventosFuturos .filter((evento) => {
        return (evento.name.toLowerCase().includes(busqueda) || evento.description.toLowerCase().includes(busqueda))
        && (categoriasElegidas.length === 0 || categoriasElegidas.includes(evento.category))
    });
    cards = ' '
    for (let evento of eventosFiltrados) {
        cards += crearCartasUyP(evento)
    }
    document.getElementById('contenedor-eventos').innerHTML = cards
}) 
 })
.catch(err => console.log(err)) 
import { crearCartasUyP,crearCategorias } from "../../module/funciones.js"
