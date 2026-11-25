# ExamenModeloC



datos.innerHTML= `
<table>
         <thead>Libros Disponibles</thead>
            <tr>
               <th>Titulo</th>
               <th>Autor</th>
               <th>Genero</th>
               <th>Año</th>
            </tr>
            
            `
            ;
for(libro of libros){
    let propiedades = "<tr>";
    for(propiedad in libro){
        if(propiedad != ""){            
            propiedades+=
            `
                     
            <td>${libro[propiedad]}</td>
            </tr>
            `;            
        }
    }
    datos.innerHTML+=`
    ${propiedades}
    `
}