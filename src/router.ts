import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import CreditView from './views/CreditView.vue'
import GameView from './views/GameView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },{
      path: '/credit',
      name: 'credit',
      component: CreditView,
    },{
      path: '/game',
      name: 'game',
      component: GameView
    }
  ],
})
