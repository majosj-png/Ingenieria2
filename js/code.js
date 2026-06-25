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

let urlApi =
  "https://mayclnkieddfcmtdlcuc.supabase.co/rest/v1/clientes?apikey=sb_publishable_G3DAS1w88uUU4UQouTM-FQ_hXlJCboc";

const obtenerClientes = async () => {
  try {
    const respuesta = await fetch(urlApi);
    const clientes = await respuesta.json();
    const app = document.querySelector("#app");
    app.innerHTML = "<h1>Lista de Clientes</h1>";
    app.innerHTML += "<hr/>";
    console.log(clientes);
    let htmlTabla ='<table class="table table-dark table-striped">';
    htmlTabla += `<th>Apellido y Nombre</th>
                  <th>Direccion</th>
                  <th>DNI</th>`;
    //clientes.forEach((element) => {
    //    htmlTabla += `<tr><td>${element.firstname} ${element.lastname}</td><td>${element.address}</td><td>${element.dni}</td></tr>`;
    //});
    htmlTabla += clientes
   // .filter((element) => element.firstname.includes("u"))
  .map(
    (element) => `
      <tr>
        <td>${element.firstname} ${element.lastname}</td>
        <td>${element.address}</td>
        <td>${element.dni}</td>
      </tr>
    `
  )
  .join("");
    htmlTabla +="</table>"
    app.innerHTML += htmlTabla;
  } catch (error) {
    console.log("OCURRIO UN ERROR " + error);
    
  }
};

obtenerClientes();
