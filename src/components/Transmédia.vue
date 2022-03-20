<template>
    <div class="transmedia">
        <div class="all">
            <div class="container">
                <div class="tr_canva pixelart">
                    <img class="tr_spritesheet" src="..\assets\transmedia-sheet.png" alt="tr">
                </div>
            </div>
            <div class="intro">
                <div class="texte">
                    <video controls width="666vw">
                        <source src="..\assets\Hestia.mp4">
                    </video>
                    <video controls width="666vw">
                        <source src="..\assets\Icare.mp4">
                    </video>
                    <video controls width="666vw">
                        <source src="..\assets\Ares.mp4">
                    </video>
                    <p>Dans le cadre de ma matière audiovisuelle, j'ai réalisé un projet transmédia.</p>
                    <p>Celui-ci raconte l'histoire de trois braqueurs maladroits qui décide de braquer une banque.</p>
                    <p>Le but d'un projet transmédia est de créer une sorte de mini jeu de piste à travers un
                        court-métrage. Dans le cas de ce projet, nous avons également réalisé un site web qui représente
                        une interface de Windows 98.</p>
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

    .tr_canva {
        width: calc(555px*var(--tr-size));
        height: calc(83px*var(--tr-size));
        overflow: hidden;
    }

    .tr_spritesheet {
        animation: moveSpritesheet 4s steps(24) infinite;
        width: calc(13320px*var(--tr-size));
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
        background-color: #03797a;
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