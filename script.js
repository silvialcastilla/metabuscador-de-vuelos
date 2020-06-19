document.getElementsByTagName('form')[0].addEventListener('submit', (e) => {
    e.preventDefault();
    let vuelo = recolectarDatos()
    
    if (!comprobarDatos(vuelo)) {
    alert('Rellena los datos')
    } else {
    new FormData(document.getElementsByTagName('form')[0])
    // buscadorAvion(vuelo)
    }
})
    
    
    // let buscadorAvion = async({ origen, destino, ida, vuelta, adultos, ninios, bebes }) => {
    // let res = await fetch(`http://127.0.0.1:5500/flights/from/${origen}/to/${destino}/date_1/${ida}/adults/${adultos}/date_2/${vuelta}/kids/${ninios}/babies/${bebes}`)
    // let datos = await res.json()
    // pintarVuelo(datos)
    // }
    
document.addEventListener("formdata", event => {
    
    let vuelo = {
    ida : event.target[0].value,
    vuelta : event.target[1].value,
    origen : event.target[2].value,
    destino : event.target[3].value,
    adultos : event.target[4].value,
    ninios : event.target[5].value,
    bebes : event.target[6].value,
    
    }

    const request = new XMLHttpRequest();
    request.open("GET", `http://127.0.0.1:5500/flights/from/${vuelo.origen}/to/${vuelo.destino}/date_1/${vuelo.ida}/adults/${vuelo.adultos}/date_2/${vuelo.vuelta}/kids/${vuelo.ninios}/babies/${vuelo.bebes}`);
    request.send(vuelo);
    // get the response
    request.onload = function() {
    const jsonResponse = JSON.parse(this.response);
    pintarVuelo(jsonResponse.datosIda)
    pintarVuelo(jsonResponse.datosVuelta)
    };
});
    
    
let comprobarDatos = ({ origen, destino, ida, vuelta, adultos }) => {
    if (origen === '' || destino === '' || ida === '' || vuelta === '' || adultos === '') {
    return false
    } else {
    return true
    }
}
    
let recolectarDatos = () => {
    return {
    origen: document.getElementById('vuelo-origen').value,
    destino: document.getElementById('vuelo-vuelta').value,
    ida: document.getElementById('fechaida').value,
    vuelta: document.getElementById('fechavuelta').value,
    adultos: document.getElementById('adultos').value,
    ninios: document.getElementById('ninios').value,
    bebes: document.getElementById('bebes').value
    }
}

let resultado = {
    vueloIda:{
        title: 'Vuelo de ida',
        empresa: 'Iberia',
        origin: {
            aeropuertoSalida: 'BARAJAS',
            origen: 'MADRID',
            horarioSalida: '14:00',
            fechaSalida: 'DATE'
        },
        destiny: {
            aeropuertoLlegada: 'BERGAMO',
            destino: 'MILAN',
            horarioLlegada: '16:00',
            fechaLlegada: 'DATE'
        },
        price: '1500$'
    },
    vueloSalida:{
        title: 'Vuelo de vuelta',
        empresa: 'Iberia',
        origin: {
            aeropuertoSalida: 'BARAJAS',
            origen: 'MADRID',
            horarioSalida: '14:00',
            fechaSalida: 'DATE'
        },
        destiny: {
            aeropuertoLlegada: 'BERGAMO',
            destino: 'MILAN',
            horarioLlegada: '16:00',
            fechaLlegada: 'DATE'
        },
        price: '1500$'
    },
}

let pintarVuelo = ({title,empresa,origin,destiny,price}) => {
    
    const { aeropuertoSalida, origen, horarioSalida, fechaSalida } = origin
    const { aeropuertoLlegada, destino, horarioLlegada, fechaLlegada } = destiny
    let $$main = document.getElementsByTagName('main')[0]
    let cajaVuelo = document.createElement('div')
    cajaVuelo.setAttribute('class', 'caja-vuelo')
    let cajaIda = document.createElement('article')
    cajaIda.setAttribute('class', 'caja-ida')
    let cajaDuracion = document.createElement('article')
    let cajaPrecio = document.createElement('article')
    cajaPrecio.setAttribute('class', 'caja-precio')
    let cajaVuelta = document.createElement('article')
    cajaVuelta.setAttribute('class', 'caja-vuelta')

    
    let salidaTitle = document.createElement('h2')
    salidaTitle.innerText = title
    salidaTitle.setAttribute('class','title')

    let aeropuertoIda = document.createElement('p')
    aeropuertoIda.innerText = aeropuertoSalida
    aeropuertoIda.setAttribute('class','aeropuerto')
    let origenIda = document.createElement('p')
    origenIda.innerText = origen
    origenIda.setAttribute('class','ciudad')
    let salidaFecha = document.createElement('p')
    salidaFecha.innerText = fechaSalida
    salidaFecha.setAttribute('class','fecha')
    let horaIda = document.createElement('p')
    horaIda.innerText = horarioSalida
    horaIda.setAttribute('class','hora')
    
    let image = document.createElement('img')
    if(title === 'Vuelo de ida'){
        image.setAttribute('src', 'img/plane.png')
    }else{
        image.setAttribute('src', 'img/plane2.png')
    }
    image.setAttribute('class', 'imagen')
    let duracion = document.createElement('p')
    duracion.innerText = '1 hora'
    duracion.setAttribute('class','duracion')

    let aeropuertoDestino = document.createElement('p')
    aeropuertoDestino.innerText = aeropuertoLlegada
    aeropuertoDestino.setAttribute('class','aeropuerto')
    let Destino = document.createElement('p')
    Destino.innerText = destino
    Destino.setAttribute('class','ciudad')
    let llegadaFecha = document.createElement('p')
    llegadaFecha.innerText = fechaLlegada
    llegadaFecha.setAttribute('class','fecha')
    let horaDestino = document.createElement('p')
    horaDestino.innerText = horarioLlegada
    horaDestino.setAttribute('class','hora')
    

    
    let precio = document.createElement('p')
    precio.innerText = price
    let empresaVuelo = document.createElement('p')
    empresaVuelo.innerText = empresa
    precio.setAttribute('class', 'precio')
    
    cajaVuelo.appendChild(salidaTitle)
    cajaIda.appendChild(aeropuertoIda)
    cajaIda.appendChild(origenIda)
    cajaIda.appendChild(salidaFecha)
    cajaIda.appendChild(horaIda)
    cajaDuracion.appendChild(image)
    cajaDuracion.appendChild(duracion)
    cajaVuelta.appendChild(aeropuertoDestino)
    cajaVuelta.appendChild(Destino)
    cajaVuelta.appendChild(llegadaFecha)
    cajaVuelta.appendChild(horaDestino)
    cajaPrecio.appendChild(precio)
    cajaPrecio.appendChild(empresaVuelo)
    cajaVuelo.appendChild(cajaIda)
    cajaVuelo.appendChild(cajaDuracion)
    cajaVuelo.appendChild(cajaVuelta)
    cajaVuelo.appendChild(cajaPrecio)
    $$main.appendChild(cajaVuelo)
}

