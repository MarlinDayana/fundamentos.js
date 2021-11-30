// funcion tradicional importante recordar como se colocan paramentros y que se debe tener en cuenta a la hora de colocarlos 
// va el tipo de variable, nombre de la variable,parentesis y llaves, dentro de las llaves van los metodos 

function saludos () {
   return 'Hola mundo';
}

// console.log(saludos());


// funcion flecha 
// tener en cuenta la sintaxis se
// va el tipo de variable, nombre de la variable, signo del igual, parentesis, flecha gorda, y llaves, dentro de las llaves van los metodos 


const adicion = (a,b) =>{
    return a+b;
}

//console.log(adicion(15,76));


// tener en cuenta cuando el cuerpo de la funcion tiene solo una linea por ejemplo el return se puede escribir de la siguiente manera

const sumar = (a,b) => a+b;

console.log(sumar(15,76));