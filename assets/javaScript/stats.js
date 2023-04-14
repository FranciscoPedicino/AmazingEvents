const url=`https://mindhub-xj03.onrender.com/api/amazing`
fetch(url)
.then(Response => Response.json())
.then( date =>{
  let eventos=date.events
  console.log(eventos);
  function generarTabla() {
    const primeraTabla = document.getElementById("primer-tabla")
    let  eventoPasado= []
    let eventosFuturos = []

    let eventosAsistencia = [];

    for (let evento of eventos) {
      if (evento.date < date.currentDate && evento.capacity) {
        let porcentajeAsistencia = (evento.assistance / evento.capacity) * 100;
        console.log(porcentajeAsistencia)


        const eventoAsistencia = {
          nombre: evento.name,
          asistencia: porcentajeAsistencia,
        };
        eventosAsistencia.push(eventoAsistencia)
        eventoPasado.push(evento)
      } else {
        eventosFuturos.push(evento)
      }
    }
    let listaporcentajePasado=[]
    eventoPasado.forEach(evento=>{
     let resultado = ((evento.assistance* 100))/evento.capacity.toFixed(1)
     listaporcentajePasado.push({nombre: evento.name,resultado: resultado})
  })
  console.log(listaporcentajePasado);
    const eventoMayorAsistencia = listaporcentajePasado.sort((a, b) => {
      if(a.resultado == b.resultado){
        return 0
      }if (a.resultado > b.resultado) {
        return -1
      }
      else{
        1
      }
    })
    console.log(eventoMayorAsistencia);
    const eventoMenorAsistencia = listaporcentajePasado.sort((a, b) => {
      if(a.resultado == b.resultado){
        return 0
      }if (a.resultado < b.resultado) {
        return -1
      }
      else{
        1
      }
    })
    
    

  
  
  let mayorAforo = eventos[0];
  for (let i = 1; i < eventos.length; i++) {
    if (eventos[i].capacity > mayorAforo.capacity) {
      mayorAforo = eventos[i];
    }
  }

  let tabla1 = "";
  tabla1 += `
        <table>
          <thead>
            <tr>
              <th>Events with the highest percentage of attendants</th>
              <th>Events with the lowest percentage of attendants</th>
              <th>Event with the larger capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${eventoMayorAsistencia[17].nombre} ${eventoMayorAsistencia[17].resultado} %</td>
              <td>${eventoMenorAsistencia[0].nombre} ${eventoMenorAsistencia[0].resultado} %</td>
              <td>${mayorAforo.name}</td>
            </tr>
          </tbody>
        </table>
      `;

  primeraTabla.innerHTML = tabla1;
  }
  generarTabla() 
  
 
    function generarTabla2() {
      const segundaTabla = document.getElementById(`tabla2`)
      const eventosFuturos = eventos.filter(evento => evento.date > date.currentDate)
      const categoriasUnicas = [...new Set(eventosFuturos.map(evento => evento.category))]
      
      let tabla2 =``
      tabla2 += `<table>
        <thead>
          <tr>
            <th> Categories </th>
            <th> Revenues </th>
            <th> Percentage off attendance </th>
          </tr>
        </thead>
        <tbody>`
        
      for (let categoria of categoriasUnicas) {
        const eventosCategoria = eventosFuturos.filter(evento => evento.category === categoria)
        let totalIngreso = 0
        let totalAsistencia = 0
        eventosCategoria.forEach(evento => {
          totalIngreso += evento.estimate * evento.price
          totalAsistencia += evento.estimate
        })
        const porcentajeAsistencia = ((totalAsistencia / eventosCategoria.reduce((total, evento) => total + evento.capacity, 0)) * 100).toFixed(1)
        

        tabla2 += `
          <tr>
            <td> ${categoria} </td>+
            <td> ${totalIngreso} </td>
            <td> ${porcentajeAsistencia}% </td>
          </tr>`
      }
      
      tabla2 += `
        </tbody>
      </table>`
      
      segundaTabla.innerHTML = tabla2
    }
    generarTabla2()

    function generarTabla3(){ 
      const terceraTabla=document.getElementById(`tabla3`)
      const eventosPasados = eventos.filter(evento => evento.date < date.currentDate)
      const categoriasUnicas = [...new Set(eventosPasados.map(evento => evento.category))]
      
      let tabla3 =``
      tabla3+= `<table>
        <thead>
          <tr>
            <th> Categories </th>
            <th> Revenues </th>
            <th> Percentage off attendance </th>
          </tr>
        </thead>
        <tbody>`
        
      for (let categoria of categoriasUnicas) {
        const eventosCategoria = eventosPasados.filter(evento => evento.category === categoria)
        let totalIngreso = 0
        let totalAsistencia = 0
      for (let evento of eventosCategoria) {
            totalIngreso += evento.assistance * evento.price
            totalAsistencia += evento.assistance
}
const porcentajeAsistencia = ((totalAsistencia / eventosCategoria.reduce((total, evento) => total + evento.capacity, 0)) * 100).toFixed(1)

        tabla3+= `
          <tr>
            <td> ${categoria} </td>
            <td> ${totalIngreso} </td>
            <td> ${porcentajeAsistencia}% </td>
          </tr>`
      }
      
      tabla3 += `
        </tbody>
      </table>`
      
      terceraTabla.innerHTML = tabla3
    }
    generarTabla3()
})






















































