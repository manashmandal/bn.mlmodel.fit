<template>
  <div id="load-div" v-loading.body="loading">
    <h1 id="title">
      <font-awesome-icon icon="user-secret" />{{
        title || "Writing In Progress..."
      }}
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },

  props: {
    title: String,
  },
};
</script>

<style scoped>
#load-div {
  width: 100%;
}
</style>
