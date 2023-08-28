<template>
   <!--  <div>
        <h1>Hola Mundo</h1>
        <input type="text" v-model="nombre">
        <input type="number" v-model="edad">
        <h3 v-text="nombre"></h3>
        <h3 v-text="edad"></h3>
        <p v-if="edad>=18">
            Mayor de edad.
        </p>
        <p v-else>
            Menor de edad.
        </p>
    </div>
    <span v-text="info"></span>
    <button @click="consultaPokemon">Verificar</button>
    <ul>
        <li v-for="{name,url} in arrayPokemon" v-text="name"></li>
    </ul> -->
    <h1>Pokemon</h1>
    <List @imagen-Pokemon = "getImage"></List>
    <Image :imagePokemon="imagen" ></Image>
    <RandomImage @imagenrandom = "getImageRandom"></RandomImage>
    <Image :imagenUltimate="imagenRandom"></Image>
    
</template>
<script>
import List from '@/components/listPokemon.vue'
import Image from '@/components/imagePokemon.vue'
import RandomImage from '@/components/randomimage.vue'
//import axios from 'axios'

export default{
    components: {
        List,
        Image,
        RandomImage
    },
    data() {
        /* return {
            nombre: '',
            edad: 0,
            info: '',
            arrayPokemon: []
        } */
        return {
            imagen: '',
            imagenRandom: '',
            
        }
    },
    methods: {
       getImage(data){
            this.imagen= data
       },
       getImageRandom(data){
            this.imagenRandom = data
       }

    },
    mounted() {
        //this.consultaPokemon()
    }
}
</script>
<style>

</style>