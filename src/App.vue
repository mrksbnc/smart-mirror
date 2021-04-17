<template>
  <div class="app">
    <DNALoader v-if="isLoading" msg="loading..." />
    <Dashboard />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapGetters({
      isLoading: 'loading/GET_LOADING_STATE',
    }),
  },
};
</script>
