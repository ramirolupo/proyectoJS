//Definición de variables

/*let playaIzq = 5;
let playaDer = 2;
let playaCentral = 0;


let ingreso = parseInt(prompt("                                 ESTACIONAMIENTO RUPERTI\n\n Menu principal:\n\n1 - Estacionar playa izquierda.\n2 - Estacionar playa central.\n3 - Estacionar playa derecha.\n4 - Salir"));

while (ingreso != 4) {

    switch (ingreso) {
        case 1: //Estacionar playa izquierda
            alert("Disculpa campeón pero está llena, elegí otra");
            break;
        
        case 2: //Estacionar playa central
            alert("Hay lugar, acordate que lo dejaste en la playa central");
            break;

        case 3: //Estacionar playa derecha
            alert("Hay lugar, acordate que lo dejaste en la playa derecha");
            break;

        case 4: //Salir
            alert("Muchas gracias por venir a estacionamiento Ruperti!");
            break;

        default:
            alert("Te equivocaste de opción rey, probá de nuevo");
            break;
    } 

    ingreso = parseInt(prompt("                                 ESTACIONAMIENTO RUPERTI\n\n Menu principal:\n\n1 - Estacionar playa izquierda.\n2 - Estacionar playa central.\n3 - Estacionar playa derecha.\n4 - Salir"));

}
*/
function validarMenu(mensaje) {

    let validar = true;

    do {
        prompt(mensaje);
        //if () {
            
        //}

    } while (validar);
}