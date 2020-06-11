<template>
  <div></div>
</template>

<script>
import Vuex from "vuex";
const store = new Vuex.Store({
  state: {
    tableData: [],
    regressionData: [],
    parameters: {
      theta_0: 0,
      theta_1: 0,
    },
  },

  mutations: {
    // store.commit('increase')
    increase(state) {
      state.count++;
    },
  },
});

export default {
  computed: {},

  methods: {},
};
</script>
