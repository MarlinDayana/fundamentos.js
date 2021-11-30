// callbacks es una funcion que se va a ejecutar dentro de otra en determinado tiempo que se le defina que
// Ejemplo: 

//setTimeout(function() {
//    console.log('Hello world');
//}, 3000);


// la funcion setTimeout sirve para ejecutar metodos controlando el tiempo para su ejecucion de

const getUsuarioByID = (id, callbacks) =>{

    const usuario = {
        id,
        nombre: 'Marlin Dayana'
}

setTimeout (() => {
  callbacks(usuario)}, 1500)
    
}

getUsuarioByID(10, (usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});


// importante recordar para colocar mayuscula a todo el string de utilizar toUpperCase()