<template>
    <div>
        <h1>Image</h1>
        <img :src="imagePokemon" alt="" >
        <img :src="imagenUltimate" alt="">

    </div>
</template>

<script>
    export default {
        props:{
            imagePokemon: '',
            imagenUltimate: ''

        },
    }
</script>

