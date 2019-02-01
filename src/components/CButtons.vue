<template>
  <div>
      <div class="q-display-1">Botões do Componente</div>
      <q-btn label="DECREMENTAR" color="negative" @click="decrementCount()"/>
      <q-btn label="INCREMENTAR" color="negative" @click="incrementCount()"/>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('example', ['incrementCount', 'decrementCount'])
  }
}
</script>
