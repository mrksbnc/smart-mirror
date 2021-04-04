<template>
  <component :is="componentProp" />
</template>

<script>
export default {
  name: 'TopRight',
  props: {
    componentProp: {
      type: String,
    },
  },
};
</script>

<style></style>
