
const boton=document.querySelector("#btnAgregarFila");
//agregamos una fila a la tabla cada vez que se hace click en el boton
boton.addEventListener("click",function(){
    const tabla=document.querySelector("tbody");
    const fila=document.createElement("tr");    
    fila.innerHTML=`
        <td colspan="3">Fila agregada con javascript</td>
    `;
    tabla.appendChild(fila);
});