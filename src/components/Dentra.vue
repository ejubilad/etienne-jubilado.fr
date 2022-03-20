<template>
    <div class="dentra">
        <div class="all">
            <div class="container">
                <div class="dn_canva pixelart">
                    <img class="dn_spritesheet" src="..\assets\dentra-sheet.png" alt="dn">
                </div>
            </div>
            <div class="intro">
                <div class="texte">
                    <video controls width="666vw">
                        <source src="..\assets\Dentra.mp4">
                    </video>
                    <p>Dentra est un projet de motion design qui joue sur la parallaxe.</p>
                    <p>Il rejoint un ensemble de mini projet que j'ai réalisé, avec une balle rebondissante et un
                        travail de morphisme.</p>
                    <p>J'aime beaucoup réaliser ce genre de petit projet, ils me permettent de m'entraîner et de
                        pratiquer avec des résultats assez rapides.</p>
                </div>
            </div>
            <div class="noise"></div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .noise::before {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        content: "";
        opacity: .1;
        z-index: 1;
        pointer-events: none;
        background: url("../assets/noise.gif");
    }

    @keyframes moveSpritesheet {
        from {
            transform: translate3d(0px, 0, 0)
        }

        to {
            transform: translate3d(-100%, 0, 0)
        }
    }

    .dn_canva {
        width: calc(355px*var(--dn-size));
        height: calc(62px*var(--dn-size));
        overflow: hidden;
    }

    .dn_spritesheet {
        animation: moveSpritesheet 3s steps(21) infinite;
        width: calc(7455px*var(--dn-size));
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 2em;
        padding-bottom: 3em;
    }

    .adderall {
        height: 100vh;
        width: 100%;
    }

    .all {
        background-color: rgb(201, 113, 228);
    }

    .intro {
        display: grid;
        grid-template-columns: 1fr 1.5fr 1fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas: ". texte .";
    }

    .texte {
        grid-area: texte;
        line-height: 1.36;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .texte>* {
        margin-bottom: 2em;
    }

    .intro p {
        font-size: max(1.6666666667vw, 20px);
        font-family: 'League Spartan', sans-serif;
    }

    .affiche {
        width: max(31.666667vw, 20px);
        height: auto;
    }
</style>