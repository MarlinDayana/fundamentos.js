// revisar los problemas que se generan con callbacks

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

const getEmpleados =(id, callback) => {
    const empleado = empleados.find ( e => e.id === id )
   
    if (empleado) {
        callback(null, empleado.nombre);
    } else {
        callback (`Empleado con id ${id} no existe`) ;
    }
    
}

const getSalarios =(id, callback) => {
  const salario = salarios.find (s => s.id === id)?.Salario; // ?null check operator  "si existe un salario"

if (salario) { 
    callback(null, salario);
} else { 
    callback (`No existe salario para el empleado con id ${id}`);

    }

}

const id =4;

getEmpleados(id, (err, empleado)=> {
    if (err){
        console.log('ERROR!');
        return console.log(err);
    }
    
   getSalarios(id, (err, salario) => {
      if (err){
      return console.log(err);
    }
     console.log('El empleado', empleado, 'tine un salario de:', salario)
})
})



// revisar la ultima parte que no la entendí bien 


//callback hell


// promesas en