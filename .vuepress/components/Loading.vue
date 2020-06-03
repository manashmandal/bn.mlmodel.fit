<template>
  <div id="load-div" v-loading.body="loading">
    <h1 id="title">
      <font-awesome-icon icon="edit" id="edit-icon" />{{
        title || "লেখালেখির কাজ চলছে..."
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

#edit-icon {
  margin-right: 10px;
}
</style>
