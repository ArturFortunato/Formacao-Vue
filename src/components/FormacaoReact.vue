<template>
    <div class="red">
        <h1>Formação: {{ framework }}</h1>
        <h2>Formador: {{ formador }}</h2>
        
        <h3 v-if="atendees.length >= 10">Bom formador: {{ atendees.length }} atendees</h3>
        <h3 v-else-if="atendees.length >= 8">Ainda me safo: {{ atendees.length }} atendees</h3>
        <h3 v-else>RIP</h3>

        <div>
            <p v-for="atendee in atendees" :key="atendee">{{ atendee }}</p>
        </div>

        <button @click="delete_last()">Apagar último a chegar</button>
    </div>
</template>

<script>
export default {
    name: 'Formacao',
    data() {
        return {
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
    },
    methods: {
        delete_last() {
            this.atendees.pop()
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