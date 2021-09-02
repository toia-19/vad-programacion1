const calcular = () => {
    const radio = document.getElementById("inp_radio").value;

    // Math.PI calcula el número PI (3,14)
    const circunferencia = Math.PI * Math.pow(radio,2);

    document.getElementById("h_resultado").textContent = "El área de la cincurferencia es: "+ circunferencia;
}

const boton = document.getElementById("btn_calcular");
boton.addEventListener("click",calcular);