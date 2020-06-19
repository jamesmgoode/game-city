import Router from 'vue-router'
import Home from './components/Home.vue'
import Torchbearer from './components/torchbearer/Torchbearer.vue'
import NineIsles from './components/nineisles/NineIsles.vue'
import NineIslesHome from './components/nineisles/NineIslesHome.vue'
import MyNineIsles from './components/nineisles/MyNineIsles.vue'
import AllResearch from './components/nineisles/AllResearch.vue'
import Union from './components/union/Union.vue'

export default new Router({
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
            component: NineIsles,
            children: [
                {
                    path: '',
                    name: 'NineIslesHome',
                    component: NineIslesHome
                },
                {
                    path: 'mynineisles',
                    name: 'MyNineIsles',
                    component: MyNineIsles
                },
                {
                    path: 'allresearch',
                    name: 'AllResearch',
                    component: AllResearch
                }
            ]
        },
        {
            path: '/union',
            name: 'Union',
            component: Union
        }
    ]
})
