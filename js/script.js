document.addEventListener("DOMContentLoaded", () => {
  hacerCards();
});

let planes = [];
let carrito;

let validarCarrito = localStorage.getItem("carrito");

if (validarCarrito == null) {
  carrito = [];
  console.log(carrito);
} else {
  carrito = JSON.parse(validarCarrito);
  console.log(carrito);
}

function planesdieta (id, nombre, precio, imgen) {
    this.id = id;
    this.name = nombre;
    this.price = precio;
    this.img = imgen
  }


//globales

let cardsHtml = document.getElementById("card");

//resto del codigo
/*planes.push(
  new planesdieta(
    1,
    "Plan de Entrenamiento",
    2000,
    "https://api.nutricionistasofiadiloreto.com.ar/api/tratamientos/imagen/0f272af6-1c8d-4104-471b-08d655720ca3"
  )
);
planes.push(
  new planesdieta(
    2,
    "Plan Vegetariano",
    1000,
    "https://api.nutricionistasofiadiloreto.com.ar/api/tratamientos/imagen/27e67577-6b6d-49d9-471f-08d655720ca3"
  )
);
planes.push(
  new planesdieta(
    3,
    "Plan Completo",
    4000,
    "https://api.nutricionistasofiadiloreto.com.ar/api/tratamientos/imagen/dbd574b7-4a2a-4228-65bd-08d7dbf48c15"
  )
);*/

fetch('data.json')
.then((resp) => resp.json())
.then((data) => data.forEach((planesdieta) => 
  planes.push(new planesdieta (planesdieta.id, planesdieta.name, planesdieta.price, planesdieta.img))
));
console.log(planes);


const hacerCards = () => {
  cardsHtml.innerHTML = ``;

  for (plan of planes) {
    console.warn(plan.name);

    let card = document.createElement("div");
    card.className = "card-list";
    card.innerHTML = `
            <div class="card-image">
                <img src=${plan.img} alt="Anastase Maragos"/>
            </div>
            <div class="card-text"> 
                <h4>${plan.name}</h4>
                <p>$${plan.price}/Mes</p>
                <button id="${plan.id}" onclick="triggerBtnEvent(${plan.id})" class="w3-btn w3-red w3-margin-top w3-round" style="width:100%" >Elegir Plan</button>
            </div>
        `;
    cardsHtml.appendChild(card);
  }
};

function triggerBtnEvent(id) {
  console.log(`Prueba boton: ${id}`);
  for (plan of planes) {
    if (id == plan.id) {
      agregarAlCarrito(plan);
      break;
    }
  }
}

const agregarAlCarrito = (item) => {
  console.log(item);

  let aux = carrito.find((Element) => Element.id === item.id);

  if (aux === undefined) {
    carrito.push(item);
    Swal.fire({
      icon: 'success',
      title: 'El plan fue añadido correctamente al carrito!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
    guardarStorage();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error...',
      text: 'Éste plan ya se encuentra en el carrito'
    })
  }
};

const vaciarCarrito = () => {
  carrito = [];

  guardarStorage();
};

const guardarStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
