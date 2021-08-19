/* Función Clásica
function calcular(){
    let dato = 10;
    return dato;
}
*/

// Función Flecha
const calcular = () => {
    // Se busca el valor del documento (getElement) y se recoge (value)
    // .value es para input y números en general
    const dato1 = document.getElementById("inp_dato1").value;
    const dato2 = document.getElementById("inp_dato2").value;

    // Math.pow calcula el elevado
    const parte1 = Math.pow(dato1,2) + Math.pow(dato2,2);

    // Math.sqrt calcula la raíz cuadrada
    const resultado = Math.sqrt(parte1);

    // .text es para h1, h2, h3... textos en general
    document.getElementById("h_resultado").textContent = "El resultado es: "+resultado;
}

// No se coloca ningún punto porque no almacena ningún valor
const boton = document.getElementById("btn_calcular");

// El botón reaccionará al escuchar un "click" y ejecutará
boton.addEventListener("click",calcular);