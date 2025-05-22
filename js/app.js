// const baseEndpoint = 'https://api.github.com';
// const usersEndpoint = `${baseEndpoint}/users`;
// const $n = document.querySelector('name');
// const $b = document.querySelector('#blog');
// const $l = document.querySelector('.location');

// function displayUser(username) {
//   $n.textContent = 'cargando...';
//   const response = await fetch(`${usersEndpoint}/${username}`);
//   console.log(data);
//   $n.textContent = '${data.name}';
//   $b.textContent = '${data.blog}';
//   $l.textContent = '${data.location}';
// }

// function handleError(err) {
//   console.log('OH NO!');
//   console.log(err);
//   n.textContent = `Algo salió mal: ${err}`
// }

// displayUser('stolinski').catch(handleError);

const nameElement = document.getElementById("name");
const blog = document.getElementById("blog");
const location = document.querySelector(".location");

const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;

// Función para llamar a la API
function usarAPI(username) {
 
  nameElement.textContent = "Cargando...";

  fetch(`${usersEndpoint}/${username}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (!data.name) {
        throw new Error("Usuario no encontrado");
      }

      // Intervención del DOM
      nameElement.textContent = data.name;
      blog.textContent = data.blog;
      location.textContent = data.location;
    })
    .catch(function (error) {
      console.log("Ocurrió un error:", error.message);
      nameElement.textContent = "Error al llamar a la API.";
      blog.textContent = "-";
      location.textContent = "-";
    });
}

usarAPI("stolinski");