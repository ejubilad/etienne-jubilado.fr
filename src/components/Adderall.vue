<template>
    <div class="adderall">
        <div class="all">
            <div class="container">
                <div class="ad_canva pixelart">
                    <img class="ad_spritesheet" src="..\assets\adderall-sheet.png" alt="ad">
                </div>
            </div>
            <div class="intro">
                <div class="texte">
                    <video controls width="300vw">
                        <source src="..\assets\adderall.mp4">
                    </video>
                    <p>Adderall est un court-métrage qui traite du dopage dans l'e-sport et surtout des dérives que cela
                        peu engendrer.</p>
                    <p>Le sujet contenait des contraintes intéressantes comme le format vertical, un exercice très
                        intéressant où j'ai mélangé motion design et parties filmées.</p>
                    <p>Il s'agit de mon projet vidéo le plus important à ce jour, et j'ai hâte de pouvoir retravailler
                        sur ce type de projet.</p>
                    <img class="affiche" src="..\assets\affiche_adderall.png">
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

    .ad_canva {
        width: calc(441px*var(--ad-size));
        height: calc(62px*var(--ad-size));
        overflow: hidden;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 2em;
        padding-bottom: 3em;
    }

    .ad_spritesheet {
        animation: moveSpritesheet 4s steps(33) infinite;
        width: calc(14553px*var(--ad-size));
    }

    .adderall {
        height: 100vh;
        width: 100%;
    }

    .all {
        background-color: red;
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

    video{
        width: max(31.666667vw, 20px);
    }
</style>