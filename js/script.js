const planes = [];


class PlanesDieta {
    constructor(nombre, precio){

        this.name = nombre;
        this.price = precio;
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
};

//globales 


//resto del codigo
planes.push(new PlanesDieta("Plan de Entrenamiento", 2000));
planes.push(new PlanesDieta("Plan Vegetariano", 1000));
planes.push(new PlanesDieta("Plan Completo", 4000));



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

};

console.log(planes);