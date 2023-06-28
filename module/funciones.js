export function crearCartas(evento){ 
    return `<div class=" cartas  card " style="width: 19rem;">
    <img src="${evento.image}" class=" img-carta card-img-top " alt="feria de comida">
    <div class=" card-body  d-flex flex-column ">
    <h5 class=" h5-card  text-center "> ${evento.name} </h5>
    <p  class=" description-p text-white card-text">  ${evento.description}  </p>
    <div class=" price-botton d-flex justify-content-between ">
    <p class="   text-white ">  $ ${evento.price} </p>
    <a href="./assets/pages/details.html?name=${evento.name}" class="botton-card">Details </a>
    </div>
    </div>
    </div>` 
}
export function crearCartasUyP(evento){
  return ` <div class=" cartas  card " style="width: 19rem;">
  <img src= ${evento.image}   class=" img-carta card-img-top" alt="feria de comida ">
  <div class=" card-body  d-flex flex-column ">
    <h5 class=" h5-card  text-center ">${evento.name}  </h5>
    <p  class=" text-white card-text"> ${evento.description} </p>
    <div class="d-flex justify-content-between">
    <p class="text-white "> $ ${evento.price}  </p>
    <a href="./details.html?name=${evento.name}" class="botton-card">Details </a>
  </div>
  </div>
</div>` 
}
export function crearCategorias(categorias,contenedorCategorias){
    let template=``
    for(let categoria of categorias){
        template+=`<div class="caja-categorias">
        <label class=" categorias-j justify-content-around" for="festival">${categoria} </label>
        <input type="checkbox" name="categoriaelegida" id="checkbox"  value="${categoria}">
        </div>
        `
    }
    contenedorCategorias.innerHTML=template
}
