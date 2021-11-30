// promesas

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

const getEmpleados =(id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find ( e => e.id === id )?.nombre;

        // if y else simplificado sin llaves con : para indicar el else
        (empleado)
        ?resolve (empleado)
        : reject (`El empleado con id ${id} no existe`);
        

         // ejemplo de if completo         
         //    //* if (empleado){
        //     resolve (empleado);
        // }else{
        //   reject (`El empleado con id ${id} no existe`)}
       //}

    }); 

    return promise;

    
}

const getSalarios= (id) => {
return new Promise ((resolve, reject) => {
   const salario = salarios.find (s=> s.id ===id )?.Salario;

   (salario) 
   ?resolve (salario) 
   : reject (`El salario del empleado con id ${id} es inexistente`);

});

return Promise;

}

const id = 4;


// getEmpleados(id)
//        .then(empleado=>console.log(empleado))
//        .catch(err => console.log(err));
   

// getSalarios(id)
//        .then(salario=>console.log(salario))
//        .catch(err => console.log(err));



// promesashell ojo con esto 
// getEmpleados(id)
//         .then ( empleado=>{

//             getSalarios(id)
//                 .then (salario => {
//                     console.log('El empleado', empleado, 'tiene un salario de:', salario);
//                 })
//                 .catch(err => console.log(err))
//             })

//             .catch (err=> console.log(err))
            
                
    // las promesas ayudan a optimizar el codigo con el resolve y el reject pero es importante tener cuidado para con las promesas en cadena 
    // ya que se vuelve dificil de leer el codigo 


    // promesas en cadena 
     let nombre;


     getEmpleados (id)
        .then (empleado => { 
            nombre=empleado;
            return getSalarios(id)
        })
       .then (salario => console.log('El empleado con el nombre', nombre, 'tiene un salario de:', salario))
       .catch (err => console.log(err));
          
   
