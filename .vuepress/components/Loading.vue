<template>
  <div id="loading-component" v-loading.body="loading">
    <h1 id="loading-title">
      <font-awesome-icon icon="edit" id="edit-icon" />
      {{
      title || "লেখালেখির কাজ চলছে..."
      }}
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  },

  props: {
    title: String
  }
};
</script>

<style scoped>
#loading-component {
  width: 100%;
}

#edit-icon {
  margin-right: 10px;
}
</style>
