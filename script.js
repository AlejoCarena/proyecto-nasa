// URL base de la API de APOD
const apiUrl = 'https://api.nasa.gov/planetary/apod';

// Clave API (reemplaza 'YOUR_API_KEY' con tu clave API real)
const apiKey = 'QrQzpixzHTgcDhbGN7RDG5yL1begsV78KKjkHNLk';

// Elementos traidos del DOM
let description = document.querySelector('.description');
let containerImg = document.querySelector('.container-img');


// Hacer una solicitud GET a la API de APOD
fetch(`${apiUrl}?api_key=${apiKey}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // trabajar con los datos recibidos de la API
    console.log(data);
    containerImg.innerHTML = `<img src="${data.hdurl}" alt="imagen" class="img">`;
    description.innerHTML =`<h2>${data.title}</h2>
            <div class="text">
                <p>${data.explanation}</p>
            <div class="info">
                <p>${data.date}</p>
                <p>credits: ${data.copyright}</p>
            </div>
            </div>`;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
