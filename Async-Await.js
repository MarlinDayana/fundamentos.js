
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

// await solo es valido dentro de una funcion asyncrona 
const getInfoUsuario = async () => {
   // return 'Hola Mundo'

   try{
    const empleado = await getEmpleados(id);
    const salario = await getSalarios(id);
 
    return `El salario del empleado ${empleado} es de: ${salario}`;

   }catch (error) {
       return error;
   }
   

}
const id = 4;


getInfoUsuario()
  .then( msg => console.log(msg))
  .catch (err => console.log(err));

