import { createRouter, createHistory, createWebHistory } from 'vue-router';
import Accueil from '@/components/Accueil.vue'
import Adderall from '@/components/Adderall.vue'
import Deathsmash from '@/components/Deathsmash.vue'
import Dentra from '@/components/Dentra.vue'
import Transmédia from '@/components/Transmédia.vue'
import Tsog from '@/components/Tsog.vue'

const routes = [
{
    name: 'Acceuil',
    path: '/',
    component: Accueil,
},
{
    name: 'Adderall',
    path: '/adderall',
    component: Adderall,
},
{
    name: 'Deathsmash',
    path: '/deathsmash',
    component: Deathsmash,
},
{
    name: 'Dentra',
    path: '/dentra',
    component: Dentra,
},
{
    name: 'Transmédia',
    path: '/transmédia',
    component: Transmédia,
},
{
    name: 'Tsog',
    path: '/tsog',
    component: Tsog,
}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;