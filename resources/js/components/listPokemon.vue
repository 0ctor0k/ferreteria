<template>
    <div>
        <h1>Lista</h1>
        <select @change="imagenPokemon" v-model="imagenUrlPokemon">
            <option v-for="{ name, url } in arrayPokemon" v-text="name" :value="url"></option>
        </select>
        <!-- <button @click="enviar">Enviar</button> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                arrayPokemon: [],
                imagenUrlPokemon: '',
                imgArtWork: '',
            }
        },
        methods:{
                consultaPokemon(){
                /* if(this.edad >= 18){
                    this.info = `Persona mayor de edad ${this.nombre}`
                }else{
                    this.info = `Persona menor de edad ${this.nombre}`
                } */
                axios.get('https://pokeapi.co/api/v2/pokemon')
                .then(response => {
                    
                    this.arrayPokemon = response.data.results
                    console.table(this.arrayPokemon);
                    
                })
                .catch(error => {
                    console.log(error)
                })
            },
            imagenPokemon(){
                axios.get(this.imagenUrlPokemon)
                .then(res => {
                    console.log(res)
                    this.imgArtWork = res.data.sprites.other["official-artwork"].front_default
                    this.enviar()
                })
                .catch(err => {
                    console.error(err); 
                })   
            },
            enviar(){
                this.$emit("imagenPokemon",this.imgArtWork)
            },
        },
        mounted () {
            this.consultaPokemon();
        },
        
    }
</script>

