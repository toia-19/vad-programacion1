/*
    db = database
    se inicia el servicio; nos conectamos a la base de datos
*/
const db = firebase.firestore();

// GUARDAR CLIENTE
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

    listarCliente();
}

// botón guardar
const boton = document.getElementById("btn_guardar");
boton.addEventListener("click",guardarCliente);

// ELIMINAR CLIENTE
function eliminarCliente (id) {
    db.collection("clientes").doc(id).delete();

    listarCliente();
}

// LISTAR CLIENTE
const listarCliente = async () => {
    const clientes = await db.collection("clientes").get();

    let lista_clientes = [];
    
    // mapeo = ordenamiento de los datos
    const lista = clientes.docs.map(doc => {
        lista_clientes = doc.data();
        lista_clientes.id = doc.id;
        return lista_clientes;
    })

    let total_filas = [];

    lista.forEach(element => {
        let fila = `
            <tr>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.dni}</td>
                <td>
                    <button onclick="eliminarCliente('${element.id}')" class="btn btn-danger btn-sm">
                    <i class="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        `
        total_filas.push(fila);
    });

    document.getElementById("tbody").innerHTML = total_filas.join('');
}

// ejecutamos la función
listarCliente();