<template>
  <div>
    <div>State Count: {{ count }}</div>
    <div>Getter Count status true: {{ activeUsersCount }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
  computed: {
    ...mapState('example', ['count']),
    ...mapGetters('example', ['activeUsersCount'])
  }
}
</script>
