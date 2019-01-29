import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      example
    }
  })

  return Store
}
