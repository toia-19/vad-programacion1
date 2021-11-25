<template>
    <div class="row">
     
        <div v-for="p of lista_datos" v-bind:key="p.id" class="col-3 me-1 mb-3">
            <div class="card">
              <img :src="p.url" class="card-img-top" alt="..." style="height:15rem">
                <div class="card-body">
                    <h5 class="card-title">{{p.descripcion}}</h5>
                    <p class="card-text">{{p.precio}}</p>
                    <p class="card-text">{{p.descuento}}</p>
                    <button class="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>

 


    </div>
</template>

<script>
import {collection, onSnapshot} from 'firebase/firestore'
import {db} from '../utils/firebase'

export default {
    name: 'CatalogoPublic',
    data(){
        return{
            lista_datos:[]
        }
    },
    methods:{
        obtener_datos(){
            onSnapshot (collection(db,'CatalogoAdmin'), (snapshot) => {
                this.lista_datos = []
                snapshot.docs.map((doc) => {
                    this.lista_datos.push({...doc.data(), id:doc.id})
                })
            })
        }
    },
    mounted(){
        this.obtener_datos()
    }
}
</script>