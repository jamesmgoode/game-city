import Router from 'vue-router'
import Home from './components/Home.vue'
import Torchbearer from './components/torchbearer/Torchbearer.vue'
import NineIsles from './components/nineisles/NineIsles.vue'
import Union from './components/union/Union.vue'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/torchbearer',
            name: 'Torchbearer',
            component: Torchbearer
        },
        {
            path: '/nineisles',
            name: 'NineIsles',
            component: NineIsles
        },
        {
            path: '/union',
            name: 'Union',
            component: Union
        }
    ]
})
