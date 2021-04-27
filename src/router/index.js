import Vue from 'vue'
import VueRouter from 'vue-router'
import base from './views/base.vue'
import ux from './views/ux.vue'
import dev from './views/dev.vue'
import pm from './views/pm.vue'
import ceo from './views/ceo.vue'
import cto from './views/cto.vue'
import hr from './views/hr.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'base',
            component: base
        },
        {
            path: '/ux',
            name: 'ux',
            component: ux
        },
        {
            path: '/dev',
            name: 'dev',
            component: dev
        },
        {
            path: '/pm',
            name: 'pm',
            component: pm
        },
        {
            path: '/ceo',
            name: 'ceo',
            component: ceo
        },
        {
            path: '/cto',
            name: 'cto',
            component: cto
        },
        {
            path: '/hr',
            name: 'hr',
            component: hr
        }
    ]
})

export default router
