<template>
    <div class="tsog">
        <div class="all">
            <div class="container">
                <div class="ts_canva pixelart">
                    <img class="ts_spritesheet" src="..\assets\tsog-sheet.png" alt="ts">
                </div>
            </div>
            <div class="intro">
                <div class="texte">
                    <img class="tsog_phone" src="..\assets\tsog_accueil.jpeg">
                    <p>Tsog est le tout premier site que j'ai réalisé en 2019.</p>
                    <p>Il fallait représenter la pollution à travers un super-héros. Dans mon cas, j'ai choisi Ghost
                        Rider, en parlant de la consommation de sa moto.</p>
                    <p>Je ressens une certaine nostalgie vis-à-vis de ce projet, c'est pour ça que j'ai tenu à ce qu'il
                        soit sur ce portfolio.</p>
                    <img class="tsog_phone" src="..\assets\tsog_article.jpeg">
                    <img class="tsog_phone" src="..\assets\tsog_footer.jpeg">
                    <img class="tsog_phone" src="..\assets\tsog_menu.jpeg">
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

    .ts_canva {
        width: calc(241px*var(--ts-size));
        height: calc(64px*var(--ts-size));
        overflow: hidden;
    }

    .ts_spritesheet {
        animation: moveSpritesheet 4s steps(30) infinite;
        width: calc(7230px*var(--ts-size));
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
        background-color: rgb(255, 187, 0);
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



    .intro p {
        font-size: max(1.6666666667vw, 20px);
        font-family: 'League Spartan', sans-serif;
    }

    .texte>* {
        margin-bottom: 2em;
    }

    .affiche {
        width: max(31.666667vw, 20px);
        height: auto;
    }
</style>