fetch('/Data/Productos.json') 
    .then(respuesta => { 
        console.log('Respuesta cruda del servidor:', respuesta);
         return respuesta.json(); 
        }
    ) 
    .then(datos => { 
        console.log('¡Productos cargados!', datos); 
    }) 
    .catch(error => { 
        console.error('¡Ups! Hubo un error:', error); 
    }) 
    .finally(() => { 
        console.log("termino");
    })