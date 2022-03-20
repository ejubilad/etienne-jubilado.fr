<template>
    <div class="accueil">
        <div class="noise"></div>
        <div class="animate__animated animate__bounceIn animate__delay-1s flotaison">
            <div class="rotate">
                <div class="sac_canva pixelart">
                    <img class="sac_spritesheet" src="..\assets\Sac.png" alt="sac">
                </div>
                <div class="ej_canva pixelart">
                    <img class="ej_spritesheet" src="..\assets\EJ.png" alt="ej">
                </div>
            </div>
        </div>
        <div class="animate__animated animate__fadeIn animate__delay-5s scroll">
            <p>Tu devrais<br>descendre :(</p>
            <img class="fleche_pixel pixelart" src="..\assets\fleche.png" alt="sac">
        </div>
        <div class="intro">
            <div class="texte">
                <p><strong>Je suis Étienne, un étudiant français en MMI, je viens d'Autun une petite ville de Bourgogne,
                        mais je vis actuellement à Montbéliard dans le cadre de mes études.</strong></p>
                <p>Là-bas, je développe mes compétences en terme de : développement, design, communication et motion
                    design. Je suis très sensible aux détails visuels, à l'animation ou à l'infographie de manière
                    générale.</p>
                <p>En dehors du travail, j'adore le jeu vidéo, la musique et la peinture.</p>
                <p>Mes passions, mes idées personnelles, ainsi que l'université, m'ont permis de développer certains
                    projets que vous pouvez retrouver ici.</p>
            </div>
        </div>
        <div class="projet">
            <router-link to="/adderall">
                <h2 class="btn">Adderall</h2>
            </router-link>
            <router-link to="/deathsmash">
                <h2 class="btn">Deathsmash</h2>
            </router-link>
            <router-link to="/dentra">
                <h2 class="btn">Dentra</h2>
            </router-link>
            <router-link to="/tsog">
                <h2 class="btn">Tsog</h2>
            </router-link>
            <router-link to="/transmédia">
                <h2 class="btn">Transmédia</h2>
            </router-link>
        </div>
        <div class="footer">
            <div class="mail_canva pixelart">
                <a href="mailto:etiennejub@gmail.com"><img class="mail_spritesheet" src="..\assets\sendMail.png"
                        alt="mail"></a>
            </div>
        </div>
    </div>
</template>

<script>

</script>


<style scoped>
    .accueil {
        background-color: #ffedd6;
    }

    .flotaison {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    .rotate {
        /* animation: hotline 10s ease-in-out infinite; */
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    @keyframes hotline {
        from {
            transform: translate(-50%, -50%) rotate(5deg);
        }

        50% {
            transform: translate(-50%, -50%) rotate(-5deg);
        }

        to {
            transform: translate(-50%, -50%) rotate(5deg);
        }
    }

    .scroll {
        text-align: center;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 97vh;
        position: absolute;
        justify-content: flex-end;
        top: 0;
    }

    .sac_canva {
        width: calc(29px*var(--sac-size));
        height: calc(28px*var(--sac-size));
        overflow: hidden;
        margin-bottom: 10px;
    }

    .sac_spritesheet {
        animation: moveSpritesheet 5s steps(51) infinite;
        width: calc(1479px*var(--sac-size));
    }

    .ej_canva {
        width: calc(397px*var(--ej-size));
        height: calc(122px*var(--ej-size));
        overflow: hidden;
    }

    .ej_spritesheet {
        animation: moveSpritesheet 5s steps(29) infinite;
        width: calc(11513px*var(--ej-size));
    }

    .mail_canva {
        width: calc(596px*var(--mail-size));
        height: calc(124px*var(--mail-size));
        overflow: hidden;
    }

    .mail_spritesheet {
        animation: moveSpritesheet 2s steps(14) infinite;
        width: calc(8344px*var(--mail-size));
    }

    .fleche_pixel {
        width: calc(9px*var(--fleche-size));
        height: calc(5px*var(--fleche-size));
    }

    .pixelart {
        image-rendering: pixelated;
    }

    @keyframes moveSpritesheet {
        from {
            transform: translate3d(0px, 0, 0)
        }

        to {
            transform: translate3d(-100%, 0, 0)
        }
    }

    .scroll p {
        font-family: "VCR_Mono";
        font-size: 1em;
        letter-spacing: 3px;
        margin-bottom: 8px;
    }

    .scroll>p,
    .scroll>img {
        animation: moveUpDown 1s infinite ease-in-out;
    }

    @keyframes moveUpDown {
        from {
            transform: translateY(0)
        }

        50% {
            transform: translateY(10px)
        }

        to {
            transform: translateY(0)
        }
    }

    .intro {
        display: grid;
        grid-template-columns: 1fr 1.5fr 1fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas: ". texte .";
        margin-top: 16em;
    }

    .texte {
        grid-area: texte;
        line-height: 1.36;
    }

    .intro p {
        font-size: max(1.6666666667vw, 20px);
        font-family: 'League Spartan', sans-serif;
    }

    .intro p:not(:last-child) {
        margin-bottom: 5.5555555556vh;
    }

    .projet {
        padding: 12em 2em;
    }

    .projet h2 {
        margin: 0;
        border-bottom: 1px solid black;
        font-size: max(7.2222222222vw, 60px);
        padding-top: 3.1111111111vh;
        padding-bottom: 3.1111111111vh;
        font-family: itc-benguiat-condensed, sans-serif;
        font-weight: 400;
        font-style: italic;
        text-transform: uppercase;
    }

    .projet h2:first-child {
        border-top: 1px solid black;
    }

    .btn {
        padding: 0.9rem 1.8rem;
        color: black;
        position: relative;
        background-color: transparent;
        text-decoration: none;
        overflow: hidden;
        z-index: 1;
        font-family: inherit;
    }

    .btn:hover {
        color: white;
    }

    .btn::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        color: white;
        background-color: black;
        transform: translateX(-100%);
        transition: all .3s;
        z-index: -1;
    }

    .btn:hover::before {
        transform: translateX(0);
    }

    .noise::before {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        content: "";
        opacity: .1;
        z-index: 1000;
        pointer-events: none;
        background: url("../assets/noise.gif");
    }

    .footer {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    a {
        text-decoration: none;
    }
</style>