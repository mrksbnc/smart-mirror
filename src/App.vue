<template>
  <div class="app">
    <Loader v-if="isLoading" msg="loading..." />
    <Dashboard v-else />
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
