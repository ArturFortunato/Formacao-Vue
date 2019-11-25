<template>
    <div>
        <h1>Framework favorita: {{ favorite }}</h1>
		<div v-for="formacao in formacoes" :key="formacao.formador" class="red">
			<FormacaoBlank :object="formacao" @chooseFavorite="setFavorite" />
		</div>
    </div>
</template>

<script>
import FormacaoBlank from './FormacaoBlank.vue'

export default {
    name: 'Formacoes',
    components: {
        FormacaoBlank
    },
    data() {
        return {
            favorite: 'Vue',
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

<style>
.red
{
    max-width: 500px;
    border: 2px solid red;

}
</style>