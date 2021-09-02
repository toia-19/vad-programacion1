import Bhaskara from "./bhaskara.js";

const mostrar = () => {
    const a = document.getElementById("inp_a").value;
    const b = document.getElementById("inp_b").value;
    const c = document.getElementById("inp_c").value;

    /*
        1- Se crea la instancia.
        2- Se envían los parámetros al constructor.
        3- Se ejecuta el constructor.

        La instancia no es más que un objeto de la clase, una extención
    */
    const instancia = new Bhaskara(a,b,c);

    // haciendo uso de la instancia, ejecutamos el método de la clase calcular_r1/2()
    const raiz1 = instancia.calcular_r1();
    const raiz2 = instancia.calcular_r2();

    document.getElementById("h_r1").textContent = "Raiz 1: " + raiz1;
    document.getElementById("h_r2").textContent = "Raiz 2: " + raiz2;
}

const boton = document.getElementById("btn_calcular");
boton.addEventListener("click",mostrar);