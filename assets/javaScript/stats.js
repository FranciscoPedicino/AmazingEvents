const url=`https://mindhub-xj03.onrender.com/api/amazing`
fetch(url)
.then(Response => Response.json())
.then( date =>{
  let eventos=date.events
  function generarTabla() {
    const primeraTabla = document.getElementById("primer-tabla")
    const eventosSord = eventos.sort((a, b) => b.assistance - a.assistance)
    const mayorAsistencia = eventosSord[0]
    const menorAsistencia = eventosSord[eventosSord.length - 1]
    const mayorAforo = eventos.sort((a, b) => b.capacity - a.capacity)[0]
    
    let tabla1 = ""
    tabla1 += `<table>
      <thead>
        <tr>
          <th>Events with the highest percentage of attendants</th>
          <th>Events with the lowest percentage of attendants</th>
          <th>Event with the larger capacity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${mayorAsistencia.name}</td>
          <td>${menorAsistencia.name}</td>
          <td>${mayorAforo.name}</td>
        </tr>
      </tbody>
    </table>`
    
    primeraTabla.innerHTML = tabla1
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
        const porcentageAsistencia = ((totalAsistencia / eventosCategoria[0].capacity) * 100).toFixed(1)
        
        tabla2 += `
          <tr>
            <td> ${categoria} </td>
            <td> ${totalIngreso} </td>
            <td> ${porcentageAsistencia}% </td>
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
        const porcentageAsistencia = ((totalAsistencia / eventosCategoria[0].capacity) * 100).toFixed(1)
        tabla3+= `
          <tr>
            <td> ${categoria} </td>
            <td> ${totalIngreso} </td>
            <td> ${porcentageAsistencia}% </td>
          </tr>`
      }
      
      tabla3 += `
        </tbody>
      </table>`
      
      terceraTabla.innerHTML = tabla3
    }
    generarTabla3()
})





















































