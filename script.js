/*
*Selector del dom
*/
const datos= document.querySelector("#datos");
const selectLibros=document.querySelector("#sellibros");

/*
*Array
*/
const libros =[
    {
        titulo:"1984",
        autor:"George Orwell",
        genero:"Distopía",
        publicacion:"1949"
    },
    {
        titulo:"Orgullo y Prejuicio",
        autor:"Jane Austen",
        genero:"Romance",
        publicacion:"1813"
    },
    {
        titulo:"Cien años de soledad",
        autor:"Gabriel García Márquez",
        genero:"Realismo Mágico",
        publicacion:"1967"
    },
    {
        titulo:"El Gran Gatsby",
        autor:"F. Scott Fitzgerald",
        genero:"Tragedia",
        publicacion:"1925"
    },
    {
        titulo:"Matar a un ruiseñor",
        autor:"Harper Lee",
        genero:"Ficción",
        publicacion:"1960"
    }
];

/* 
!Visibilidad de los libros
   <table>
         <thead>Libros Disponibles</thead>
            <tr>
               <th>Titulo</th>
               <th>Autor</th>
               <th>Genero</th>
               <th>Año</th>
            </tr>
            <tr>
                <td>Titulo1</td>
                <td>Autor1</td>
                <td>Genero1</td>
                <td>año1</td>
            </tr>
            
        </table>     
        

*/
datos.innerHTML= `
<table>
         <thead>Libros Disponibles</thead>
            <tr>
               <th>Titulo</th>
               <th>Autor</th>
               <th>Genero</th>
               <th>Año</th>
            </tr>
            
            `;
let propiedades ="<tr><td>";
for(libro of libros){
    
    for(propiedad in libro){
        
        if(propiedad != ""){            
            propiedades+=
            `
            ${libro[propiedad]}  
            `;            
        }
        propiedades+="</td>"
    }
    propiedades+="</tr>"
   
}
 datos.innerHTML+=`
    ${propiedades}
    </table>
    `;

    /*
    *selector
    */
   for(let selecctor in libro){
    selectLibros.innerHTML+=
   }

