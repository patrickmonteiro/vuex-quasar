<template>
  <div>
    <div>State Count: {{ count }}</div>
    <div>Getter Count status true: {{ activeUsersCount }}</div>
    <div>
      <q-btn label="DECREMENTAR" color="primary" @click="decrementCount()"/>
      <q-btn label="INCREMENTAR" color="primary" @click="incrementCount()"/>
    </div>
    <c-buttons></c-buttons>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import CButtons from 'components/CButtons'
export default {
  name: 'PageIndex',
  components: {
    CButtons
  },
  computed: {
    ...mapState('example', ['count']),
    ...mapGetters('example', ['activeUsersCount'])
  },
  methods: {
    // ...mapMutations('example', ['INCREMENT', 'DECREMENT'])
    ...mapActions('example', ['incrementCount', 'decrementCount'])
  }
}
</script>
