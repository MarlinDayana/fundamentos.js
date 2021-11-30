const Deadpool = {
    nombre:'May',
    apellidos: 'Marquez',
    profesion: 'jardinera',
     getnombre(){
       return `${this.nombre } ${this.apellidos} ${this.profesion} `
     }
}
// console.log(Deadpool.getnombre()); 


// deestructuracion - permite imprimir aun valor dado a alguna variable o constante


//const{nombre, apellidos, profesion, edad}=Deadpool;

//console.log(nombre, apellidos, profesion, edad);


function impriHero(nombre, apellidos, poder, edad) {

  console.log(nombre, apellidos, poder, edad);
}

//impriHero(Deadpool);


// array lista de nombres de super heroes

const superherores =['Capitan America', 'IronMan', 'Thor', 'flash'];

//console.log(superherores[0]+'es un superheroe de marvel' + ' ' + superherores[3] +' ' + 'es un superheroe de DC');

//para obtener cada uno de los valores de ese array tendremos que crear una variable nueva para cada elemento  

//const h1= superherores[0];
//const h2= superherores[1];
//const h3= superherores[2];
//const h4= superherores[3];

//console.log(h1 + h2 + h3 + h4);

// Aplicando la deestructuracion al array 

// const{h1,h2,h3,h4}=superherores; con llaves no se puede porque estamos dees tructurando un array no un objeto debemos usar llaver cuadradas

//const[ h1,h2,h3,h4 ]=superherores;

const[ ,,,h4 ]=superherores; // si solo quiero llamar un elemento del array

//console.log(h1, h2, h3, h4);

console.log(h4);