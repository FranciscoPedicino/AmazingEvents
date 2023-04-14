
 const contenedor = document.getElementById("contenedor")

 const url=` https://mindhub-xj03.onrender.com/api/amazing`
 fetch(url)
 .then(Response => Response.json())
 .then(date =>{
  let eventos=date.events 
      let details = location.search
let params = new URLSearchParams(details)
let idDetails = params.get("name")

let eventoEncontrado = eventos.find((evento) => evento.name === idDetails)

let cards = ""
cards += agregarEdetailas(eventoEncontrado)

function agregarEdetailas(evento) {
  return `<div class="  cartas-card ">
  <div>
  <img src="${evento.image}" class=" img-cartas-details alt="feria de comida  ">
  </div>
  <div class="lista-details">
  <ul>
    <li class="li-details">Date:${evento.date} </li>
    <li class="li-details">Description:${evento.description}</li>
    <li class="li-details">Category:${evento.category}</li>
    <li class="li-details">Place:${evento.place}</li>
    <li class="li-details">Capacity:${evento.capacity}</li>
    <li class="li-details">Estimate:${evento.estimate}</li>
    <li class="li-details"> Price:${evento.price}</li>
  </ul>
</div>
  </div>`
}

contenedor.innerHTML = cards;
 }
  )






