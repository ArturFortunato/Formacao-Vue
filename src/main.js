import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import FormacaoVue from './components/FormacaoVue.vue'
import FormacaoReact from './components/FormacaoReact.vue'

Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/formacao_vue',
			component: FormacaoVue
		},
		{
			path: '/formacao_react',
			component: FormacaoReact
		}
	]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
