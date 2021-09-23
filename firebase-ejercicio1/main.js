/*
    db = database
    se inicia el servicio; nos conectamos a la base de datos
*/
const db = firebase.firestore();

const guardarCliente = async () => {
    const nombre = document.getElementById("inp_nombre").value;
    const apellido = document.getElementById("inp_apellido").value;
    const dni = document.getElementById("inp_dni").value;

    /*
        Si la propiedad y la variable tienen los mismos nombres, se pueden simplificar
        nombre: nombre -> nombre
    */
    const unCliente = {
        nombre,
        apellido,
        dni
    }

    // Usamos a database para entrar a la colección cliente, y se setea el documento
    // Enviamos los datos
    await db.collection("clientes").doc().set(unCliente);

    // Los input son vaciados para reutilizarse
    document.getElementById("inp_nombre").value = '';
    document.getElementById("inp_apellido").value = '';
    document.getElementById("inp_dni").value = '';
}

const boton = document.getElementById("btn_guardar");
boton.addEventListener("click",guardarCliente);