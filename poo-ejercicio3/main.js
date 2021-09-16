import Anime from "./anime.js";

const obtener = () => {
    const instancia = new Anime();
    instancia.obtenerCatalogo();
}

const boton = document.getElementById("btn_obtener");
boton.addEventListener("click",obtener);