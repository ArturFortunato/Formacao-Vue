<template>
	<div id="app">
		<!--Básico -->
		<img alt="Vue logo" src="./assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>

		<!-- Info no componente -->
		<Formacao />

		<!-- props/emit -->
		<h1>Framework favorita: {{ favorite }}</h1>
		<div v-for="formacao in formacoes" :key="formacao.formador" class="red">
			<FormacaoBlank :object="formacao" @chooseFavorite="setFavorite" />
		</div>

		<!-- programmatic -->
		<p>
			<router-link to="/formacoes">Formacoes</router-link>
		</p>	
		<p>
			<router-link to="/membros">Membros</router-link>
		</p>
		<router-view></router-view>
		
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Formacao from './components/Formacao.vue'
import FormacaoBlank from './components/FormacaoBlank.vue'

export default {
	name: 'app',
	components: {
		HelloWorld,
		Formacao,
		FormacaoBlank
	},
	data() {
		return {
			favorite: '',
			formacoes: {
				formacao_vue: {
					framework: 'Vue',
					formador: 'Artur Fortunato',
					atendees: [
						'Francisco Serralheiro',
						'José Ribeiro',
						'Luís Ferreira',
						'Tomás Prego',
						'Tomás Silva',
						'Alexandre Ferreira (mas atrasado ou nem isso...)',
						'António Ramalho',
						'Diansambo Masembo',
						'Martim Nabais',
						'Miguel Mira',
						'Tiago Franco'
					]
				},
				formacao_react: {
					framework: 'React',
					formador: 'David Martins',
					atendees: [
						'Francisco Serralheiro',
						'José Ribeiro',
						'Francisco Pires',
						'Tomás Prego',
						'Tomás Silva',
						'Alexandre Ferreira (mas atrasado ou nem isso...)'
					]
				}
			}
		}
	},
	methods: {
		setFavorite(new_favorite) {
			this.favorite = new_favorite
		}
	}
}
</script>

<style scoped>
#app {
	text-align: center;
	margin-top: 60px;
}

.red
{
	border: 1px solid red;
}
</style>
