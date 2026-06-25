//----var let const
// const arrayNumero = [10, 20, 30];
// arrayNumero.push(40);
// console.log(arrayNumero);

// const persona = {
//   nombre: "Majo",
//   edad: 43,
// };
// persona.edad = 42;
// persona.pais = "Argentina";
// console.log(persona);

//funciones
//function sumar(num1, num2) {
//   console.log(num1 + num2);
// }

// const sumarDos = (num1, num2) => {
//   return num1 + num2;
// };

// const sumarTres = (num1, num2) => num1 + num2;

// const resultado = sumarTres(15, 30);
// console.log(resultado);
// sumar(10, 20);

// const mensaje = (nombre) => "Hola soy " + nombre;
// console.log(mensaje("Majo"));

// //Template string
// const numeros = (valor1, valor2) => `el suma es: ${valor1 + valor2}`;
// console.log(numeros(2, 3));

//--Objetos
// const cliente = {
//   nombre: "Tomas",
//   edad: 19,
//   casado: false,
// };
// cliente.id = 1;
// cliente.telefonos = [446575, 432928];
// console.log(cliente);
// console.log(cliente.nombre);
// console.log(cliente.id);
// console.log(cliente.telefonos[0]);
// const { edad } = cliente;
// console.log(edad);
// const web = {
//   nombre: "bluuweb",
//   links: {
//     enlace: "www.bluuweb.cl",
//   },
//   redesSociales: {
//     youtube: {
//       enlace: "youtube.com/bluuweb",
//       nombre: "bluuweb yt",
//     },
//   },
// };

// //console.log(web.redesSociales.youtube.enlace);
// const { enlace } = web.redesSociales.youtube;
// console.log(enlace);

//fetch
//let urlApi =
//"https://cliente-d3cd.restdb.io/rest/productos?apikey=b0eb9425a1e36db4ca5a258f455d1462affc1";
// fetch(urlApi)
//   .then((respuesta) => respuesta.json())
//   .then((libros) => {
//     //console.log(data);
//     libros.forEach((libro) => {
//       console.log(libro.nombre);
//     });
//   })
//   .catch((error) => console.log("OCURRIO UN ERROR:" + error));

//--async

//let urlApi =
//"https://mayclnkieddfcmtdlcuc.supabase.co/rest/v1/clientes?apikey=sb_publishable_G3DAS1w88uUU4UQouTM-FQ_hXlJCboc";

// const obtenerClientes = async () => {
//   try {
//     const respuesta = await fetch(urlApi);
//     const clientes = await respuesta.json();
//     const app = document.querySelector("#app");
//     app.innerHTML = "<p>Lista de Clientes</p>";
//     console.log(clientes);
//     clientes.forEach((element) => {
//       app.innerHTML += `<p>${element.firstname} ${element.lastname}</p>`;
//     });
//   } catch (error) {
//     console.log("OCURRIO UN ERROR " + error);
//   }
// };

// obtenerClientes();
//import { supabase } from "./supabase.js";

// // // let urlApi =
// // //   "https://mayclnkieddfcmtdlcuc.supabase.co/rest/v1/clientes?apikey=sb_publishable_G3DAS1w88uUU4UQouTM-FQ_hXlJCboc";

// // // const obtenerClientes = async () => {
// // //   try {
// // //      // const respuesta = await fetch(urlApi);
// // //      // const clientes = await respuesta.json();
// // //     const app = document.querySelector("#app");
// // //     app.innerHTML = "<h1>Lista de Clientes</h1>";
// // //     app.innerHTML += "<hr/>";
// // //     console.log(clientes);
// // //     let htmlTabla ='<table class="table table-dark table-striped">';
// // //     htmlTabla += `<th>Apellido y Nombre</th>
// // //                   <th>Direccion</th>
// // //                   <th>DNI</th>
// // //                   <th>Acciones</th>`;

// // //     //clientes.forEach((element) => {
// // //     //    htmlTabla += `<tr><td>${element.firstname} ${element.lastname}</td><td>${element.address}</td><td>${element.dni}</td></tr>`;
// // //     //});
// // //     htmlTabla += clientes
// // //    // .filter((element) => element.firstname.includes("u"))
// // //   .map(
// // //     (element) => `
// // //       <tr>
// // //         <td>${element.firstname} ${element.lastname}</td>
// // //         <td>${element.address}</td>
// // //         <td>${element.dni}</td>
// // //         <td>
// // //           <button class="btn btn-danger" onclick="mostrarAlerta(${element.id})">Borrar</button>
// // //         </td>
// // //       </tr>
// // //     `
// // //   )
// // //   .join("");
// // //     htmlTabla +="</table>"
// // //     app.innerHTML += htmlTabla;
// // //   } catch (error) {
// // //     console.log("OCURRIO UN ERROR " + error);
    
// // //   }
// // // };

// // // obtenerClientes();

// // // const boton=document.querySelector("#btnMostrarAlerta");

// // // boton.addEventListener("click",mostrarAlerta);


// // // function mostrarAlerta(id) {
// // // Swal.fire({
// // //   title: `Esta seguro que desea ${id} borrar?`,
// // //   text: "No podra revertir esta accion!",
// // //   icon: "warning",
// // //   showCancelButton: true,
// // //   confirmButtonColor: "#3085d6",
// // //   cancelButtonColor: "#d33",
// // //   confirmButtonText: "Si, borrar!",
// // //   cancelButtonText: "Cancelar",
// // // }).then((result) => {
// // //   if (result.isConfirmed) Swal.fire({
// // //     title: "Borrado!",
// // //     text: "El cliente ha sido borrado.",
// // //     icon: "success"
// // //   });
// // // });
// // // }

import { supabase } from "./supabase.js";

//------var let const
// const arrayNumero = [10, 20, 30];
// arrayNumero.push(50);
// console.log(arrayNumero);
// const persona = {
//   nombre: "Alejandro",
//   edad: 49,
// };
// persona.edad = 20;
// persona.pais = "Argentina";
// console.log(persona);
//--------Funciones
// function sumar(num1, num2) {
//   console.log(num1 + num2);
// }
// const sumarDos = (num1, num2) => {
//   return num1 + num2;
// };
// const sumarTres = (num1, num2) => num1 + num2;
// sumar(10, 20);
// const resultado = sumarTres(15, 30);
// console.log(resultado);
// const mensaje = (nombre) => "Hola soy " + nombre;
// console.log(mensaje("Alejandro"));
//-- Objetos
// const cliente = {
//   nombre: "Aquiles",
//   edad: 19,
//   casado: false,
// };
// cliente.telefonos = [447106, 500386];
// cliente.id = 1;
// console.log(cliente);
// console.g(cliente.nombre);
// console.log(cliente.telefonos[1]);
// const { edad } = cliente;
// console.log(edad);
// const web = {
//   nombre: "bluuweb",
//   links: {
//     enlace: "www.bluuweb.cl",
//   },
//   redesSociales: {
//     youtube: {
//       enlace: "youtube.com/bluuweb",
//       nombre: "bluuweb yt",
//     },
//   },
// };

// console.log(web.redesSociales.youtube.enlace);
// const { enlace } = web.redesSociales.youtube;
// console.log(enlace);
//let urlApi =

//conecto el boton con la funcion mostrarAlerta usando el atributo onclick en el HTML



// Create a single supabase client for interacting with your database


const boton=document.querySelector("#btnMostrarAlerta");

function mostrarAlerta(id){
Swal.fire({
  title: `Está seguro que desea borrar al cliente ${id}?"`,
  text: "No podrá revertir esta acción!",
  icon: "warning",
  showCancelButton: ue,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Si, borrar!",
  cancelButtonText: "Cancelar",
}).then((result) => {
  if (result.isConfirmed) Swal.fire({
    title: "Borrado!",
    text: "El cliente ha sido borrado.",
    icon: "success"
  });
});
}

boton.addEventListener("click", () => mostrarAlerta());

  const obtenerClientes = async () => {
  try {
    // const respuesta = await fch(urlApi);
    // const clientes = await respuesta.json();
    const { data: clientes, error } = await supabase
      .from("clientes")
      .select("*");

    if (error) {
      throw error;
    }

    const app = document.querySelector("#contenido");
    app.innerHTML = `<h1>Lista de clientes</h1>`;
    app.innerHTML+="<hr/>";
    console.log(clientes);
    let htmlTabla="<table class='table table-dark table-striped'>";
    htmlTabla += `<tr>
                        <th>Apellido y Nombre</th>
                        <th>Dirección</th>
                        <th>Dni</th>
                        <th>Acciones</th>
                 </tr>`;
    htmlTabla += clientes
    //.filter((element) => element.firstname.includes("u"))
    .map(
        (element) => `
        <tr>
            <td>${element.firstname} ${element.lastname}</td>
            <td>${element.address}</td>
            <td>${element.dni}</td>
            <td>
                <button
                  class="btn btn-danger btn-borrar"
                  data-id="${element.id}"
                >
                  Borrar
                </button>
            </td>
        </tr>
        `
    )
    .join("");
    htmlTabla += '</table>';
    app.innerHTML += htmlTabla;

    app.addEventListener("click", (event) => {
      const botonBorrar = event.target.closest(".btn-borrar");

      if (botonBorrar) {
        mostrarAlerta(botonBorrar.dataset.id);
      }
    });
  } catch (error) {
    console.log("OCURRIO UN ERROR " + error);
  }
};
