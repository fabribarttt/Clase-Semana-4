// Hacemos referencia al boton Get Info y escuchamos el evento click
document.getElementById('btnGetInfo').addEventListener('click', () => fetchData());

// Hacemos referencia al contenedor para el card 
const cardContainer = document.getElementById('cardContainer');

function fetchData() {

    // Crea numeros aleatorios para ir modificando el numero del personaje
    const randomCharacter = Math.floor(Math.random() * 826);

    // URL de la API de RICK AND MORTY
    const url = `https://rickandmortyapi.com/api/character/${randomCharacter}`
    // Crea un objeto XMLHTTPRequest
    const api = new XMLHttpRequest();

    // Configurar el tipo de solicitud y la URL
    api.open('GET', url, true);

    // Define una función de callback que se ejecuta cuando la solicitud se completa
    api.onreadystatechange = () => {

        // Comprueba el estado del servidor que todo este OK
        if (api.status === 200 && api.readyState === 4) {
            
            // Procesa la respuesta del servidor 
            const data = JSON.parse(api.responseText);

            console.log(api.responseText);
            
            // Actualiza e inserta codigo HTML desde javascript dentro del div con id="cardContainer"
            cardContainer.innerHTML = 
            `
            <div class="card" style="width: 18rem;">
                <img src="${data.image}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <ul class="list-group">
                        <li class="list-group-item">Especie: ${data.species} </li>
                        <li class="list-group-item">Status: ${data.status} </li>
                        <li class="list-group-item">Genero: ${data.gender} </li>
                    </ul>
                </div>
            </div>
            `
        }
    };

    // Envia la solicitud
    api.send();

}