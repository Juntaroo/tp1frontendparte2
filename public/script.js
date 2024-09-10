const form = document.getElementById("formulario");

document.addEventListener("DOMContentLoaded", async () => {
    await createOptions();  // Llamamos a la función para crear las opciones
});

async function createOptions() {
    try {
        const response = await fetch("./public/roles.json");
        const data = await response.json();

        // Referencia al select
        const selectRol = document.getElementById("rol");

        // Iteramos sobre el array de roles en el JSON
        data.roles.forEach(rol => {
            const option = document.createElement("option");
            option.value = rol.id;  // Asignamos el ID como valor
            option.textContent = rol.titulo;  // Asignamos el título como texto

            selectRol.appendChild(option);  // Agregamos la opción al select
        });
    } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
    }
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    const datos = new FormData(e.target);

    const datosingresados = Object.fromEntries(datos.entries());

    console.log(datosingresados);
});



/*const rolesData = {
    "roles": [
      { "id": "administrador", "titulo": "Administrador" },
      { "id": "informatica", "titulo": "Informatica" },
      { "id": "secretaria", "titulo": "Secretaria" },
      { "id": "transporte", "titulo": "Transporte" },
      { "id": "recursos", "titulo": "Recursos Humanos" },
      { "id": "camaras", "titulo": "Camaras" }
    ]
  };
  
  document.addEventListener('DOMContentLoaded', () => {
      const selectRol = document.getElementById('rol');
      
      // Iteramos sobre el array de roles en el objeto
      rolesData.roles.forEach(rol => {
          const option = document.createElement('option');
          option.value = rol.id;
          option.textContent = rol.titulo;
          selectRol.appendChild(option);
      });
  });*/