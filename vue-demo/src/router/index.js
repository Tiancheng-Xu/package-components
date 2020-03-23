import Vue from 'vue'
import Router from 'vue-router'
import keyboardEvents from '@/components/keyboard-events'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/keyboardEvents',
      name: 'keyboardEvents',
      component: keyboardEvents
    }
  ]
})
