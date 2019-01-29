<template>
  <div>{{ count }}</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PageIndex',
  computed: {
    ...mapState('example', ['count'])
  }
}
</script>
