import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import Formacoes from './components/Formacoes.vue'
import Membros from './components/Membros.vue'

Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/formacoes',
			component: Formacoes
		},
		{
			path: '/membros',
			component: Membros
		}
	]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
