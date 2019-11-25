<template>
    <div class="red">
        <h1>Formação: {{ object.framework }}</h1>
        <h2>Formador: {{ object.formador }}</h2>
        
        <h3 v-if="object.atendees.length >= 10">Bom formador: {{ object.atendees.length }} atendees</h3>
        <h3 v-else-if="object.atendees.length >= 8">Ainda me safo: {{ object.atendees.length }} atendees</h3>
        <h3 v-else>RIP</h3>

        <div>
            <p v-for="atendee in object.atendees" :key="atendee">{{ atendee }}</p>
        </div>

        <button @click="setFavorite()">Selecionar como favorita</button>
    </div>
</template>

<script>
export default {
    name: 'FormacaoBlank',
    props: ['object'],
    methods: {
        setFavorite() {
            this.$emit('chooseFavorite', this.object.framework)
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