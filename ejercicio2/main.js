const calcular = () => {
    const a = document.getElementById("inp_a").value;
    const b = document.getElementById("inp_b").value;
    const c = document.getElementById("inp_c").value;

    const bloque1 = (Math.pow(b,2)) - (4*a*c);
    const raiz = Math.sqrt(bloque1);
    
    const r1 = (-b + raiz) / (2*a);
    const r2 = (-b - raiz) / (2*a);

    document.getElementById("r1").textContent = "Raíz 1: " + r1;
    document.getElementById("r2").textContent = "Raíz 2: " + r2;
}

const boton = document.getElementById("btn_calcular");
boton.addEventListener("click",calcular);