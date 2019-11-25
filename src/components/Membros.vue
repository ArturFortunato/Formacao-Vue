<template>
    <div>
        <div v-for="membro in membros" :key="membro.nome" class="red">
            <h1>Nome: {{ membro.nome }} </h1>
            <h2>Departamento: {{ membro.dpt }}</h2>
            <h3>Curso: {{ membro.curso }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'membros',
    data() {
        return {
            membros: [
                {
                    nome: 'Artur Fortunato',
                    dpt: 'Técnico',
                    curso: 'MEIC'
                },
                {
                    nome: 'João Santos',
                    dpt: 'Direção',
                    curso: 'MEEC'
                },
                {
                    nome: 'Maria Carvalho',
                    dpt: 'RH',
                    curso: 'LEGI'
                }
            ]
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