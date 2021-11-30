function saludar(nombre) {
    alert('Hola ' + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
  }
  
 // procesarEntradaUsuario(saludar);


  // un callback es una funcion que se ejecuta dentro de otra funcion como un argumento  


  const empleados = [
    {
        id: 1,
        nombre: 'Lina',
    },

    {
        id: 2,
        nombre: 'Marcos',
    },

    {
        id: 3,
        nombre: 'Veronica',
    },

    {
        id: 4,
        nombre: 'Jhon',
    }
]

const salarios = [
    {
        id: 1,
        Salario: 5000,
    },

    {
        id: 2,
        Salario: 2500,
    },

    {
        id: 3,
        Salario: 1000,
    }

]


const EmpleadoSeleccionado = (id, nombre) => {
    nombre = console.log(empleado.nombre);
    return callback;
}


EmpleadoSeleccionado (1,callback);