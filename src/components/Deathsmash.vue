<template>
    <div class="deathsmash">
        <div class="all">
            <div class="container">
                <div class="de_canva pixelart">
                    <img class="de_spritesheet" src="..\assets\deathsmash-sheet.png" alt="de">
                </div>
            </div>
            <div class="intro">
                <div class="texte">
                    <img class="affiche" src="..\assets\Deathsmash.png">
                    <p>Il s'agit d'un événement que j'ai mis en place dans l'IUT du Creusot.</p>
                    <p>J'ai réalisé le projet entièrement seul en m'occupant : du matériel, de la promotion, de
                        l'organisation...</p>
                    <p>C'est un projet qui me tient beaucoup à cœur puisqu'il s'agit d'une initiative personnelle, mais
                        aussi car c'est ce projet qui m'a motiver à m'orienté dans l'infographie.</p>
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

    .de_canva {
        width: calc(569px*var(--de-size));
        height: calc(62px*var(--de-size));
        overflow: hidden;
    }

    .de_spritesheet {
        animation: moveSpritesheet 4s steps(30) infinite;
        width: calc(17070px*var(--de-size));
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
        background-color: rgb(59, 167, 255);
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