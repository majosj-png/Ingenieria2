import { supabase } from "./supabase.js";

// Create a single supabase client for interacting with your database


const app = document.querySelector("#contenido");

async function mostrarAlerta(id, nombre) {
  const resultado = await Swal.fire({
    title: `¿Está seguro que desea borrar a ${nombre}?`,
    text: "No podrá revertir esta acción.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, borrar",
    cancelButtonText: "Cancelar",
  });

  if (!resultado.isConfirmed) {
    return;
  }

  const { data, error } = await supabase
    .from("clientes")
    .delete()
    .eq("id", id)
    .select("id");

  if (error || data.length === 0) {
    console.error("Error al borrar el cliente:", error);

    await Swal.fire({
      title: "No se pudo borrar",
      text: error?.message ?? "Verifique las políticas RLS de Supabase.",
      icon: "error",
    });

    return;
  }

  await Swal.fire({
    title: "¡Borrado!",
    text: `El cliente ${nombre} ha sido borrado.`,
    icon: "success",
  });

  await obtenerClientes();
}

app.addEventListener("click", (event) => {
  const botonBorrar = event.target.closest(".btn-borrar");

  if (!botonBorrar) {
    return;
  }

  mostrarAlerta(botonBorrar.dataset.id, botonBorrar.dataset. nombre);
});

  const obtenerClientes = async () => {
  try {
    // const respuesta = await fetch(urlApi);
    // const clientes = await respuesta.json();
    const { data: clientes, error } = await supabase
      .from("clientes")
      .select("*");

    if (error) {
      throw error;
    }

    
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
                  data-nombre="${element.firstname} ${element.lastname}"
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
  } catch (error) {
    console.log("OCURRIO UN ERROR " + error);
  }
};

obtenerClientes();

const btnGuardarCambios=document.querySelector("#GuardarCambiosButton");
btnGuardarCambios.addEventListener("click", async () => {
  alert("Se presionó el botón Guardar cambios");
})