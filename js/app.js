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
const location = document.querySelector('.location');
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users/${user_name}`;

//Función para llamar la API
function usarAPI(nameElement) {
  fetch(usersEndpoint)
  .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      user_name.textContent = `${data.user_name}`;
      blog.textContent = `${data.blog}`;
      location.textContent = `${data.location}`; 
      return response.json();
    })

    
    // .then(function(data) {
    //   const data_response = (`${usersEndpoint}/${user_name}`);
    //   console.log(data);
    //   user_name.textContent = '${data.user_name}';
    //   blog.textContent = '${data.blog}';
    //   location.textContent = '${data.location}';        
    //   return data_response
    //})
    .catch(function(error) {
      console.log("Ocurrió un error:", error);
      user_name.textContent = "Error al llamar a la API.";
    });
}

