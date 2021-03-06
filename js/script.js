document.addEventListener("DOMContentLoaded", () => {
  hacerCards();
});

const planes = [];
let carrito;

let validarCarrito = localStorage.getItem("carrito");

if (validarCarrito == null) {
  carrito = [];
  console.log(carrito);
} else {
  carrito = JSON.parse(validarCarrito);
  console.log(carrito);
}

//clase planes

class PlanesDieta {
  constructor(id, nombre, precio, imgen) {
    this.id = id;
    this.name = nombre;
    this.price = precio;
    this.img = imgen;
  }
}

//globales

let cardsHtml = document.getElementById("card");

//planes disponibles

planes.push(
  new PlanesDieta(
    1,
    "Plan de Entrenamiento",
    2000,
    "https://api.nutricionistasofiadiloreto.com.ar/api/tratamientos/imagen/0f272af6-1c8d-4104-471b-08d655720ca3"
  )
);
planes.push(
  new PlanesDieta(
    2,
    "Plan Vegetariano",
    1000,
    "https://api.nutricionistasofiadiloreto.com.ar/api/tratamientos/imagen/27e67577-6b6d-49d9-471f-08d655720ca3"
  )
);
planes.push(
  new PlanesDieta(
    3,
    "Plan Completo",
    4000,
    "https://api.nutricionistasofiadiloreto.com.ar/api/tratamientos/imagen/dbd574b7-4a2a-4228-65bd-08d7dbf48c15"
  )
);

//cards html

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

//agregar planes al carrito

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

  //alertas

  if (aux === undefined) {
    carrito.push(item);
    Swal.fire({
      icon: 'success',
      title: 'El plan fue a??adido correctamente al carrito!',
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
      text: '??ste plan ya se encuentra en el carrito'
    })
  }
};

//funci??n vaciar carrito

const vaciarCarrito = () => {
  carrito = [];

  guardarStorage();
};

const guardarStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//link de pago

async function generarLinkDePago() {
  const productsToMP = carrito.map((element) => {
    let nuevoElemento = {
      title: element.name,
      description: "",
      picture_url: element.img,
      category_id: element.id,
      quantity: 1,
      currency_id: "ARS",
      unit_price: Number(element.price),
    };
    return nuevoElemento;
  });
  const response = await fetch(
    "https://api.mercadopago.com/checkout/preferences",
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer TEST-680675151110839-052307-64069089337ab3707ea2f547622a1b6a-60191006",
      },
      body: JSON.stringify({
        items: productsToMP,
      }),
    }
  );
  console.log(response)
  const data = await response.json();
  console.log(data)
  window.open(data.init_point, "_blank");
}
