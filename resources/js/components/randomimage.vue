<template>
    <div>
        <h1>Random Image</h1>
        <label for="">Ancho: </label>
        <input type="number" id="ancho">
        <br>
        <label for="">Alto: </label>
        <input type="number" id="alto">
        <br>
        <label for="">¿Escala de grises?</label>
        <input type="checkbox" name="gris" id="gris" v-model="gris">
        <br>
        <label for="">¿Blur?</label>
        <input type="checkbox" name="" id="blur" v-model="blur">
        <br>
        <select v-if="blur" v-model="blurValue">
            <option v-for="n in 10" :value="n">{{ n }}</option>
        </select>
        <br>
        <button @click="imagenRandom">Enviar</button>
        <!-- <img :src="imagePokemon" alt="" > -->
    </div>
</template>

<script>
export default {

    data() {
        return {
            ancho: '',
            alto: '',
            imgRandom: '',
            gris: false,
            blur: false,
            blurValue: 1

        }
    },
    methods: {
        imagenRandom() {
            let ancho = document.getElementById('ancho').value;
            let alto = document.getElementById('alto').value;
            let gris = this.gris;
            let blur = this.blur;
            let blurValue = this.blurValue;
            let url = `https://picsum.photos/${ancho}/${alto}`;
            let params = [];
            if (gris) {
                params.push('grayscale');
            }
            if (blur) {
                params.push(`blur=${blurValue}`);
            }
            if (params.length > 0) {
                url += '?' + params.join('&');
            }
            axios.get(url)
                .then(res => {
                    this.imgRandom = res.config.url;
                    this.enviar();
                })
                .catch(err => {
                    console.error(err);
                });


        },
        enviar() {
            this.$emit("imagenrandom", this.imgRandom)
        },

    }
}
</script>