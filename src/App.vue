<template>
    <link rel="stylesheet" href="https://use.typekit.net/nho3nsv.css">
    <router-view />
</template>

<script>
    import Accueil from './components/Accueil.vue'

    export default {
        name: 'App',
        components: {
            Accueil
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan&display=swap');

    @font-face {
        font-family: "Abygaer";
        src: local("Abygaer"), url(./assets/fonts/Abygaer.otf) format("opentype");
        font-family: "VCR_Mono";
        src: local("VCR_Mono"), url(./assets/fonts/VCR_Mono.ttf) format("truetype");
    }

    #app {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    :root {
        --sac-size: 6;
        --ej-size: 1;
        --fleche-size: 4;
        --mail-size: 1;
        --ad-size: 1;
        --de-size: 1;
        --dn-size: 1;
        --tr-size: 1;
        --ts-size: 1;
    }

    body {
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
    }

    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    * {
        scrollbar-width: auto;
        scrollbar-color: #1c1c1c #1c1c1c00;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 9px;
    }

    *::-webkit-scrollbar-track {
        background: none;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #1c1c1c;
        border-radius: 16px;
        border: 0px none #ffffff00;
    }
</style>