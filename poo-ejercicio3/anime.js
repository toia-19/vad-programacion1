export default class Anime{
    constructor(){
    }

    async obtenerCatalogo(){
        // fetch contiene el getElement por defecto
        const datos = await fetch("https://api.jikan.moe/v3/search/anime?q=sailor%20moon");

        // especificamos que los datos están llegando en formato JSON
        const datos_convertidos = await datos.json();

        const datos_definitivos = datos_convertidos.results;

        let array_catalogo = [];

        datos_definitivos.forEach(element => {
            let columna = `
                <div class="col-4 mt-3">
                    <div class="card border-secondary card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${element.image_url}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${element.title}</h5>
                                    <p class="card-text">${element.synopsis}</p>
                                    <p class="card-text"><small class="text-muted">Episodio: ${element.episodes}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
            array_catalogo.push(columna);
        });

        const catalogo = document.getElementById("catalogo").innerHTML = array_catalogo.join('');
    }
}