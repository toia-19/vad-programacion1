<template>
    <div class="row">
        <div class="col-4">
            <div class="mb-3">
                <label class="form-label">Descripción:</label>
                <input v-model="descripcion" class="form-control" placeholder="Ingrese descripción" type="text">
            </div>
            <div class="mb-3">
                <label class="form-label">Precio:</label>
                <input v-model="precio" class="form-control" placeholder="Ingrese el precio" type="number">
            </div>
            <div class="mb-3">
                <label class="form-label">Porcentaje de Descuento:</label>
                <input v-model="descuento" class="form-control" placeholder="Ingrese el precio" type="number">
            </div>
            <div class="mb-3">
                <label class="form-label">Categoría:</label>
                <input v-model="categoria" class="form-control" placeholder="Ingrese categoría" type="text">
            </div>
            <div class="mb-3">
                <label class="form-label">Stock:</label>
                <input v-model="stock" class="form-control" placeholder="Ingrese el stock" type="number">
            </div>
            <div class="mb-3">
                <label class="form-label">Estado:</label>
                <select v-model="estado" class="form-select" aria-label="Default select example">
                    <option value="0">Activo</option>
                    <option value="1">Inactivo</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Adjuntar imagen:</label>
                <input id="inp_file" placeholder="Seleccionar archivo" type="file">
            </div>

            <button v-if="boton == 0" @click="guardar_datos()" class="btn btn-success">Guardar</button>
            <button v-if="boton == 1" @click="actualizar_datos()" class="btn btn-secondary">Actualizar</button>
        </div>

        <div class="col-8">
            <table class="table">
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>% Descuento</th>
                        <th>Categoría</th>
                        <th>Stock</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="catalogoAdmin of lista_datos" v-bind:key="catalogoAdmin.id">
                        <td>
                            <img style="width:5rem" :src="catalogoAdmin.url" alt="">
                        </td>

                        <td>{{catalogoAdmin.descripcion}}</td>
                        <td>{{catalogoAdmin.precio}}</td>
                        <td>{{catalogoAdmin.descuento}}</td>
                        <td>{{catalogoAdmin.categoria}}</td>
                        <td>{{catalogoAdmin.stock}}</td>
                        <td>{{catalogoAdmin.estado}}</td>

                        <td>
                            <button @click="eliminar_datos(catalogoAdmin.id)" class="btn btn-danger btn-sm">
                                <i class="fa fa-trash-o"></i>
                            </button>
                            <button @click="editar_datos(catalogoAdmin)" class="btn btn-warning btn-sm">
                                <i class="fa fa-edit"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc} from 'firebase/firestore';
import {uploadBytes, ref, getDownloadURL} from 'firebase/storage';
import {db, storage} from '../utils/firebase';

export default {
    name: 'CatalogoAdminForm',
    data(){
        return{
            descripcion: '',
            precio: null,
            descuento: null,
            categoria: '',
            stock: null,
            estado: 1,
            lista_datos: [],
            boton: 0,
            url: null
        }
    },
    methods:{
        async subir_imagen(){
            const file = document.getElementById("inp_file").files[0]

            const config = ref(storage,'catalogoAdmin_imagenes/'+file.name);
            await uploadBytes(config,file).then(()=>{
                alert("¡Operación exitosa!")
                document.getElementById("inp_file").value = '';
            })
            this.url = await getDownloadURL(config)
        },
        async guardar_datos(){
            await this.subir_imagen()
            const objeto_datos = {
                descripcion: this.descripcion,
                precio: this.precio,
                descuento: this.descuento,
                categoria: this.categoria,
                stock: this.stock,
                estado: this.estado,
                url: this.url
            }
            const coleccion = collection(db,'CatalogoAdmin');
            addDoc(coleccion, objeto_datos);
            this.vaciar_datos();
        },
        obtener_datos(){
            onSnapshot (collection(db,'CatalogoAdmin'), (snapshot) => {
                this.lista_datos = []
                snapshot.docs.map((doc) => {
                    this.lista_datos.push({...doc.data(), id:doc.id})
                })
            })
        },
        eliminar_datos(id){
            deleteDoc(doc(db,'CatalogoAdmin',id))
        },
        editar_datos(catalogoAdmin){
            this.descripcion = catalogoAdmin.descripcion;
            this.precio = catalogoAdmin.precio;
            this.descuento = catalogoAdmin.descuento;
            this.categoria = catalogoAdmin.categoria;
            this.stock = catalogoAdmin.stock;
            this.estado = catalogoAdmin.stock;

            this.id = catalogoAdmin.id;
            this.boton = 1;
        },
        actualizar_datos(){
            const datos_modificados = {
                descripcion: this.descripcion,
                precio: this.precio,
                descuento: this.descuento,
                categoria: this.categoria,
                stock: this.stock,
                estado: this.estado
            }
            updateDoc(doc(db,'CatalogoAdmin',this.id), datos_modificados)
            this.boton = 0;
            this.vaciar_datos();
        },
        vaciar_datos(){
            this.descripcion = '',
            this.precio = null,
            this.descuento = null,
            this.categoria = '',
            this.stock = null,
            this.estado = 1
        }
    },
    mounted(){
        this.obtener_datos();
    }
}
</script>