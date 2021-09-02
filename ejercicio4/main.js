const calcular_tiempo = () => {
    const vo = document.getElementById("inp_vo").value;
    const vf = document.getElementById("inp_vf").value;

    // g (aceleración de la gravedad) = 9.81
    const resultado = (vf - vo) / 9.81;

    return resultado;
}

const mostrar = () => {
    const respuesta = calcular_tiempo();
    document.getElementById("h_resultado").textContent = "El tiempo es: " + respuesta;
}


const boton = document.getElementById("btn_calcular");
boton.addEventListener("click",mostrar);