const planes = []
const turnos = []


class PlanesDieta {
    constructor(nombre, precio, img){

        this.name = nombre;
        this.price = precio;
        this.img = img;
        this.plan = [];

        this.addPlato = () => {
            let plato = prompt("Ingrese el plato")
            let k = prompt("Ingrese la calorias")
            this.plan.push({namePlato: plato, calorias: k})
        };
        this.addPlatoSec = (plato, k) => {
            
            this.plan.push({namePlato: plato, calorias: k})
        }

    }
}

// Crear una clase turnos (nombre, apellido, tipo de turno, dia, horario, mail, direccion  )


//globales 


//resto del codigo
planes.push(new PlanesDieta("Basica", 5000, "https://llevatilde.es/imagetexts/4/48/b%C3%A1sico.png"))
planes.push(new PlanesDieta("Mediano", 15000, "https://assets.puzzlefactory.pl/puzzle/266/870/original.jpg"))
planes.push(new PlanesDieta("Te vas a morir", 25000, "https://i1.sndcdn.com/artworks-000186408657-9f34hk-t500x500.jpg"))
planes.push(new PlanesDieta("Te vas a virir", 2333000, "https://i1.sndcdn.com/artworks-000186408657-9f34hk-t500x500.jpg"))



//crear => () {} sacar turno y pedir los diferentes datos para crear el objeto y pushearlo al array

const hacerCards = () => {

    for(plan of planes){
        console.warn(plan.name)

        let card = document.createElement('div')
        card.className = "Pedro"
        card.innerHTML = `
            <h1>Hola soy el plan ${plan.name}</h1>
            <img src=${plan.img} class="pedroImg">
            <div>iefunu8iefef
            <input/>
            <p>soy una p</p>
            </div>
        `
        document.getElementById('productos').appendChild(card)
    }

}

console.log(planes)