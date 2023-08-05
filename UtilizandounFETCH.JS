// Definir la URL de la API
const API_URL = 'https://jsonplaceholder.typicode.com';

// Seleccionar el elemento HTML donde se mostrará la respuesta de la API
const HTMLresponse = document.querySelector("#app");

// Realizar una solicitud GET a la API utilizando fetch
fetch(`${API_URL}/users`)
  // Convertir la respuesta en formato JSON
  .then((response) => response.json())
  .then((users) => {
    // Crear un arreglo de plantillas (templates) HTML utilizando el método map
    const userTemplates = users.map((user) => {
      // Cada plantilla contiene el nombre y el correo electrónico del usuario
      return `<li>${user.name} 😎 ${user.email} 📧</li>`;
    });

    // Insertar las plantillas en el elemento HTML seleccionado
    HTMLresponse.innerHTML = `<ul>${userTemplates.join("")}</ul>`;
  });
