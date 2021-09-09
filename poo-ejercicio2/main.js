import Area from "./area.js";

const mostrar = () => {
    const a = document.getElementById("inp_a").value;
    const b = document.getElementById("inp_b").value;
    const h = document.getElementById("inp_h").value;

    const instancia = new Area(a,b,h);
    const respuesta = instancia.calcularAreaTrap();

    document.getElementById("h_resp1").textContent = "Resultado: " + respuesta;
}

const mostrar2 = () => {
    const b2 = document.getElementById("inp_b2").value;
    const h2 = document.getElementById("inp_h2").value;

    const instancia = new Area('','','',b2,h2);
    const respuesta = instancia.calcularArea();

    document.getElementById("h_resp2").textContent = "Resultado: " + respuesta;
}

const boton1 = document.getElementById("btn_calcular1");
boton1.addEventListener("click",mostrar);

const boton2 = document.getElementById("btn_calcular2");
boton2.addEventListener("click",mostrar2);