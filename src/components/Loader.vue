<template>
  <div>
    <div class="loader-container">
      <div class="dna-loader">
        <div class="node"></div>
        <div class="node"></div>
        <div class="node"></div>
        <div class="node"></div>
        <div class="node"></div>
        <div class="node"></div>
        <div class="node"></div>
        <div class="node"></div>
        <div class="node"></div>
        <div class="node"></div>
      </div>
    </div>
    <div class="loader-text-wrapper" v-if="msg != null">
      <span class="loader-text">{{ computedMsg }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  computed: {
    computedMsg: function() {
      return this.msg;
    },
  },
  props: {
    msg: {
      type: String,
      default: null,
    },
  },
};
</script>
